import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimeRow from './TimeRow';
import jobData  from '../mockData/calendarData';


/// Functions

const getClockTimes = () => {
  const digitArray = [];
  for ( x=0; x<24; x++ ) {
    digitArray.push(x);
  }
  const timeArray = digitArray.map(digit => {
    if (digit === 0) {
      const midnightObj = {
        hour: (digit + 12),
        unit: "am"
      }
      return midnightObj;
    } else if (digit > 12) {
      const timeObjPM = {
        hour: (digit - 12),
        unit: "pm"
      }
      return timeObjPM;
    } else if (digit == 12) {
      const timeObjNoon = {
        hour: 12,
        unit: "pm"
      }
      return timeObjNoon
    } else {
      const timeObjAM = {
        hour: digit,
        unit: "am"
      }
      return timeObjAM;
    }
  });

  return timeArray
}

const getCorrespondingJob = (clockTime, data) => {
  const correspondingJob = data.find(job => {
    const { start, end } = job.time;
    const scaledStartTime = start.hour; // stays the same
    const scaledEndTime = end.hour + 12; // ex 3pm would scale to 15
    const scaledClockTime = clockTime.hour + 12; // ex 1pm would scale to 13
    if (start.unit == end.unit) { // Both times AM or PM, no 12am/12pm
      if (clockTime.hour == 12) {
        if (scaledStartTime <= 12 && scaledEndTime >= 12) {
          return job
        }
      } else if (start.hour <= clockTime.hour && end.hour >= clockTime.hour && start.unit == clockTime.unit) {
        return job
      }    
    } else if (start.unit !== end.unit) { // If the start/end have different AM/PM units
      if (clockTime.unit == "pm" && clockTime.hour !== 12) {
        if (scaledStartTime <= scaledClockTime && scaledClockTime <= scaledEndTime) {
          return job
        }
      } else if (clockTime.hour == 12) {
        if (clockTime.hour > scaledStartTime && clockTime.hour < scaledEndTime) {
          return job
        }
      }
    }  
  })

  return correspondingJob;
}

// const getCorrespondingJob = (clockTime, data) => {
//   const correspondingJob = data.find(job => {
//     const { start, end } = job.time;
//     // console.log("clockTime.hour", clockTime.hour);
//     // console.log("start.hour", start.hour);
//     // console.log("end.hour", end.hour);
//     if ( start.hour > end.hour ) { // ex. 10am when parsed is bigger than 3pm
//       const newEndTime = end.hour + 12; // reinitialize the end time by 12
//       const newClockTime = clockTime.hour + 12;
//       if ( newEndTime > newClockTime ) { // if the end time is later than the selected clock time
//         return job // this job occurs during the selected clock time
//       } else if (clockTime.hour >= start.hour) {
//         return job
//       }
//     } else if ( clockTime.hour >= start.hour )  { // for AM or PM time blocks
//         return job
//     }
//   });
//   console.log(correspondingJob);
//   if (correspondingJob) {
//     return correspondingJob
//   } else {
//     return null
//   }
// };

///// Component

const TimeRowArray = () => {
  return (
    <View>
      {
        getClockTimes().map((clockTime, key) => {
          const correspondingJob = getCorrespondingJob(clockTime, jobData);
          return <TimeRow clockTime={clockTime} key={key} correspondingJob={(correspondingJob) ? correspondingJob : null} />
        })
      }   
    </View>
  )
};

export default TimeRowArray


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
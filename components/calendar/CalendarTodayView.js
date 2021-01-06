import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import TimeRow from './TimeRow';
import jobData  from '../../mockData/calendarData';


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
        if (start.hour <= 12 && end.hour >= 12 && clockTime.unit == "am") {
          return job
        }
      } else if (start.hour <= clockTime.hour && end.hour >= clockTime.hour && start.unit == clockTime.unit) {
        return job
      }    
    } else if (start.unit !== end.unit) { // If the start/end have different AM/PM units
      if (clockTime.unit == "pm" && clockTime.hour != 12) {
        if (scaledStartTime <= scaledClockTime && scaledClockTime <= scaledEndTime) {
          return job
        }
      } else if (clockTime.unit == "am"  && clockTime.hour != 12) {
        if (start.hour <= clockTime.hour && clockTime.hour <= end.hour) {
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

///// Component

const CalendarTodayView = () => {
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

export default CalendarTodayView


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
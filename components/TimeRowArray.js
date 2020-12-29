import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimeRow from './TimeRow';
import jobData  from '../mockData/calendarData';


/// Functions

const getClockTimes = () => {
  const digitArray = [];
  for ( x=0; x<=24; x++ ) {
    digitArray.push(x);
  }
  const timeArray = digitArray.map(digit => {
    if (digit === 0) {
      const midnight = 12 + 'am';
      return midnight;
    } else if (digit > 12) {
      const timeDigitPM = (digit - 12) + 'pm';
      return timeDigitPM;
    } else {
      const timeDigitAM = digit + 'am';
      return timeDigitAM;
    }
  });

  return timeArray
}

const getCorrespondingJob = (time, data) => {
  const parsedTime = parseInt(time);
  const correspondingJob = data.find(job => {
    const { start, end } = job.time;
    const parsedStart = parseInt(start); // parse the numbers from the corresponding time strings ex '12am'
    const parsedEnd = parseInt(end);
    if ( parsedStart > parsedEnd ) { // ex. 10am when parsed is bigger than 3pm
      const parsedTime = parsedTime + 12;  // reinitialize the clock time by 12
      const newEndTime = parsedEnd + 12; // reinitialize the end time by 12
      if ( newEndTime > parsedTime ) { // if the end time is later than the selected clock time
        return job // this job occurs during the selected clock time
      }
    } else if ( parsedTime >= parsedStart && parsedTime <= parsedEnd )  { // for AM or PM time blocks
        return job
    }
  });

  if (correspondingJob) {
    return correspondingJob
  } else {
    return null
  }
};

///// Component

const TimeRowArray = () => {
  return (
    <View>
      {
        getClockTimes().map((time, key) => {
          const correspondingJob = getCorrespondingJob(time, jobData);
          return <TimeRow time={time} key={key} correspondingJob={(correspondingJob) ? correspondingJob : null} />
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
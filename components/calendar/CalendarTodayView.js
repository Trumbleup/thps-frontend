import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import dayjs from 'dayjs';
import TimeRow from './TimeRow';
import jobData  from '../../mockData/calendarData';


/// Functions

const get24HourTimes = () => {
  const digitArray = [];
  for ( x=0; x<=24; x++ ) {
    digitArray.push(x);
  }
  
  return digitArray
}

const getCorrespondingJob = (hour) => {
  const jobDataRef = jobData; 
  const matchingJob = jobDataRef.find(job => {
    const jobStartTimeDigit = dayjs(job.time.start).format('HH'); 
    if (jobStartTimeDigit == hour) {
      return job
    }
  });

  return matchingJob
};

///// Component

const CalendarTodayView = () => {
  return (
    <View style={styles.container}>
      {
        get24HourTimes().map((hour, key) => {
          const correspondingJob = getCorrespondingJob(hour);
          return <TimeRow hour={hour} key={key} correspondingJob={(correspondingJob) ? correspondingJob : null} />
        })
      }   
    </View>
  )
};

export default CalendarTodayView


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
  });
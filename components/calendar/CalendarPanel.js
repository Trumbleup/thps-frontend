import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import dayjs from 'dayjs';


const convertToClockTime = (hour) => {
    if (0 < hour && hour < 12) {
     return hour + 'am' 
    } else if (hour > 12 && hour < 24) {
      return hour - 12 + 'pm'
    } else if (hour == 12) {
      return hour + 'pm'
    } else if (hour == 24 || hour == 0) {
      2 + 'am'
    } else {
      return null
    }
 }

const CalendarPanel = ({ job }) => {
  const { start, end } = job.time;
  const startTime = convertToClockTime(dayjs(start).format('HH'));
  const endTime = convertToClockTime(dayjs(end).format('HH'));
  const jobHours = dayjs(end).format('HH') - dayjs(start).format('HH');
  const { name } = job;
    return (
        <View style={{
          width: 326,
          height: 100 * jobHours,
          backgroundColor: 'green',
        }}>
          <Text style={styles.timeFont}>{(startTime)}-{endTime}</Text>
          <Text>{name}</Text>
        </View>
      )
};


export default CalendarPanel


const styles = StyleSheet.create({
  jobPanel: {
    flex: 1,
    backgroundColor: 'green',
  },
  timeFont: {
    fontSize: 18
  },
});
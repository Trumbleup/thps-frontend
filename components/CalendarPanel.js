import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CalendarPanel = ({ job }) => {
  const { start, end } = job.time;
  const { name } = job;
    return (
        <View style={styles.jobPanel}>
          <Text style={styles.timeFont}>{start}-{end}</Text>
          <Text>{name}</Text>
        </View>
      )
};


export default CalendarPanel


const styles = StyleSheet.create({
    timeFont: {
      fontSize: 18
    },
    jobPanel: {
      flex: 1,
      backgroundColor: 'green',
    }
  });
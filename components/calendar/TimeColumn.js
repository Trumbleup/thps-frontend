import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CalendarPanel from './CalendarPanel';

const TimeColumn = ({ correspondingJob }) => {
    return (
        <View style={styles.timeColumn}>
            {(correspondingJob) ? <CalendarPanel job={correspondingJob}/> : null }
        </View>
    )
}

export default TimeColumn;

const styles = StyleSheet.create({
    timeColumn: {
      flex: 6,
      borderTopWidth: 1,
      borderTopColor: 'gray',
    },
  });
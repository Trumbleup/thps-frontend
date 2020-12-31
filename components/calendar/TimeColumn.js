import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CalendarPanel from './CalendarPanel';

const TimeColumn = ({ correspondingJob }) => {
    return (
        <View style={styles.timeRow}>
            <View>

            </View>
            {/* {(correspondingJob) ? <CalendarPanel job={correspondingJob}/> : null } */}
        </View>
    )
}

export default TimeColumn;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    timeRow: {
      flex: 10,
      borderTopWidth: 1,
      borderTopColor: 'gray'
    },
    timeFont: {
      fontSize: 18
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: 'gray',
      marginLeft: 10
    },
  });
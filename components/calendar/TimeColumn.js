import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CalendarPanel from './CalendarPanel';


const TimeColumn = ({ clockTime, correspondingJob }) => {
    const [hasJob, setHasJob] = useState(true);
    return (
        <View style={styles.container}>
            <View style={styles.timeRow}>
                <Text style={styles.timeFont}>{clockTime.hour + clockTime.unit}</Text>
                <View style={styles.line}></View>
            </View>
            {/* {(correspondingJob) ? <CalendarPanel job={correspondingJob}/> : null } */}
        </View>
    )
};

export default TimeColumn;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    timeRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 350,
      height: 100,
      marginLeft: 7
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
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimeMarkup from './TimeMarkup';
import TimeColumn from './TimeColumn';


const TimeRow = ({ hour, correspondingJob }) => {
    const [hasJob, setHasJob] = useState(true);
    return (
        <View style={styles.timeRow}>
            <TimeMarkup hour={hour} />
            <TimeColumn correspondingJob={correspondingJob} />
        </View>
    )
};

export default TimeRow;
 

const styles = StyleSheet.create({
    timeRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: 380,
      height: 100,
      marginLeft: 7
    },
  });
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const convertToClockTime = (hour) => {
  if (0 < hour && hour < 12) {
   return hour + 'am' 
  } else if (hour > 12 && hour < 24) {
    return hour - 12 + 'pm'
  } else if (hour == 12) {
    return hour + 'pm'
  } else if (hour == 24 || hour == 0) {
    return 12 + 'am'
  } else {
    return null
  }
}


const TimeMarkup = ({hour}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.timeFont}>{convertToClockTime(hour)}</Text>
        </View>
    )
}

export default TimeMarkup;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    timeFont: {
      fontSize: 15
    },
  });
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TimeMarkup = ({clockTime}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.timeFont}>{clockTime.hour + clockTime.unit}</Text>
        </View>
    )
}

export default TimeMarkup;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    timeFont: {
      fontSize: 18
    },
  });
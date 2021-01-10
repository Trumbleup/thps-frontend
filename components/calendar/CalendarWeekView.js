import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CalendarWeekView = () => {
    return (
        <View style={styles.container}>
            <Text>Week View</Text>
        </View>
    )
}

export default CalendarWeekView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
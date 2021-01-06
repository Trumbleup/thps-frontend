import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';




const CalendarHeader = ({ currentDate, calendarView }) => {
    const formattedDate = currentDate.format('ddd MMMM D, YYYY');
    return (
    <View style={styles.container}>
        <Text style={styles.text}>{formattedDate}</Text>
    </View>
    )
}

export default CalendarHeader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  }
});
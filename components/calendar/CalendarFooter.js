import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CalendarFooterButtons from './CalendarFooterButtons';




const CalendarFooter = ({ setCalendarView }) => {
    return (
    <View style={styles.container}>
        <CalendarFooterButtons setCalendarView={setCalendarView}/>
    </View>
    )
}

export default CalendarFooter

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
});
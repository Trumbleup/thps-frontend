import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import Calendar from '../components/calendar/Calendar';



const CalendarScreen = ({ navigation }) => {
    return (
      <ScrollView style={styles.container}>
        <Calendar />
      </ScrollView>
    )
}

export default CalendarScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });
import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import Calendar from '../components/calendar/Calendar';



const CalendarScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Calendar />
      </View>
    )
}

export default CalendarScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });
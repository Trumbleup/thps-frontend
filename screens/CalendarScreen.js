import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import TimeRowArray from '../components/TimeRowArray';



const CalendarScreen = ({ navigation }) => {
    return (
      <ScrollView style={styles.container}>
        <TimeRowArray />
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
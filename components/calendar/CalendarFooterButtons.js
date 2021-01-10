import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CalendarFooterButtons = ({ setCalendarView }) => {
    return (
        <View style={styles.container}>
            <Button onPress={() => setCalendarView('month')}  title='Month'/>
            <Button onPress={() => setCalendarView('week')}  title='Week'/>
            <Button onPress={() => setCalendarView('today')}  title='Today'/>
        </View>
    )
}

export default CalendarFooterButtons

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
  });
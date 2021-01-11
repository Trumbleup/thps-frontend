import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CalendarFooterButtons = ({ setCalendarView }) => {
    return (
        <View style={styles.container}>
            <Button style={styles.button} onPress={() => setCalendarView('month')}  title='Month'/>
            <Button style={styles.button} onPress={() => setCalendarView('week')}  title='Week'/>
            <Button style={styles.button} onPress={() => setCalendarView('today')}  title='Today'/>
        </View>
    )
}

export default CalendarFooterButtons

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        width: 50,
        height: 50,
    }
  });
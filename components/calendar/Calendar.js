import React, { useState } from 'react';
import dayjs from 'dayjs';
import { View, StyleSheet } from 'react-native';
import TimeRowArray from './TimeRowArray';
import CalendarHeader from './CalendarHeader';
import CalendarFooter from './CalendarFooter';

const Calendar = () => {
    const [ currentDate, setCurrentDate ] = useState(dayjs());
    return (
        <View style={styles.container}>
            <CalendarHeader currentDate={currentDate}/>
            <TimeRowArray />
            <CalendarFooter />
        </View>
    )
}

export default Calendar

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
  });
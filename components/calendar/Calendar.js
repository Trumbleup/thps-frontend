import React, { useState } from 'react';
import dayjs from 'dayjs';
import { View, StyleSheet } from 'react-native';
import CalendarTodayView from './CalendarTodayView';
import CalendarHeader from './CalendarHeader';
import CalendarFooter from './CalendarFooter';
import CalendarWeekView from './CalendarWeekView';
import { ScrollView } from 'react-native-gesture-handler';

const Calendar = () => {
    const [ currentDate, setCurrentDate ] = useState(dayjs());
    const [ calendarView, setCalendarView ] = useState('week');
    return (
        <View style={styles.container}>
            <CalendarHeader currentDate={currentDate} calendarView={calendarView}/>
            <ScrollView style={styles.calendarView}>
                { (calendarView == 'today') ?  <CalendarTodayView /> : (calendarView == 'week') ? <CalendarWeekView /> : null }
            </ScrollView>
            <CalendarFooter setCalendarView={setCalendarView}/>
        </View>
    )
}

export default Calendar

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    calendarView: {
        flex: 6
    }
  });
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
    const [ calendarView, setCalendarView ] = useState('today');
    // console.log(dayjs('2021-01-08T18:38:46-06:00').format('h'));
    return (
        <View style={styles.container}>
            <CalendarHeader currentDate={currentDate} calendarView={calendarView}/>
            <View style={styles.scrollContainer}>
                <ScrollView>
                    { (calendarView == 'today') ?  <CalendarTodayView /> : (calendarView == 'week') ? <CalendarWeekView /> : null }
                </ScrollView>
            </View>
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
    scrollContainer: {
        flex: 11
    }
  });
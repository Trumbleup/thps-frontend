import React, { useState } from 'react';
import dayjs from 'dayjs';
import TimeColumnArray from './TimeColumnArray';

import CalendarHeader from './CalendarHeader';
import { View } from 'react-native';

const Calendar = () => {
    const [ currentDate, setCurrentDate ] = useState(dayjs());
    

    return (
        <View>
            <CalendarHeader currentDate={currentDate}/>
            <TimeColumnArray />
        </View>
    )
}

export default Calendar
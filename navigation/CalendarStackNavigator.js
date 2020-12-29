import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from '@expo/vector-icons';
import CalendarScreen from "../screens/CalendarScreen";
import { screenOptionStyle } from "../styles/styles";

const Stack = createStackNavigator();

const CalendarStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle(navigation)}
        >
            <Stack.Screen name="Calendar" component={CalendarScreen}  />
        </Stack.Navigator>
    )
}

export { CalendarStackNavigator };
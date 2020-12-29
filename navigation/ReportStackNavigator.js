import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from '@expo/vector-icons';
import ReportScreen from '../screens/ReportScreen';
import { screenOptionStyle } from "../styles/styles";

const Stack = createStackNavigator();

const ReportStackNavigator = ({ navigation }) =>  {
    return (
        <Stack.Navigator 
        screenOptions={screenOptionStyle(navigation)}
        >
            <Stack.Screen name="Report" component={ReportScreen} />
        </Stack.Navigator>
    )
}

export { ReportStackNavigator };
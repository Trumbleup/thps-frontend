import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from '../screens/MapScreen';
import { Entypo } from '@expo/vector-icons';
import { screenOptionStyle } from "../styles/styles";

const Stack = createStackNavigator();

const MapStackNavigator = ({ navigation }) =>  {
    return (
        <Stack.Navigator 
        screenOptions={screenOptionStyle(navigation)}
        >
            <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
    )
}

export { MapStackNavigator };
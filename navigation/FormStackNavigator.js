import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from '@expo/vector-icons';
import FormScreen from '../screens/FormScreen';
import { screenOptionStyle } from "../styles/styles";

const Stack = createStackNavigator();

const FormStackNavigator = ({ navigation }) =>  {
    return (
        <Stack.Navigator
        screenOptions={screenOptionStyle(navigation)}
        >
            <Stack.Screen name="Form" component={FormScreen} />
        </Stack.Navigator>
    )
}

export { FormStackNavigator };
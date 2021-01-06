import React from "react"
import { Entypo } from '@expo/vector-icons';

const screenOptionStyle = (navigation) => {
    const styling = {
        headerStyle: {
            backgroundColor: 'blue'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerLeft: () => <Entypo style={{marginLeft: 10}} name="menu" size={24} color="#fff" onPress={() => navigation.openDrawer()} />
    }

    return styling
}

export { screenOptionStyle };
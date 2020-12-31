import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';




const CalendarFooter = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Footer</Text>
    </View>
    )
}

export default CalendarFooter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  }
});
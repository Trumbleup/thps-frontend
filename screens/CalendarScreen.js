import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Modal, TouchableHighlight } from 'react-native';
import Calendar from '../components/calendar/Calendar';
import AnnouncementModal from '../components/calendar/modals/AnnouncementModal';



const CalendarScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <AnnouncementModal />
        <Calendar />
      </View>
    )
}

export default CalendarScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
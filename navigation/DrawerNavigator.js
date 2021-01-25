import React from "react";
import { CalendarStackNavigator } from "./CalendarStackNavigator";
import { MapStackNavigator } from "./MapStackNavigator";
import { FormStackNavigator } from "./FormStackNavigator";
import { ReportStackNavigator } from "./ReportStackNavigator";
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import { Modal, View, Text, TouchableHighlight, StyleSheet } from "react-native";

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => props.setSignedIn(false)} />
        </DrawerContentScrollView>
    );
};


const Drawer = createDrawerNavigator();


const DrawerNavigator = ({ setSignedIn, modalVisible, setModalVisible }) => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} setSignedIn={setSignedIn}/>}>
            <Drawer.Screen  name="Calendar" component={CalendarStackNavigator}/>
            <Drawer.Screen  name="Map" component={MapStackNavigator}/>
            <Drawer.Screen  name="Form" component={FormStackNavigator}/>
            <Drawer.Screen  name="Report" component={ReportStackNavigator}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;


const styles = StyleSheet.create({
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
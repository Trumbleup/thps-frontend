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

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => props.setSignedIn(false)} />
        </DrawerContentScrollView>
    );
};


const Drawer = createDrawerNavigator();


const DrawerNavigator = ({ setSignedIn }) => {
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
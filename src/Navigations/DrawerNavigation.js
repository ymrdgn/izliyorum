import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Details from "../Screens/Details";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";
import TabNavigation from "../Navigations/TabNavigation";
import Home from "../Screens/Home";

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Details" component={Details} options={{
                drawerLabel: () => null,
                title: "detail",
                drawerIcon: () => null
            }}/>
    </Drawer.Navigator>
  );
}
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Details from "../Screens/Details";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";
import TabNavigation from "../Navigations/TabNavigation";

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

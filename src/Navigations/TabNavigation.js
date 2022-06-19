import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Settings from "../Screens/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import Details from "../Screens/Details";
import Profile from "../Screens/Profile";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }
          if (route.name === "Add") {
            iconName = "add-circle";
          }
          if (route.name === "Settings") {
            iconName = "cog";
          }
          if (route.name === "Profile") {
            iconName = "person-circle";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => {
          return null;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Add"
        component={Home}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

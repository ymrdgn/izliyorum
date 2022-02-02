import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "./src/Navigations/DrawerNavigation";
import SignIn from "./src/Screens/SignIn";
import SignUp from "./src/Screens/SignUp";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from "./src/Screens/Home";
// import Details from "./src/Screens/Details";

const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Details" component={Details} />
//     </Tab.Navigator>
//   );
// }


export default function App() {
  const userToken = true;

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {!userToken ? (
            <>
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="SignIn" component={SignIn} />
            </>
          ) : (
            <Stack.Screen
              name={"Home"}
              options={{ headerShown: false }}
              component={DrawerNavigation}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer>
        <MyTabs />
      </NavigationContainer> */}
    </>

  );
}

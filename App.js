import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "./src/Navigations/DrawerNavigation";
import SignIn from "./src/Screens/SignIn";
import SignUp from "./src/Screens/SignUp";
import { View, Text } from "react-native";
import Homepage from "./src/Screens/HomePage";

const Stack = createNativeStackNavigator();

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
            <>
              <Stack.Screen
                name={"Home"}
                options={{ headerShown: false }}
                component={DrawerNavigation}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // <View style={{ backgroundColor: "#1e1e1e" }}>
    //   <Homepage />
    // </View>
  );
}




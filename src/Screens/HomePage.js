import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderTabs from "../Components/HeaderTabs";
import Home from "../Screens/Home";

export default function Homepage() {
    return (
        <SafeAreaView>
           <HeaderTabs/>
        </SafeAreaView>
    )
}
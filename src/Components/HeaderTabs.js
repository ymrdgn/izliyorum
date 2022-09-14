import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function HeaderTabs() {
    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton text="Hepsi" />
            <HeaderButton text="Takip Ettiklerin" />
        </View>
    )
}

const HeaderButton = (props) => (
    <>
        <View>
            <TouchableOpacity
                style={{ backgroundColor: "red", paddingVertical: 6, paddingHorizontal: 16, borderRadius: 30 }}>
                <Text>{props.text}</Text>
            </TouchableOpacity>
        </View>
    </>

)
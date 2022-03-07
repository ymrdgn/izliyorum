import React, { useState } from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MyReviews from "./MyReviews";
import MyWall from "./MyWall";
import MyQuotes from "./MyQuotes";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Duvarım");

  return (
    <ScrollView>
      <Image
        style={styles.coverImg}
        source={{ uri: "https://bit.ly/3hrT4d2" }}
      />
      <View
        style={{
          position: "absolute",
          zIndex: 5,
          top: 82,
          left: 25,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          style={{ width: 80, height: 80, borderRadius: 40 }}
          source={{
            uri: "https://avatars.githubusercontent.com/u/44919993?v=4",
          }}
        />
        <View style={{ marginLeft: 15, marginTop: 25 }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Ercan Ünal
          </Text>
          <Text style={{ color: "white" }}>unalercann@gmail.com</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Text style={{ paddingVertical: 6, paddingHorizontal: 6 }}>
          İzledim (100)
        </Text>
        <Text style={{ paddingVertical: 6, paddingHorizontal: 6 }}>
          İzleyeceğim (12)
        </Text>
        <Text style={{ paddingVertical: 6, paddingHorizontal: 6 }}>
          İzliyorum (4)
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingTop: 15,
          alignSelf: "center",
          backgroundColor: "white",
        }}
      >
        <SubTabBtn
          text="Duvarım"
          btnColor="black"
          textColor="white"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <SubTabBtn
          text="İncelemelerim"
          btnColor="white"
          textColor="black"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <SubTabBtn
          text="Alıntılarım"
          btnColor="white"
          textColor="black"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
      <View style={{ marginTop: 15, flexDirection: "row" }}>
        {activeTab === "Duvarım" && <MyWall />}
        {activeTab === "İncelemelerim" && <MyReviews />}
        {activeTab === "Alıntılarım" && <MyQuotes />}
      </View>
    </ScrollView>
  );
}

const SubTabBtn = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderTopRightRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "black",
        fontSize: 12,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  coverImg: {
    width: Dimensions.get("window").width - 20,
    height: 175,
    borderRadius: 15,
    marginHorizontal: 10,
  },
});

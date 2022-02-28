import React from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Profile() {
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  coverImg: {
    width: Dimensions.get("window").width - 20,
    height: 175,
    borderRadius: 15,
    marginHorizontal: 10,
  },
});

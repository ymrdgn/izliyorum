import React from "react";
import { View, Text } from "react-native";
import { Card, Button } from "react-native-elements";

export default function HomePostCardItem() {
  return (
    <View>
      <Card>
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 10,
          }}
        >
          <Card.Image
            style={{ width: 60, height: 60, borderRadius: 40 }}
            source={{
              uri: "https://avatars.githubusercontent.com/u/44919993?v=4",
            }}
          />
          <Card.Title>Ercan Ünal</Card.Title>
          <Text> inceleme yaptı</Text>
        </View>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design. The idea with React Native Elements is more about
          component structure than actual design.
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Card.Image
            style={{ width: 80, height: 100 }}
            source={{
              uri: "https://m.media-amazon.com/images/M/MV5BMGQ5MzljNzYtMDM1My00NmI0LThlYzQtMTg0ZmQ0MTk1YjkxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
            }}
          />
          <Text>Chungking Express</Text>
        </View>
        {/* <Button buttonStyle={{ backgroundColor: "red" }} title="VIEW NOW" /> */}
      </Card>
      <Card>
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 10,
          }}
        >
          <Card.Image
            style={{ width: 60, height: 60, borderRadius: 40 }}
            source={{
              uri: "https://avatars.githubusercontent.com/u/44919993?v=4",
            }}
          />
          <Card.Title>Ercan Ünal</Card.Title>
          <Text> inceleme yaptı</Text>
        </View>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design. The idea with React Native Elements is more about
          component structure than actual design.
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Card.Image
            style={{ width: 80, height: 100 }}
            source={{
              uri: "https://m.media-amazon.com/images/M/MV5BMGQ5MzljNzYtMDM1My00NmI0LThlYzQtMTg0ZmQ0MTk1YjkxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
            }}
          />
          <Text>Chungking Express</Text>
        </View>
        {/* <Button buttonStyle={{ backgroundColor: "red" }} title="VIEW NOW" /> */}
      </Card>
    </View>
  );
}

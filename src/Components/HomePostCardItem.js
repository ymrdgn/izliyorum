import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button, Image } from "react-native-elements";

export default function HomePostCardItem() {
  return (
    <View>
      <View
        style={{ color: "#ff0000", textAlign: "center" }}>
        <h4>What your friends have done recently?</h4>
      </View>
      <View style={styles.flow}>
        <View style={styles.card}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 40 }}
            source={{
              uri: "https://avatars.githubusercontent.com/u/44919993?v=4",
            }}
          />
          <Text style={{ color: "white", fontWeight: "bold" }}>Ercan Ünal</Text>
          <Text style={styles.text}> made a review</Text>
        </View>
        {/* <Card.Divider /> */}
        <Text style={styles.text}>
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
          <Text style={styles.text}>Chungking Express</Text>
        </View>
      </View>
      <View style={styles.flow}>
        <View style={styles.card}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 40 }}
            source={{
              uri: "https://avatars.githubusercontent.com/u/44919993?v=4",
            }}
          />
          <Text style={{ color: "white", fontWeight: "bold" }}>Ercan Ünal</Text>
          <Text style={styles.text}> is watching</Text>
        </View>
        {/* <Card.Divider /> */}
        <Text style={styles.text}>
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
          <Text style={styles.text}>Chungking Express</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flow: {
    backgroundColor: "#303337",
    borderColor: "#58595a",
    borderRadius: "3%",
    padding: "15px",
    margin: "15px",
  },
  card: {
    flexDirection: "row"
  },
  text: {
    color: "white"
  }
});

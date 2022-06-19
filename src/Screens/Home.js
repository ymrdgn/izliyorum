import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HomePostCardItem from "../Components/HomePostCardItem";
import { useOmdb } from "../hooks/useOmdb";
import { SearchBar } from "react-native-elements";
// import { Autocomplete } from "react-native-autocomplete-input";
import { Card } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "../Components/Header";

export default function Home({ navigation }) {
  const { getByName, getById } = useOmdb();
  const [id, setId] = useState("");
  const [search, setSearch] = useState();
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    console.log(id);
  }, []);

  const getMovie = () => {
    getByName(search).then((response) => {
      setId(response.Search[0].imdbID);
      setMovieList(response.Search);
    });
  };

  const textSearch = (search) => {
    setSearch(search);
  };

  return (
    <>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <SearchBar
              placeholder="Ara..."
              onChangeText={textSearch}
              value={search}
              onSubmitEditing={() => getMovie()}
              containerStyle={{
                padding: "0",
                marginHorizontal: "5px",
                border: "none",
                borderRadius: "30px",
                height: "30px",
              }}
              inputContainerStyle={{
                borderRadius: "30px",
                height: "30px",
              }}
              searchIcon={
                <TouchableOpacity onPress={() => getMovie()}>
                  <Ionicons name="ios-search-circle" size={30} color="red" />
                </TouchableOpacity>
              }
            />
          </View>
          {movieList && (
            <View>
              {movieList.map((item, i) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Details", { id: item.imdbID })
                  }
                >
                  <Card key={i}>
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
                          uri: item.Poster,
                        }}
                      />
                      <Text>{item.Title}</Text>
                      <Text>{item.Year}</Text>
                    </View>
                    {/* <Button buttonStyle={{ backgroundColor: "red" }} title="VIEW NOW" /> */}
                  </Card>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* <Text>{search}</Text> */}
          <HomePostCardItem />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
});

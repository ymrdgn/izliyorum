import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HomePostCardItem from "../Components/HomePostCardItem";
import { useOmdb } from "../hooks/useOmdb";
import { SearchBar } from "react-native-elements";
// import { Autocomplete } from "react-native-autocomplete-input";
import { Card } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "../Components/Header";
import { useIsFocused } from "@react-navigation/native";
export default function Home({ navigation }) {
  const { getByName, getById } = useOmdb();
  const [id, setId] = useState("");
  const [search, setSearch] = useState();
  const [movieList, setMovieList] = useState();
  const isFocused = useIsFocused();
  
  useEffect(() => {
    setMovieList([]);
    setSearch("");
  }, [isFocused]);

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
          <View style={styles.searchBar}>
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
                marginBottom: "5px"
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
          {movieList &&
            // <View>
            //   {movieList.map((item, i) => (
            //     <TouchableOpacity
            //       onPress={() =>
            //         navigation.navigate("Details", { id: item.imdbID })
            //       }
            //     >
            //       <Card key={i}>
            //         <View>
            //           <Card.Image
            //             source={{
            //               uri: item.Poster,
            //             }}
            //           />
            //           <Text>{item.Title}</Text>
            //           <Text>{item.Year}</Text>
            //         </View>
            //         {/* <Button buttonStyle={{ backgroundColor: "red" }} title="VIEW NOW" /> */}
            //       </Card>
            //     </TouchableOpacity>
            //   ))}
            // </View>

            movieList.map((item, i) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", { id: item.imdbID })
                }
                style={{
                  backgroundColor: "#2E2E2E",
                  borderRadius: "5px",
                  margin: "5px",
                  flex: 1,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  padding: "5px"
                }}
              >
                <View style={{ width: "100%", height: "50px", flex: "0.2" }}>
                  <Image
                    source={item.Poster}
                    style={{ height: "100%" }}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ flex: "0.8" }}>
                  <Text style={{ color: "white" }}>{item.Title}</Text>
                  <Text style={{ color: "#86939e" }}>{item.Year}</Text>
                </View>
              </TouchableOpacity>
            ))}

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
    backgroundColor: "#121212",
  },
  searchBar: {
    paddingTop: 20,
  }
});

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HomePostCardItem from "../Components/HomePostCardItem";
import { useOmdb } from "../hooks/useOmdb";
import { SearchBar } from "react-native-elements";
// import { Autocomplete } from "react-native-autocomplete-input";

export default function Home() {
  const { getByName, getById } = useOmdb();
  const [id, setId] = useState("");
  const [search, setSearch] = useState();
  const [movieList, setMovieList] = useState();
  const [selectedMovieInfos, setSelectedMovieInfos] = useState();

  useEffect(() => {}, []);

  const getMovie = () => {
    getByName(search).then((response) => {
      setId(response.Search[0].imdbID);
      setMovieList(response.Search);
    });
  };

  const textSearch = (search) => {
    setSearch(search);
  };

  const getSelectedMovie = (id) => {
    getById(id).then((response) => {
      setSelectedMovieInfos(response);
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchBar
            placeholder="Ara..."
            onChangeText={textSearch}
            value={search}
            onKeyPress={(keyPress) => console.log(keyPress)}
          />
          {/* <Autocomplete
            data={movieList}
            value={search}
            onChangeText={textSearch}
            flatListProps={{
              keyExtractor: (_, idx) => idx,
              renderItem: ({ item }) => <Text>{item}</Text>,
            }}
          /> */}
          <TouchableOpacity onPress={() => getMovie()}>
            <Text>Ara</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "white" }}>
          {movieList && (
            <>
              {movieList.map((item, i) => (
                <TouchableOpacity onPress={() => getSelectedMovie(item.imdbID)}>
                  <Text key={i}>{item.Title}</Text>
                </TouchableOpacity>
              ))}
            </>
          )}
        </View>
        <View style={{ backgroundColor: "red", color: "white" }}>
          {selectedMovieInfos && selectedMovieInfos.Title}
        </View>
        {/* <Text>{search}</Text> */}
        <HomePostCardItem />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
});

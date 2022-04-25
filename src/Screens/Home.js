import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HomePostCardItem from "../Components/HomePostCardItem";
import { useOmdb } from "../hooks/useOmdb";
import { SearchBar } from "react-native-elements";
// import { Autocomplete } from "react-native-autocomplete-input";
import { Card } from "react-native-elements";

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
            // onKeyPress={(keyPress) => console.log(keyPress)}
          />
          <TouchableOpacity onPress={() => getMovie()}>
            <Text>Ara</Text>
          </TouchableOpacity>
        </View>
        {movieList && (
          <View>
            {movieList.map((item, i) => (
              <TouchableOpacity onPress={() => getSelectedMovie(item.imdbID)}>
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

        <View style={{ backgroundColor: "red", color: "white" }}>
          {selectedMovieInfos && (
            <>
            {console.log(selectedMovieInfos)}
              <Text>{selectedMovieInfos.Title}</Text>
              <Text>{selectedMovieInfos.Year}</Text>
              <Text>{selectedMovieInfos.imdbRating}</Text>
              <Text>{selectedMovieInfos.Country}</Text>
              <Text>{selectedMovieInfos.Genre}</Text>
              <Text>{selectedMovieInfos.Director}</Text>
              <Text>{selectedMovieInfos.Actors}</Text>
            </>
          )}
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

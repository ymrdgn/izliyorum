import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HomePostCardItem from "../Components/HomePostCardItem";
import { useOmdb } from "../hooks/useOmdb";
import { SearchBar } from "react-native-elements";

export default function Home() {
  const { getByName, getById } = useOmdb();
  const [id, setId] = useState("");
  const [search, setSearch] = useState();

  useEffect(() => {
    getByName(search).then((response) => {
      setId(response.Search[0].imdbID);
    });
  }, []);

  const getMovie = () => {
    setSearch(search);
    if(search){
      getById(id).then((response) => console.log(response));
    }
  };

  const textSearch = (search) => {
    setSearch(search);
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
        </View>
        {/* <Text>{search}</Text> */}
        <TouchableOpacity onPress={() => getMovie()}>
          <Text>Ara</Text>
        </TouchableOpacity>
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

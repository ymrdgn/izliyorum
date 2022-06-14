import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useOmdb } from "../hooks/useOmdb";

export default function Details({ route }) {
  const [selectedMovieInfos, setSelectedMovieInfos] = useState();
  const { getById } = useOmdb();

  useEffect(() => {
    if (route.params.id) {
      getSelectedMovie(route.params.id);
    }
  }, []);

  const getSelectedMovie = (id) => {
    getById(id).then((response) => {
      setSelectedMovieInfos(response);
    });
  };

  return (
    <View>
      <Text>Details Screenbb</Text>
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
    </View>
  );
}

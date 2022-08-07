import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useOmdb } from "../hooks/useOmdb";
import { Card } from "react-native-elements";

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
      {selectedMovieInfos && (

          <Card>
            <View
              className="detail-poster-card"
              style={{flexDirection: "row" }}
            >
              <View style={{ width: "40%" }}>
                <Card.Image
                  style={{ width: 80, height: 100 }}
                  source={{
                    uri: selectedMovieInfos.Poster,
                  }}
                />
              </View>
              <View style={{ width: "60%" }}>
                <Text style={{fontSize:"14px"}}><b>{selectedMovieInfos.Title}</b></Text>
                <Text>{selectedMovieInfos.Year}</Text>
                <Text><b>IMDB:</b> {selectedMovieInfos.imdbRating}</Text>
                <Text><b>Ülke: </b>{selectedMovieInfos.Country}</Text>
                <Text><b>Tür:</b> {selectedMovieInfos.Genre}</Text>
                <Text><b>Yönetmen: </b>{selectedMovieInfos.Director}</Text>
                <Text><b>Oyuncular vsvfdvfdvf:</b> {selectedMovieInfos.Actors}</Text>
              </View>
            </View>
          </Card>
      )}
    </View>
  );
}

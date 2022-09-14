import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet} from "react-native";
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
    <View style={styles.container}>
      {selectedMovieInfos && (
          <Card style={{padding:"0 !important", margin:"0 !important"}}>
            <View
              className="detail-poster-card"
              style={{flexDirection: "row", backgroundColor:"#303337", color:"white"}}
            >
              <View style={{ width: "40%" }}>
                <Card.Image
                  style={{ width: 80, height: 100 }}
                  source={{
                    uri: selectedMovieInfos.Poster,
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ width: "60%" }}>
                <Text style={{fontSize:"14px", color:"white"}}><b>{selectedMovieInfos.Title}</b></Text>
                <Text style={{color:"white"}}>{selectedMovieInfos.Year}</Text>
                <Text style={{color:"white"}}><b>IMDB:</b> {selectedMovieInfos.imdbRating}</Text>
                <Text style={{color:"white"}}><b>Ülke: </b>{selectedMovieInfos.Country}</Text>
                <Text style={{color:"white"}}><b>Tür:</b> {selectedMovieInfos.Genre}</Text>
                <Text style={{color:"white"}}><b>Yönetmen: </b>{selectedMovieInfos.Director}</Text>
                <Text style={{color:"white"}}><b>Oyuncular:</b> {selectedMovieInfos.Actors}</Text>
              </View>
            </View>
          </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
  },
});
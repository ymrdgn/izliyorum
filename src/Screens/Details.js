import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useOmdb } from "../hooks/useOmdb";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Details({ route }) {
  const [selectedMovieInfos, setSelectedMovieInfos] = useState();
  const { getById } = useOmdb();
  const [filmCheck, setFilmCheck] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [favorite, setFavorite] = useState(false);

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
        <View
          style={styles.detailCard}
        >
          <View style={{ width: "30%" }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: selectedMovieInfos.Poster,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={{ width: "70%", paddingLeft: "4px" }}>
            <Text style={styles.movieText}><b>{selectedMovieInfos.Title}</b></Text>
            <Text style={styles.movieText}>{selectedMovieInfos.Year}</Text>
            <Text style={styles.movieText}><b>IMDB:</b> {selectedMovieInfos.imdbRating}</Text>
            <Text style={styles.movieText}><b>Ülke: </b>{selectedMovieInfos.Country}</Text>
            <Text style={styles.movieText}><b>Tür:</b> {selectedMovieInfos.Genre}</Text>
            <Text style={styles.movieText}><b>Yönetmen: </b>{selectedMovieInfos.Director}</Text>
            <Text style={styles.movieText}><b>Oyuncular:</b> {selectedMovieInfos.Actors}</Text>
          </View>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          padding:"15px"
        }}
      >
        {
          filmCheck ?
            <Ionicons onPress={() => setFilmCheck(!filmCheck)} name="checkmark-circle-outline" color="red" size={30} style={{ border: "1px solid gray", borderRadius: "5px", marginLeft:"5px" }} />
            :
            <Ionicons onPress={() => setFilmCheck(!filmCheck)} name="checkmark-circle-outline" color="#ff00005c" size={30} style={{ border: "1px solid gray", borderRadius: "5px", marginLeft:"5px" }} />
        }
        {
          like ?
            <Ionicons onPress={() => setLike(!like)} name="thumbs-up" color="red" size={30} style={{ border: "1px solid gray", borderRadius: "5px", padding:"3px", marginLeft:"5px"  }} />
            :
            <Ionicons onPress={() => setLike(!like)} name="thumbs-up" color="#ff00005c" size={30} style={{ border: "1px solid gray", borderRadius: "5px", padding:"3px", marginLeft:"5px"  }} />
        }
        {
          dislike ?
            <Ionicons onPress={() => setDislike(!dislike)} name="thumbs-down" color="red" size={30} style={{ border: "1px solid gray", borderRadius: "5px", padding:"3px", marginLeft:"5px"  }} />
            :
            <Ionicons onPress={() => setDislike(!dislike)} name="thumbs-down" color="#ff00005c" size={30} style={{ border: "1px solid gray", borderRadius: "5px", padding:"3px", marginLeft:"5px"  }} />

        }
        {
          favorite ?
            <Ionicons onPress={() => setFavorite(!favorite)} name="heart" color="red" size={30} style={{ border: "1px solid gray", borderRadius: "5px", padding:"3px", marginLeft:"5px"  }} />
            :
            <Ionicons onPress={() => setFavorite(!favorite)} name="heart" color="#ff00005c" size={30} style={{ border: "1px solid gray", borderRadius: "5px", padding:"3px", marginLeft:"5px"  }} />

        }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    flex: 1,
  },
  detailCard: {
    flexDirection: "row",
    backgroundColor: "#303337",
    color: "white",
    borderColor: "#58595a",
    borderRadius: "3%",
    padding: "15px",
    margin: "15px",
  },
  movieText: {
    color: "white"
  },

});
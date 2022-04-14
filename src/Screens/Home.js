import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HomePostCardItem from "../Components/HomePostCardItem";
import { useOmdb } from "../hooks/useOmdb";

export default function Home() {
  const {getByName, getById} = useOmdb();
  const [id, setId] = useState("");

  

  useEffect(() => {
    getByName("volver").then(response=>
      {console.log("response",response);
      setId(response.Search[0].imdbID)
    });
  }, []);

  const getMovie =()=>{
    getById(id).then(response => console.log(response))
  }
  

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Home Screen hbhbbhb</Text>
        <TouchableOpacity onPress={()=>getMovie()}>
         <Text>VOLVER</Text> 
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

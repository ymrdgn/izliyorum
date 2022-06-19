import React from "react";
import { Text, View, Icon } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = {
  textStyling: {
    fontSize: 18,
    color: "#86939e",
    flex:1
  },
  viewStyle: {
    backgroundColor: "#1e1e1e",
    flexDirection: "row",
    flex: 1,
    padding: "10px"
  },
  headerIcon: {
    textAlign: "right",
  },
  iconStyling: {
    flex:2,
    paddingHorizontal: "6px"
  },
  iconMailStyling: {
    flex:3,
    paddingHorizontal: "6px"
  }
};
const Header = () => {
  const { textStyling, viewStyle, headerIcon, iconStyling, iconMailStyling } = styles;
  return (
    <View style={viewStyle}>
        <Text style={textStyling}>izli'yorum..</Text>
        <TouchableOpacity style={iconStyling}>
          <Ionicons name="notifications" color="red" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={iconMailStyling}>
          <Ionicons name="mail" color="red" size={20} />
        </TouchableOpacity>
    </View>
  );
};

export default Header;

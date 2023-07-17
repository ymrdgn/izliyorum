import React from "react";
import { Text, View, Icon } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  const { textStyling, viewStyle, headerIcon, iconStyling, iconMailStyling, headerWrapper } = styles;
  return (
    <View style={viewStyle}>
      <SafeAreaView>
        <View style={headerWrapper}>
          <Feather name='menu' size={20} color="#979797" />
          <Text style={textStyling}>izli'yorum...</Text>
          <TouchableOpacity style={iconStyling}>
            <Ionicons name="notifications" color="#979797" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={iconMailStyling}>
            <Ionicons name="mail" color="#979797" size={20} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = {
  textStyling: {
    fontSize: 18,
    color: "#979797",
    flex: 1,
    textAlign: 'center',
  },
  viewStyle: {
    backgroundColor: "#2E2E2E",
    flex: 1,
    padding: "10px"
  },
  headerWrapper: {
    flexDirection: 'row',
    paddingTop: 20
  },
  iconStyling: {
    paddingHorizontal: 5
  }
};
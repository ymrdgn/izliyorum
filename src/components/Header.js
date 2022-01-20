import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    textStyling: {
        fontSize: 22,
    },
    viewStyle:{
        backgroundColor: 'gainsboro',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:25
    }
}
const Header = () => {
    const { textStyling, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyling}>izli'yorum</Text>
        </View>
    );
}

export default Header;
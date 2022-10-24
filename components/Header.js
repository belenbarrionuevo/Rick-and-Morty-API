import React from "react";
import {View, StyleSheet, Dimensions,Image} from 'react-native';
const Header = () => {

    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={require('../assets/title.webp')}/>
        </View>

    );
    
};
//"react-native-web": "~0.18.7"
const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 20;
const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 120,
        backgroundColor: '#2F4F4F',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: 20,
        paddingBottom: 10,


    },
    imageStyle: {
        height: 100,
        width: deviceWidth -60,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',

    },
    labelStyle: {
        fontSize: 24,
        fontWeight: '700',

    },

});

export default Header;
import React from "react";
import {View, Text, StyleSheet, Dimensions, Image,TouchableOpacity} from 'react-native';


const CharacterCard = ({toggleModal,char}) => {
    return (
        <View style={styles.cardContainer}>
            
            <Image style={styles.imageStyle} source={{uri:char.image}}/>
            
            
            <View style={styles.infoStyle}>
                <View style={{zIndex:1}}>
                    <TouchableOpacity style={styles.touch} onPress={()=>{toggleModal()}} >
                        <Image style={styles.icon}
                        source={{uri:'https://cdn-icons-png.flaticon.com/512/59/59836.png'}}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleStyle}>Name: {char.name}</Text>
                <Text>Status: {char.status+'\n'}
                Species: {char.species+'\n'}
                Type: {char.type+'\n'}
                Gender: {char.gender+'\n'}</Text>
                
            </View>
            
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

const styles = StyleSheet.create({
    cardContainer: {
    width: deviceWidth - 40, 
    backgroundColor: '#2F4F4F',
    height: 490,
    borderRadius: radius,
    shadowColor: '#000',
    shadowOffset: {
        width: 5,
        height: 5,

    },
    shadowOpacity: 0.75,
    elevation: 9,
    shadowRadius: 5,
    marginTop:350,
    marginLeft:20

    },
    imageStyle: {
        height: 350,
        width: deviceWidth -40,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',

    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
        flexShrink:1

    },
    categoryStyle: {
        fontWeight: '200',


    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    icon: {
        height:30,
        width:30,
        right:10,
        top:50,
        position:"absolute"
    }


});

export default CharacterCard;
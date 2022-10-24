import React, { useEffect, useState } from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity,ActivityIndicator,SafeAreaView,Image,Text} from "react-native";





const Lista =({setCharacter,apiUrl,pageCurrent,setPageCurrent,toggleModal,nameFilter,statusFilter,genderFilter,typeFilter,speciesFilter}) =>{

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getCharacters();
      }, [pageCurrent,nameFilter,statusFilter,genderFilter,typeFilter,speciesFilter]);

    const getCharacters = async () => {
        try {
         const response = await fetch(apiUrl);
         const json = await response.json();
         setData(json.results);
       } catch (error) {
         console.error(error);
       } finally {  
         setLoading(false);
       }
     } 

    const lista = ({item}) =>{
        return(
        <TouchableOpacity style={styles.boxes} onPress={()=>{setCharacter(item);toggleModal()}}>
            
            <Image
            style={styles.pfp}
            source={{uri:item.image}}
            />
            <Text style={styles.txt} >{item.name}</Text>
        
        </TouchableOpacity>
        
            )
    }

    return(
        
        <SafeAreaView>
            <View>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList style={{marginTop:20,width:400}}
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={lista}
                onEndReached={()=>setPageCurrent(pageCurrent+1)}
                />)}
                
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    pfp: {
        width:100,
        height: 100,
        borderRadius: 100,
        borderColor:"#B2DF28",
        borderWidth: 5,
    },
    boxes: {
        borderWidth: 5,
        borderColor: "#B2DF28",
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:30,
    },
    txt:{
        color:"#00B5CC",
        padding:5,
        fontSize:20,
        flexShrink:1
    }
});

export default Lista;
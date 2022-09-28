import React, { useEffect, useState } from 'react';
import { ActivityIndicator, TextInput , FlatList, Text, View, Image, StyleSheet, TouchableOpacity, Modal, Button, SafeAreaView, ScrollView  } from 'react-native';



export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState();
  const [modalName, setModalName] = useState();
  const [modalStatus, setModalStatus] = useState();
  const [modalSpecies, setModalSpecies] = useState();
  const [modalType, setModalType] = useState();
  const [modalGender, setModalGender] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [status, updateStatus] = useState('');
  const [gender, updateGender] = useState('');
  const [species, updateSpecies] = useState('');
  const [type, updateType] = useState('');
  const [search, setSearch] = useState("");

  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}&type=${type}`;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getCharacters = async () => {
     try {
      const response = await fetch(api);
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {  
      setLoading(false);
    }
  } 

  useEffect(() => {
    getCharacters();
    
  }, [page,search,type,gender,status,species]);

  const setupModal=(item)=>{
    setModalImage(item.image);
    setModalName(item.name);
    setModalStatus(item.status);
    setModalSpecies(item.species);
    setModalType(item.type);
    setModalGender(item.gender);
  }

  function limpiarFiltros(){
    updateGender('');
    updateStatus('');
  }


  lista = ({item}) =>{
    return(
    <TouchableOpacity style={styles.boxes}
      onPress={()=>{setModalVisible(!isModalVisible);setupModal(item);}}>
      
      <Image
        style={styles.pfp}
        source={{uri:item.image}}
      />
      <Text style={styles.txt}>{item.name}</Text>
    
    </TouchableOpacity>
    
        )
  }


  return (
    
    <SafeAreaView style={styles.container}>
      
      <Modal transparent={true} visible={isModalVisible}>
        <View style={styles.popup}>
        <Image
        style={styles.modalPic}
        source={{uri:modalImage}}
      />
          <Text style={{marginLeft:10}}>Name: {modalName+'\n'}
          Status: {modalStatus+'\n'}
          Species: {modalSpecies+'\n'}
          Type: {modalType+'\n'}
          Gender: {modalGender+'\n'}</Text>
          <TouchableOpacity style={styles.touch} onPress={toggleModal}>
            <Image style={styles.icon}
            source={{uri:'https://cdn-icons-png.flaticon.com/512/59/59836.png'}}/>
          </TouchableOpacity>
        </View>
      </Modal>
      
      <View >
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={(value)=>{setSearch(value);setPage(1);}}
        placeholder="Buscar por Nombre"
        placeholderTextColor={'white'}
      />
      <TextInput
        style={styles.input}
        value={species}
        onChangeText={(value)=>{updateSpecies(value);setPage(1);}}
        placeholder="Buscar por Especie"
        placeholderTextColor={'white'}
      />
      <TextInput
        style={styles.input}
        value={type}
        onChangeText={(value)=>{updateType(value);setPage(1);}}
        placeholder="Buscar por Tipo"
        placeholderTextColor={'white'}
      />
      
      <Text style={{color: 'white'}}>Buscar por sexo:</Text>
      <View style={{flexDirection: 'row'}}>
      <Button
        title="Hombre"
        color="#07f78e"
        onPress={()=>{updateGender("Male");setPage(1)}}
      />
      <Button
        title="Mujer"
        color="#07f78e"
        onPress={()=>{updateGender("Female");setPage(1)}}
      />
      </View>
      <Text style={{color: 'white'}}>Buscar por estado:</Text>
      <View style={{flexDirection: 'row'}}>
      <Button
        title="Vivo"
        color="#07f78e"
        onPress={()=>{updateStatus("Alive");setPage(1)}}
      />
      
      <Button
        title="Muerto"
        color="#07f78e"
        onPress={()=>{updateStatus("Dead");setPage(1)}}
      />
      </View>
      <Text>{'\n'}</Text>
      <Button
        title="Limpiar Filtros"
        color="#07f78e"
        onPress={()=>{limpiarFiltros();setPage(1)}}
      />
      

        {isLoading ? <ActivityIndicator/> : (
          <FlatList style={{marginTop:100}}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={this.lista}
            onEndReached={()=>setPage(page+1)}
          />
          
          
          
        )}
      </View>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor:'#1e1e1e',
  },
  input: {
    marginTop: 60,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'white',
  },
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
  },
  popup: {
    margin: 60,
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection: 'row',
    backgroundColor: '#069c5a',
    height:200,
    width: 300,
    borderRadius:50,
  },
  icon: {
    height:20,
    width:20,
    margin:20,
  },
  touch:{
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
  modalPic: {
    width:100,
    height: 100,
    borderRadius: 20,
    marginLeft: 10,
    borderColor:"#00B5CC",
    borderWidth: 5,
  }
});
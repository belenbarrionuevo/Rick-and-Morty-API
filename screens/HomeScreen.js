import React, {useState} from 'react';
import {StyleSheet, View, StatusBar,Button} from 'react-native';
import Header from '../components/Header'
import Lista from '../components/Lista'
import ModalPopup from '../components/ModalPopup'
import Filters from '../components/Filters';


const HomeScreen = () => {

    const [char,setCharacter]= useState("");
    const [pageCurrent, setPageCurrent] = useState(1);
    const [nameFilter, setNameFilter]= useState('');
    const [statusFilter, setStatusFilter] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [speciesFilter, setSpeciesFilter] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const [showFilter, setShowFilter] = useState(false);


    const apiUrl = 'https://rickandmortyapi.com/api/character/?page=' + pageCurrent + '&name=' + nameFilter+'&status=' + statusFilter + '&gender=' + genderFilter + '&type=' + typeFilter + '&species=' + speciesFilter;
    
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

   
    return (
        
        <View style={styles.container}>
            
            <Header/>
            <Button
            title="Filtros"
            color="#07f78e"
            onPress={()=>{setShowFilter(!showFilter)}}
            />
            {showFilter &&(
                <Filters nameFilter={nameFilter} setNameFilter={setNameFilter} statusFilter={statusFilter} setStatusFilter={setStatusFilter} genderFilter={genderFilter} setGenderFilter={setGenderFilter} typeFilter={typeFilter} setTypeFilter={setTypeFilter} speciesFilter={speciesFilter} setSpeciesFilter={setSpeciesFilter} setPageCurrent={setPageCurrent}/>
            )}
            <StatusBar style='auto' />
            <Lista toggleModal={toggleModal} setCharacter={setCharacter} apiUrl={apiUrl} pageCurrent={pageCurrent} setPageCurrent={setPageCurrent} nameFilter={nameFilter} statusFilter={statusFilter} genderFilter={genderFilter} typeFilter={typeFilter} speciesFilter={speciesFilter}/>
            <ModalPopup isModalVisible={isModalVisible} char={char} toggleModal={toggleModal} />
        </View>

        
    );
    

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',
        alignItems: 'center',

    },
});

export default HomeScreen;

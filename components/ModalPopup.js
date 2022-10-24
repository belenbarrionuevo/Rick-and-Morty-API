
import React from "react";
import { Modal } from "react-native";
import CharacterCard from '../components/CharacterCard';

const ModalPopup = ({isModalVisible,char,toggleModal}) =>{

    return(
        <Modal transparent={true} visible={isModalVisible} onPress={toggleModal}>
            <CharacterCard toggleModal={toggleModal} char={char}/>
        </Modal>
    )
}

export default ModalPopup;
import { View,Text,Button,TextInput,StyleSheet } from "react-native";

const Filters=(props)=>{

    const limpiarFiltros=()=>{
        props.setNameFilter('');
        props.setSpeciesFilter('');
        props.setTypeFilter('');
        props.setGenderFilter("");
        props.setStatusFilter("");
        props.setPageCurrent(1);
    }

    return(
        <View>
            <TextInput
            style={styles.input}
            value={props.nameFilter}
            onChangeText={(value)=>{props.setNameFilter(value);props.setPageCurrent(1);}}
            placeholder="Buscar por Nombre"
            placeholderTextColor={'#2F4F4F'}
            />
            <TextInput
            style={styles.input}
            value={props.speciesFilter}
            onChangeText={(value)=>{props.setSpeciesFilter(value);props.setPageCurrent(1);}}
            placeholder="Buscar por Especie"
            placeholderTextColor={'#2F4F4F'}
            />
            <TextInput
            style={styles.input}
            value={props.typeFilter}
            onChangeText={(value)=>{props.setTypeFilter(value);props.setPageCurrent(1);}}
            placeholder="Buscar por Tipo"
            placeholderTextColor={'#2F4F4F'}
            />
            
            <Text style={{color: 'white'}}>Buscar por sexo:</Text>
            <View style={{flexDirection: 'row'}}>
            <Button
            title="Hombre"
            color="#07f78e"
            onPress={()=>{props.setGenderFilter("Male");props.setPageCurrent(1)}}
            />
            <Button
            title="Mujer"
            color="#07f78e"
            onPress={()=>{props.setGenderFilter("Female");props.setPageCurrent(1)}}
            />
            </View>
            <Text style={{color: 'white'}}>Buscar por estado:</Text>
            <View style={{flexDirection: 'row'}}>
            <Button
            title="Vivo"
            color="#07f78e"
            onPress={()=>{props.setStatusFilter("Alive");props.setPageCurrent(1)}}
            />
            
            <Button
            title="Muerto"
            color="#07f78e"
            onPress={()=>{props.setStatusFilter("Dead");props.setPageCurrent(1)}}
            />
            </View>
            <Text>{'\n'}</Text>
            <Button
            title="Limpiar Filtros"
            color="#07f78e"
            onPress={()=>{limpiarFiltros();props.setPageCurrent(1)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      marginTop: 60,
      height: 40,
      width:300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: '#2F4F4F'
    }
});

export default Filters;
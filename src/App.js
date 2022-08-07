
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { CustomModal, CustomInput, AddItem } from './components';


export default function App() {

  const [item, setItem] = useState('')
  const [list, setList] = useState([])
  const [itemSelected, setItemSelected] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const onChangeText = (item) => {
    setItem(item)
  }

  const addItem = () => {
    if (item.length > 0) {
      setList([...list,
      {
        id: Math.random().toString(),
        value: item
      }])

      setItem('')
    }

  }

  const deleteItem = (id) => {
    setList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const onHandleModal = (id) =>{
    setItemSelected(list.find(item => item.id == id))
    setModalVisible(!modalVisible)
  }


  const renderItem = ({ item }) => (
    <AddItem
    onHandleModal={onHandleModal}
    item={item}
    />
  )



  return (

    <View style={styles.container}>
      <CustomInput
          item={item}
          onChangeText={onChangeText}
          placeholder='Ingrese su nombre'
          onPressButton={addItem}
          buttonTitle='Agregar'
      />
      <View style={styles.flatListContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id} />
      </View>
      <CustomModal animationType='slide' modalVisible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalTitle}>Detalle de la lista</Text>
          </View>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalMessage}> ¿Estás seguro que deseas eliminar?</Text>
          </View>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalItem}>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <Button title='Eliminar' onPress={() => deleteItem(itemSelected.id)} color='#7D8CC4' />
            <Button title='Cancelar' onPress={() => setModalVisible(!modalVisible)} color='#cccccc' />
          </View>
        </View>
     </CustomModal>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f8e6'
    // alignItems: 'center',
    // justifyContent: 'top',
    //marginTop: 50,
    // flexDirection: 'row'
  },
  text: {
    color: 'red'
  },
  modalContentContainer:{
    marginTop:50
  }


  
});
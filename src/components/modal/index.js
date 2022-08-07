import React from "react"
import { Modal } from "react-native"


const CustomModal = ({modalVisible, animationType, children, onRequestClose }) => {

    return (
        <Modal 
            animationType={animationType} 
            visible={modalVisible}
            onRequestClose={onRequestClose}>
            {/* <View style={styles.modalTitleContainer}>
                <Text style={styles.modalTitle}>Detalle de la lista </Text>
            </View>
            <View style={styles.modalMessageContainer}>
                <Text style={styles.modalMessage}>Confirma eliminación? </Text>
            </View>
            <View style={styles.modalMessageContainer}>
                <Text style={styles.modalItem}>{itemSelected.value}</Text>
            </View>
            <View style={styles.modalMessageContainer}>
                <Button title='Eliminar' onPress={() => deleteItem(itemSelected.id)} />
                <Button title='Cancelar' onPress={() => setModalVisible(!modalVisible)} />
            </View> */}
            {children}
        </Modal>
    )
}

export default CustomModal

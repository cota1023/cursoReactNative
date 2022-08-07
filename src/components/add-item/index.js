import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from './styles'

const AddItem = ({onHandleModal, item}) => {
    return (
        <View style={styles.listContainer}>
            <Text style={styles.listItem}> {item.value}</Text>
            <TouchableOpacity onPress={() => onHandleModal(item.id)}>
                <Text style={styles.deleteButton}>x</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddItem


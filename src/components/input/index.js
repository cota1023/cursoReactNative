import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";

const CustomInput = ({item, onChangeText, placeholder, onPressButton, buttonTitle}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                placeholderTextColor='black'
                placeholder={placeholder}
                value={item}
                onChangeText={onChangeText} />
            <Button title={buttonTitle} color='red'
                onPress={onPressButton} />
        </View>
    )
}

export default CustomInput
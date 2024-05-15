import { View, TextInput, Text , Platform, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    cName : string;
    buttonClick : () => void;
}

export default function InputButton( { cName, buttonClick } : Props ){

    return(
        <View style={styles.viewTextButton}>
                <TextInput style={styles.textInput}
                    placeholder={cName}
                    placeholderTextColor='#676666'
                    keyboardType={Platform.select({
                        ios: 'numbers-and-punctuation',
                        android: 'visible-password'
                    })}
                />
                <TouchableOpacity style={styles.button} onPress={buttonClick}>
                    <Text style={styles.texto}>Texto</Text>
                </TouchableOpacity>
            </View>
    )
};
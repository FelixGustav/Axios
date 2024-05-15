import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    texto: {
      fontSize: 20,
      color: '#fff'
    },

    textInput: {
      backgroundColor: '#1f1e25',
      height: 50,
      fontSize: 18,
      color: '#fff',
      padding: 15,
      borderRadius: 5,
      flex: 1,
      marginRight: 10
    },

    button:{
      backgroundColor: '#00008b',
      width: 80,
      height: 50,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center'
    },

    viewTextButton: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 30
    }
});
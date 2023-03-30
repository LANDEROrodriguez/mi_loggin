import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";


const detall = ({ navigation }) => {
    const handhome = () => {
  
      navigation.navigate('Menu');
    }
  return (




      <View style={styles.container}>
  
      <Text style={styles.bigBlack}>TIPOS:</Text>
      <br></br>
      <Text style={styles.bigBlack}>●Queso</Text>
      <Text style={styles.bigBlack}>●Pollo</Text>
      <Text style={styles.bigBlack}>●Carne molida</Text>
      

      
    <TouchableOpacity style={styles.loginButton} onPress={handhome}>
        <Text style={styles.loginButtonText}>Regresar</Text>
      </TouchableOpacity> 

    </View>

  );
  
};

const styles = StyleSheet.create({

  container: {
      marginTop: 40,
      alignItems:'center',

    },
 
    bigGray: {
      color: 'Gray',
      fontWeight: 'bold',
      fontSize: 30,
    },
    bigBlack: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
        loginButton: {
          backgroundColor: '#c71585',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        },
        loginButtonText: {
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
        },
      });
  


export default detall;

import React from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity} from "react-native";




  const loggin = ({ navigation }) => {
    const handhome = () => {
  
      navigation.navigate('Menu');
    }
  return (


      
      <View style={styles.container}>
      <Text style={styles.bigBlack}>BIENVENIDO</Text>

      
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mclb0NdAfReSwkqWDtxIh2Oc4vEyPMYzeg&usqp=CAU',
          }}
          style={{width: 160, height: 160}}
        />
       
    
    <br></br>
    <View>
    <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
        }}
        placeholder="Usuario"
      />
    
    <br></br>
    
<TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
        }}
        placeholder="Contraseña"


      />
 
    </View>
    <TouchableOpacity style={styles.loginButton} onPress={handhome}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </TouchableOpacity> 
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      alignItems:'center',
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    bigBlack: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
    },
    bigGray: {
      color: 'gray',
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
          backgroundColor: '#F7BFBE',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        },
        loginButtonText: {
          color: '#000000',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
        },
      });
  


export default loggin;

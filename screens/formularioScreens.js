import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert } from "react-native";
import app from "../firebase";

import {getFirestore, collection, addDoc, getDocs,doc,deleteDoc, getDoc, setDoc} from 'firebase/firestore'
const db= getFirestore(app)
export default function formularioScreens(props){
  
    const initialState ={
      nombre: '',
      telefono: '',
      correo: '',
}

  const [state, setState] = useState (initialState)

   const handleChangeText =(value, name)=>{
    setState({...state, [name]:value})
   }

   const saveUsers =async()=>{
    try{
      await addDoc(collection(db,'users'),{
        ...state
      })
      Alert.alert('alerta','guardado con exito')
      props.navigation.navigate('Loggin')
    }
    catch{
      console.error(error)
    }
    //console.log(state)
   }
   
   return(
    <ScrollView style={StyleSheet.container}>
     <Text style={StyleSheet.titulo}>Registro</Text>

     <View style={StyleSheet.inputgroup}>
      <TextInput placeholder='nombre' onChangeText={(value)=>handleChangeText(value, 'nombre')}
      value={state.nombre} />
     </View>

     <View style={StyleSheet.inputgroup}>
     <TextInput placeholder='telefono' onChangeText={(value)=>handleChangeText(value, 'telefono')}
      value={state.telefono} />
     </View>

     <View style={StyleSheet.inputgroup}>
     <TextInput placeholder='correo' onChangeText={(value)=>handleChangeText(value, 'correo')}
      value={state.correo} />
     </View>

     <View>
      <Button title= 'GUARDAR USUARIO' onPress={saveUsers} />
     </View>
    </ScrollView>
   );
}

const styles =StyleSheet.create({
  titulo:{
    textAlign:'center',
    fontSize:18,
    marginTop:12, 
    marginBottom:20
    },

  container:{
    flex:1,
    padding:35 
  },
  inputgroup:{
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
});

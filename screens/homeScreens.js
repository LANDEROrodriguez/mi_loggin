import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";



const home = ({ navigation }) => {
  const handleLogin = () => navigation.navigate('Loggin');
  const handDetallPress = () => navigation.navigate('Descripcion');
  
        return (
          <ScrollView>
                          <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>REGRESAR</Text>
      </TouchableOpacity>
                  <View style={styles.container}>  
            <Text style={styles.bigdarkred}>ANTOJITOS</Text> 


            </View>
            <View style={styles.container}>
           
            <View>
            <TouchableOpacity onPress={handDetallPress} > 
            <Image style={styles.tinyLogo} source={{uri:"https://www.mexicoenmicocina.com/wp-content/uploads/2018/03/Empanadas-de-masa-de-maiz-fritas.jpg"}} />  
            <Text  style={styles.black}>EMPANADAS $15</Text>   </TouchableOpacity>
              <Image style={styles.tinyLogo} source={{uri:"https://gourmetdemexico.com.mx/wp-content/uploads/2017/09/coahuilenses.jpg"}} />
              <Text style={styles.black}>ENCHILADAS $15</Text>
              <Image style={styles.tinyLogo} source={{uri:"https://www.poresto.net/u/fotografias/m/2021/1/6/f768x400-42517_86420_5050.jpg"}}/>
              <Text style={styles.black}>PANUCHOS $20</Text>
        
              <Image style={styles.tinyLogo} source={{uri:"https://www.cronicacampeche.com/wp-content/uploads/2018/09/3b-060918.jpg"}} />
              <Text style={styles.black}>SOPES $30</Text>
            </View>
            </View>
            </ScrollView>
          )
        
}
        const styles = StyleSheet.create({
          container: {
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            paddingTop: 50,
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
          bigdarkred : {
            color: '#8b0000',
            fontWeight: 'bold',
            fontSize: 30,
          },
          bigGray: {
            color: 'gray',
            fontWeight: 'bold',
            fontSize: 30,

          },
          black: {
            color: 'black',
          
          },
          gray: {
            color: 'gray',
          
          },
          tinyLogo: {
            width: 200,
            height: 150,
            marginTop: 16,
            paddingVertical: 8,
            borderWidth: 2,
            marginLeft: 8,
            borderColor: '#ff00ff',
          },

            button: {
              backgroundColor: '#c71585',
              alignItems: 'left',
              padding: 4,
              margin: 4,
              borderRadius: 2,
              width: 100,
            },
            buttonText: {
              color: '#FFFFFF',
              fontSize: 12,
              fontWeight: 'bold',
              textAlign: 'left',
            }, 
          },
        );

export default home;
      

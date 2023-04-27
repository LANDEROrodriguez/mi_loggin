import React from 'react';
import Animated from 'react-native-reanimated';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import loggin from './screens/logginScreens';
import home from './screens/homeScreens';
import detall from './screens/detalleScreens';
import datos from './screens/formularioScreens';


const Stack = createNativeStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="datos" component={datos} />
        <Stack.Screen name="Loggin" component={loggin} />
        <Stack.Screen name="Menu" component={home} />
        <Stack.Screen name="Descripcion" component={detall} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;
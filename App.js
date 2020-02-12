import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './src/views/Dashboard';
import Catalog from './src/views/Catalog';
import History from './src/views/History';
import Success from './src/views/Success';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true, headerTitleAlign: 'center', headerStyle: { backgroundColor: '#343D50' } }}>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Programa de Lealtad', headerTintColor: 'white' }} />
        <Stack.Screen name="Catalog" component={Catalog} options={{ title: 'Productos Disponibles', headerTintColor: 'white' }} />
        <Stack.Screen name="History" component={History} options={{ title: 'Historial', headerTintColor: 'white' }} />
        <Stack.Screen name="Success" component={Success} options={{ headerShown: false, title: 'Felicidades', headerTintColor: 'white' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
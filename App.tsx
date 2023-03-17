
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MenuLateral from './src/navigation/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

//Se envuelve el hijo en el appState que es el componente que contiene los providers
const App = () => {
  return (
    <NavigationContainer>
      <AppState> 
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  )
}

//Aca se envuelven todos los hijos en el provider
const AppState = ({children}:any) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App

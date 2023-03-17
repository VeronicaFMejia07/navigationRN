import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/AppStyles';
import { AuthContext } from '../context/AuthContext';

const AlbumsScreen = () => {
  const {authState, logout} = useContext(AuthContext)
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.menuTexto}>Acá estan tus álbumes</Text>
      {
        authState.isLogged === true ? <Button title='Logout' onPress={logout}  /> : <></>
      }
    </View>
  )
}

export default AlbumsScreen

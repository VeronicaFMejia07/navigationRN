import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../styles/AppStyles';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  //hook que identifica que tan separado va ir el contenido del noutchpad, bottom, top, left, right
  const insets = useSafeAreaInsets();

  //Para consumir el context, dentro de los parentesis se coloca el nombre del context creado que se va a utilizar
  const { authState } = useContext(AuthContext)

  return (
    <View style={{ ...styles.globalMargin, marginTop: insets.top + 20 }}>
      <Text style={styles.title}>CONFIGURACIONES</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {
        authState.favoriteIcon ?
          <Icon
            name={authState.favoriteIcon}
            size={65}
            color="purple"
          /> : <></>
      }
    </View>
  )
}

export default SettingsScreen

import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AppStyles';
import Icon from 'react-native-vector-icons/Ionicons';

//Se extiende por si se reciben más información a aparte de la del Stack 
//StackScreenProps Recibe un objeto y las propiedades del objeto
interface IProps extends StackScreenProps<any, any> { };

const Page1Screen = ({ navigation }: IProps) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PAGE 1</Text>

      {/*El navigation recibe el metodo a ejecutar, el navigate recibe el nombre de la página a navegar */}
      <Button title='IR A PAGINA 2' onPress={() => navigation.navigate('Page2Screen')} />

      <Text>Navegar con argumentos</Text>

      <View style={styles.containerButton}>
        {/*El navigate recibe la página a redirigir y si se le van a enviar parametros a esa página a mostrar*/}

        <TouchableOpacity style={{ ...styles.btn, backgroundColor: 'aqua' }} onPress={() => navigation.navigate('PersonScreen', {
          id: 1,
          name: 'Pedro'
        })}>
          <Icon name="man-outline" size={40} color="black" />
          <Text style={styles.text}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PersonScreen', {
          id: 2,
          name: 'Maria'
        })}>
          <Icon name="woman-outline" size={40} color="black" />
          <Text style={styles.text}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Page1Screen

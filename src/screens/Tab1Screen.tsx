import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../styles/AppStyles';
import TouchableIcon from '../components/TouchableIcon';


const Tab1Screen = () => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ICONOS</Text>
      <View style={{...styles.globalMargin,flexDirection: 'row', justifyContent: 'center', gap: 15}}>
        <TouchableIcon iconName='airplane-outline' />
        <TouchableIcon iconName='calculator-outline' />
        <TouchableIcon iconName='images-outline' />
        <TouchableIcon iconName='chatbubble-ellipses-outline' />
      </View>
    </View>
  )
}

export default Tab1Screen

import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface IProps {
  iconName: string
}

const TouchableIcon = ({ iconName }: IProps) => {
  const { favoriteIcon } = useContext(AuthContext); //se llama la función que se necesita del context

  return (
    <TouchableOpacity onPress={() => favoriteIcon(iconName)}>
      <Icon
        name={iconName}
        size={65}
        color="purple"
      />
    </TouchableOpacity>
  )
}

export default TouchableIcon

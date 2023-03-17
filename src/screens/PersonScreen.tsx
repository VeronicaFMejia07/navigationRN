import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../styles/AppStyles';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { RootStackParams } from '../navigation/StackNavigation';
import { useEffect, useContext } from 'react';
import { AuthState, AuthContext } from '../context/AuthContext';

//Como objeto se le envia la definicion de rutas en el stack principal y como propiedad se le envia la página que contiene la info a mostrar
interface IProps extends StackScreenProps<RootStackParams, 'PersonScreen'> { };


const PersonScreen = ({ route }: IProps) => {
    const params= route.params; // se extraen los parametros que son los que contienen la info a mostrar
    const {name} = params;
    const {changeUsername } =  useContext(AuthContext);
    
    //Una vez se le de clic al botón se ejecute una sola vez y envie el nombre al context
    useEffect(()=>{
        changeUsername(name)
    },[]);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
        </View>
    )
}

export default PersonScreen

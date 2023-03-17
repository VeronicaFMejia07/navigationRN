import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/AppStyles';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';


interface IProps extends StackScreenProps<any,any>{};

const Page2Screen = ({navigation}:IProps) => {
    const navigator = useNavigation();

    useEffect(() =>{
        navigation.setOptions({
            title: 'Hola mundo', 
            headerBackTitle: 'Atrás' //Para que no se muestre el titulo y la flecha atras, si no que solo muestre Atras y la flecha, eso es para devolverse entre pantallas
        })
    },[]) //Solo se ejecutara una vez

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>HOLA PAGE 2</Text>

            <Button title='PAGINA 3' onPress={() => navigation.navigate('Page3Screen')} />
        </View>
    )
}

export default Page2Screen

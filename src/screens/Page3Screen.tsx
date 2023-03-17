import React from 'react'
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { styles } from '../styles/AppStyles';

interface IProps extends StackScreenProps<any,any>{};

const Page3Screen = ({navigation}:IProps) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>PAGE 3 </Text>
            <Button title='Regresar' onPress={()=> navigation.goBack()} />
            <Button title='Ir al home' onPress={()=> navigation.popToTop()} />
        </View>

    )
}

export default Page3Screen

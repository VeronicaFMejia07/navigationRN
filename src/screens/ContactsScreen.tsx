import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../styles/AppStyles';

const ContactsScreen = () => {
    const {signIn, authState} = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}> 
            <Text style={styles.menuTexto}>Acá van los contactos</Text>
            
            {
                authState.isLogged === false ? 
                <Button 
                    title='SignIn' 
                    onPress={signIn} 
                /> : <></>
            }
        </View>
    )
}

export default ContactsScreen

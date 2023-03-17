import {StyleSheet} from 'react-native'

//se crean colores globales para la aplicación
export const colores = {
    primary: '#5856D6'
}

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 15,
        color: 'black'
    },
    containerButton:{
        flexDirection: 'row'
    },
    btn:{
        width: 100,
        height: 100,
        backgroundColor:'pink',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    text:{
        color: 'black',
        fontWeight:'bold',
        fontSize: 18
    },
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    avatar:{
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    menuContainer: {
        marginVertical: 40,
        marginHorizontal: 80,
    },
    menuBoton: {
        marginVertical: 10
    },
    menuTexto: {
        fontSize: 20,
        color: 'black'
    }
    
});
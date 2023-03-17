import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { colores } from '../styles/AppStyles';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
    return (
        <Tab.Navigator sceneContainerStyle={{
            backgroundColor: 'white'
        }}

            screenOptions={({ route }) => ({
                tabBarStyle: { borderBottomColor: colores.primary, borderBottomWidth: 0, elevation: 0, backgroundColor: 'white' },
                tabBarPressColor: colores.primary, //para el color del efecto ondulado al dar clic
                tabBarShowIcon: true,    //para que genere el espacio para colocar el icono
                tabBarIndicatorStyle: { backgroundColor: colores.primary }, //para el color del borde inferior cuando esta activo
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    //Evalua que icono asignar segun el nombre de la ruta
                    switch (route.name) {
                        case 'Chat':
                            iconName = 'mail-outline'
                            break;
                        case 'Contacts':
                            iconName = 'file-tray-stacked-outline'
                        case 'Albums':
                            iconName = 'book-outline'
                            break;
                    }
                    return <Icon name={iconName} size={25} color="purple" />
                }
            })}
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    )
}

export default TopTabNavigation

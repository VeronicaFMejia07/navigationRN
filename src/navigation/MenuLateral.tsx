import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react'
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigation from './StackNavigation';
import { Text, useWindowDimensions, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AppStyles';
import Tabs from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {
    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator screenOptions={{ drawerType: width >= 768 ? 'permanent' : 'front' }}
            drawerContent={(props) => <MenuInterno {...props} />} /*Se desestructuran las props y se envian*/
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

export default MenuLateral

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/*AVATAR*/}
            <View style={styles.container}>
                <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg' }}
                    style={styles.avatar}
                />
            </View>

            {/*OPCIONES DE MENÚ*/}
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={{ ...styles.menuBoton, flexDirection: 'row' }}>
                    <Icon name='flower-outline' size={25} color="purple" />
                    <Text style={styles.menuTexto}> Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')} style={{ ...styles.menuBoton, flexDirection: 'row' }}>
                    <Icon name='grid-outline' size={25} color="purple" />
                    <Text style={styles.menuTexto} > Ajustes</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
}

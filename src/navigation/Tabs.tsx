import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import StackNavigation from './StackNavigation';
import { colores, styles } from '../styles/AppStyles';
import { Platform, Text } from 'react-native';
import TopTabNavigation from './TopTabNavigation';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return (
        Platform.OS !== 'ios' ?  //Evalua en que plataforma se esta, IOSo Android
            <Tab.Navigator
                sceneAnimationEnabled={true}
                activeColor={colores.primary}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {  //Poner icono en los tab, el tabBarIcon recibe las props de focused y color, este color viene por defecto del que se este manejando en el tab
                        let iconName: string = '';
                        //Evalua que icono asignar segun el nombre de la ruta
                        switch (route.name) {
                            case 'Tab1Screen':
                                iconName = 'briefcase-outline'
                                break;
                            case 'TopTabNavigation':
                                iconName = 'file-tray-stacked-outline';
                                break;
                            case 'Stack':
                                iconName = 'clipboard-outline';
                                break;
                        }
                        return <Icon name={iconName} size={25} color="purple" />

                    }
                    
                
                })}
                barStyle={{ borderTopColor: colores.primary, borderTopWidth: 1, backgroundColor: 'white' }}
            >
                <Tab.Screen name="Tab1Screen" options={{ title: 'Icons' }} component={Tab1Screen} />
                <Tab.Screen name="TopTabNavigation" options={{ title: 'TopTab' }} component={TopTabNavigation} />
                <Tab.Screen name="Stack" component={StackNavigation} />
            </Tab.Navigator>

        : null
    )
}

export default Tabs

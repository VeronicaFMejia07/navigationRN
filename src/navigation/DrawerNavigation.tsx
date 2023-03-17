import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import SettingsScreen from '../screens/SettingsScreen';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigation" component={StackNavigation} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation

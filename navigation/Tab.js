import { View, Text, Image } from 'react-native';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useLayoutEffect } from 'react';
import HomeScreen from '../screens/homeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import { useNavigation } from '@react-navigation/native';
import { HomeIcon,ClipboardDocumentIcon, ShoppingCartIcon, UserCircleIcon } from 'react-native-heroicons/outline';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import HomeTabNavigator from './HomeTabNavigator';
const Tab = createMaterialBottomTabNavigator();
const MyTab = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#fff"
            barStyle={{ backgroundColor: '#004666' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeTabNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <HomeIcon color={color} size={26}/>,
                }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({ color }) => <ClipboardDocumentIcon name="menu" color={color} size={26} />,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => <ShoppingCartIcon name="cart" color={color} size={26} />,
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => <UserCircleIcon name="user" color={color} size={26} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default MyTab;

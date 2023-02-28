import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import RegisterScreen from '../screens/RegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/homeScreen'
import BookTableScreen from '../screens/BookTableScreen'

const Stack = createNativeStackNavigator();

const HomeTabNavigator = () => {
  return (
    <Stack.Navigator >
        {/* <Stack.Screen name='BookTable' component={BookTableScreen} /> */}
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        
    </Stack.Navigator>
  )
}

export default HomeTabNavigator
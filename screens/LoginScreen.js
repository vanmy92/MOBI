import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../redux/apiRequest';

// import { loginUser } from '../redux/apiRequest';
const LoginScreen = () => {
    // const user = useSelector((state)=>state.bla)
    // console.log(user);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigation = useNavigation();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const handleLogin = () => {
        const newUser = {
            email,password
        }
         loginUser(newUser,dispatch)
        navigation.navigate('Onboarding')
    }
    return (
        <SafeAreaView className="flex-1 justify-center bg-white ">
           <KeyboardAvoidingView behavior='height'>
               <ScrollView >
                    <View className="px-3 flex-1 justify-around">
                        <View className="items-center ">
                            <Image
                                className="scale-145"
                                style={{ width: 270, height: 100 }}
                                source={{
                                    uri: 'https://brademar.com/wp-content/uploads/2022/05/Dominos-Pizza-Logo-PNG-2012-%E2%80%93-Now-2.png',
                                }}
                            />
                        </View>
        
                        <View>
                            <View className="mx-6">
                                <Text className="text-gray-500 pb-2">Email</Text>
                                <TextInput  onChangeText={(e) => setEmail(e)} className=" mb-2 p-4 border font-medium border-gray-300" placeholder="Enter your Email" />
                            </View>
        
                            <View className="mx-6">
                                <Text className="text-gray-500 pb-2 ">Password</Text>
                                <TextInput
                                    onChangeText={(e) => setPassword(e)}
                                    className="mb-2 p-4 border border-gray-300 font-medium"
                                    keyboardType="password"
                                    placeholder="Enter your password"
                                    secureTextEntry={true}
                                />
                            </View>
        
                            <TouchableOpacity onPress={handleLogin} className="mx-6 mt-3 flex">
                                <Text className="text-xl text-center  bg-sky-800 text-white pt-4 pb-4">Login</Text>
                            </TouchableOpacity>
                            <Text className="text-center mt-3 text-gray-500 font-medium">Forgot password?</Text>
                        </View>
        
                        <SafeAreaView>
                            <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                                <Text className="text-center font-bold text-sky-800 text-xl">Create Account</Text>
                            </TouchableOpacity >
                        </SafeAreaView>
                    </View>
               </ScrollView>
           </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginScreen;

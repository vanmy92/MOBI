import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const BookTableScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView className="pt-2 flex-1 bg-gray-50 ">
            <ScrollView contentContainerStyle={{ paddingBottom: 4 }} >
                <View className="justify-center items-center">
                    <View className="flex-row pt-2">
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"1"
                        })}} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"2"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"3"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 3</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row pt-2">
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"4"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"5"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"6"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 6</Text>
                        </TouchableOpacity>
                    </View>
                   <View  className="flex-row pt-2">
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"7"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"8"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"9"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 9</Text>
                        </TouchableOpacity>
                   </View>
                   
                   <View  className="flex-row pt-2">
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"10"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 10</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"11"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"12"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 12</Text>
                        </TouchableOpacity>
                       
                   </View>

                   <View  className="flex-row pt-2">
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"13"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 13</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"14"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 14</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"15"
                        }) }} className="rounded-md w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-xl opacity-40">Bàn 15</Text>
                        </TouchableOpacity>
                       
                   </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default BookTableScreen
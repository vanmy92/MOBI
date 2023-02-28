import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProduct } from '../../redux/apiRequest'
import {ArrowRightIcon} from 'react-native-heroicons/outline'


const FeaturedRow = ({ id, title, description, featureCategory }) => {
  const dataProduct = useSelector((state)=>state.product.products.allProduct)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const type = 'pizza'
    useEffect(()=>{
      getAllProduct(dispatch,type)
    },[])
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg text-sky-800">{title}</Text>
        <ArrowRightIcon onPress={()=>{navigation.navigate('Menu')}} color="#2596be" />
      </View>
      <Text className="text-xs text-gray-500 px-4 font-normal">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-2"
      >
       {
        dataProduct?.map((data,index)=>{
         return <RestaurantCard key={index} data={data} />
        })
       }
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
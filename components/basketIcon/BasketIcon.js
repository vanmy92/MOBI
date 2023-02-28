import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addProduct, addProductSelectId } from '../../redux/billSlice'

const BasketIcon = ({data}) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    
    //add het Product va option vao list de xuat ra man hinh cart
    const price = data.priceProduct
    const dataProductAddArray = {
        product:data,
        price:price,
    }
    //add Id vao array de luu vao list product trong bill
    const productId = data.dataProduct._id
    const dataProductAddIdArray = {
        product:productId
    }
    
    //function xu li 
    const addProductToCart = () =>{
        dispatch(addProduct(dataProductAddArray))
        dispatch(addProductSelectId(dataProductAddIdArray))
        navigation.goBack()
    }
    return (
        <View className= "absolute bottom-0 w-full h-20 z-50 bg-white flex justify-center items-center">
            <View className="bg-sky-700 w-11/12 h-4/6 rounded-lg">
                <TouchableOpacity onPress={data.priceProduct ? ()=>addProductToCart() : ()=>{}}>
                    <Text className="text-white font-bold text-lg pt-3 text-center">{data.priceProduct ===0  ? "Thêm vào giỏ hàng" : `Thêm vào giỏ hàng - ${data.priceProduct}đ`}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BasketIcon
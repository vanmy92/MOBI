import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { RadioButton } from 'react-native-paper';
import BasketIcon from '../components/basketIcon/BasketIcon';
import { useSelector } from 'react-redux';


const DetailScreen = () => {
    const user = useSelector((state)=>state.user.login?.currentUser)
    const [checked, setChecked] = useState('');
    const [priceProduct, setPriceProduct] = useState(0)
    const [chooseSizeType,setChooseSizeType] = useState(' ')
    const route = useRoute();
    const { data } = route.params

    const dataDetailPizza = {
        priceProduct,
        chooseSizeType,
        dataProduct: data
    }
    const dataDetailOrder = {
        priceProduct : data.priceC,
        dataProduct:data,
        chooseSizeType,
    }
    return (
       <>
            <BasketIcon data={data.type ==='pizza' ? dataDetailPizza : dataDetailOrder}/>

            <ScrollView className="mb-20 bg-gray-50">
                <View>
                    <Image source={{ uri: data.imgUrl }}
                        className="w-full h-56 bg-gray-300 p-4" />
                </View>
                <View className="px-2 pt-4">
                    <Text className="text-2xl font-bold text-sky-800">{data.name}</Text>
                    <Text className="text-gray-400 font-normal pt-1 text-lg">{data.description}</Text>
                    {data.ingredient ? <Text className="text-gray-400 font-normal pt-2 text-lg italic">Nguyên liệu: {data.ingredient}</Text> : <></>}
    
                </View>
                {data.type ==='pizza' ? (<View className="px-2 pt-4">
                    <Text className="text-2xl font-bold text-sky-800">Chọn kích thước bánh và loại đế</Text>
    
                    {/* Đế nhỏ */}
    
                    <View className="bg-gray-200 border border-gray-100 rounded-lg mt-3 px-3 font-bold">
                        <Text className="text-xl font-bold p-2 border-b-2 border-gray-400">Nhỏ</Text>
                        <View className="flex-row justify-between">
                            <View className="flex-row py-2">
                                <RadioButton
                                    value="1"
                                    status={checked === '1' ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked('1'); setPriceProduct(149000);setChooseSizeType('Nhỏ, Đế Giòn Xốp') }}
                                />
                                <Text className="pt-1 text-lg ">Đế Giòn Xốp</Text>
                            </View>
                            <View className="flex-row">
                                <Text className="pt-1 text-lg py-2">149,000đ</Text>
                                <Image className="pl-2 w-10 h-10" source={{uri:'https://dominos.vn/img/icon/pizza-base-1.png'}} />
                            </View>
                        </View>
    
                        <View className="flex-row justify-between">
                            <View className="flex-row py-2">
                                <RadioButton
                                    value="2"
                                    status={checked === '2' ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked('2'); setPriceProduct(149000);setChooseSizeType('Nhỏ, Đế Mỏng Giòn')  }}
                                />
                                <Text className="pt-1 text-lg ">Đế Mỏng Giòn</Text>
                            </View>
                            <View className="flex-row">
                                <Text className="pt-1 text-lg py-2">149,000đ</Text>
                                <Image className="pl-2 w-10 h-10" source={{uri:'https://dominos.vn/img/icon/pizza-base-1.png'}} />
                            </View>
                        </View>
    
                        <View className="flex-row justify-between">
                            <View className="flex-row py-2">
                                <RadioButton
                                    value="3"
                                    status={checked === '3' ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked('3'); setPriceProduct(149000) ;setChooseSizeType('Nhỏ, Đế Kéo Tay Truyền Thống')  }}
                                />
                                <Text className="pt-1 text-lg ">Đế Kéo Tay Truyền Thống</Text>
                            </View>
                            <View className="flex-row">
                                <Text className="pt-1 text-lg py-2">149,000đ</Text>
                                <Image className="pl-2 w-10 h-10" source={{uri:'https://dominos.vn/img/icon/pizza-base-1.png'}} />
                            </View>
                        </View>
                    </View>
    
                    {/* đế vừa */}
                    <View className="bg-gray-200 border border-gray-100 rounded-lg mt-3 px-3">
                        <Text className="text-xl font-bold p-2 border-b-2 border-gray-400">Vừa</Text>
                        <View className="flex-row justify-between">
                            <View className="flex-row py-2">
                                <RadioButton
                                    value="4"
                                    status={checked === '4' ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked('4'); setPriceProduct(239000);setChooseSizeType('Vừa, Đế Giòn Xốp')  }}
                                />
                                <Text className="pt-1 text-lg ">Đế Giòn Xốp</Text>
                            </View>
                            <View className="flex-row">
                                <Text className="pt-1 text-lg py-2">239,000đ</Text>
                                <Image className="pl-2 w-10 h-10" source={{uri:'https://dominos.vn/img/icon/pizza-base-1.png'}} />
                            </View>
                        </View>
    
                        <View className="flex-row justify-between">
                            <View className="flex-row py-2">
                                <RadioButton
                                    value="5"
                                    status={checked === '5' ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked('5'); setPriceProduct(239000);setChooseSizeType('Vừa, Đế Mỏng Giòn')  }}
                                />
                                <Text className="pt-1 text-lg ">Đế Mỏng Giòn</Text>
                            </View>
                            <View className="flex-row">
                                <Text className="pt-1 text-lg py-2">239,000đ</Text>
                                <Image className="pl-2 w-10 h-10" source={{uri:'https://dominos.vn/img/icon/pizza-base-1.png'}} />
                            </View>
                        </View>
    
                        <View className="flex-row justify-between">
                            <View className="flex-row py-2">
                                <RadioButton
                                    value="6"
                                    status={checked === '6' ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked('6'); setPriceProduct(239000);setChooseSizeType('Vừa, Đế Kéo Tay Truyền Thống')  }}
                                />
                                <Text className="pt-1 text-lg ">Đế Kéo tay truyền thống</Text>
                            </View>
                            <View className="flex-row">
                                <Text className="pt-1 text-lg py-2">239,000đ</Text>
                                <Image className="pl-2 w-10 h-10" source={{uri:'https://dominos.vn/img/icon/pizza-base-1.png'}} />
                            </View>
                        </View>
                    </View>
    
                    {/* Đế lớn */}
                    <View className="bg-gray-200 border border-gray-100 rounded-lg mt-3 px-3 mb-3 ">
                        <Text className="text-xl font-bold p-2 border-b-2 border-gray-400">Lớn</Text>
                        <View className="flex-row justify-between">
                            <View className="flex-row py-2">
                                <RadioButton
                                    value="7"
                                    status={checked === '7' ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked('7'); setPriceProduct(299000);setChooseSizeType('Lớn, Đế Giòn Xốp')  }}
                                />
                                <Text className="pt-1 text-lg ">Đế Giòn Xốp</Text>
                            </View>
                            <View className="flex-row">
                                <Text className="pt-1 text-lg py-2">299,000đ</Text>
                                <Image className="pl-2 w-10 h-10" source={{uri:'https://dominos.vn/img/icon/pizza-base-1.png'}} />
                            </View>
                        </View>
    
                        <View className="flex-row justify-between">
                            <View className="flex-row py-2">
                                <RadioButton
                                    value="8"
                                    status={checked === '8' ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked('8'); setPriceProduct(299000);setChooseSizeType('Lớn, Đế Mỏng Giòn')  }}
                                />
                                <Text className="pt-1 text-lg ">Đế Mỏng Giòn</Text>
                            </View>
                            <View className="flex-row">
                                <Text className="pt-1 text-lg py-2">299,000đ</Text>
                                <Image className="pl-2 w-10 h-10" source={{uri:'https://dominos.vn/img/icon/pizza-base-1.png'}} />
                            </View>
                        </View>
    
                        <View className="flex-row justify-between">
                            <View className="flex-row py-2">
                                <RadioButton
                                    value="9"
                                    status={checked === '9' ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked('9'); setPriceProduct(299000);setChooseSizeType('Lớn, Đế Kéo Tay Truyền Thống')  }}
                                />
                                <Text className="pt-1 text-lg ">Đế Kéo tay truyền thống</Text>
                            </View>
                            <View className="flex-row">
                                <Text className="pt-1 text-lg py-2">299,000đ</Text>
                                <Image className="pl-2 w-10 h-10" source={{uri:'https://dominos.vn/img/icon/pizza-base-1.png'}} />
                            </View>
                        </View>
                    </View>
                </View>) : (
                    <View></View>
                )}
    
            </ScrollView>
       </>
    )
}

export default DetailScreen
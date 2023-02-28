import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { CheckCircleIcon, CheckIcon, XCircleIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { acceptBill, acceptChefBill, acceptDishout, getAllUser, rejectBill } from '../../redux/apiRequest'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { useEffect } from 'react'

const ModalOrder = ({ visible, setVisible, children, item }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const user = useSelector((state) => state.user.login?.currentUser)
    const allUser = useSelector((state) => state.user.users?.allUsers)
    const accessToken = user.accessToken
    const dispatch = useDispatch()

    useEffect(() => {
        getAllUser(accessToken, dispatch)
    }, [])
    const handlePressAcceptBill = () => {
        const payload = {
            id: item._id,
            user: user._id
        }
        acceptBill(accessToken, dispatch, payload)
        setVisible(false)
    }
    const handlePressChefAccept = () => {
        if (selectedValue) {
            const payload = {
                id: item._id,
                user: user._id,
                userPlaced: selectedValue
            }
            acceptChefBill(accessToken, dispatch, payload)
            setVisible(false)
        } else {
            console.log("chua chon nguoi ra mon");
        }
    }
    const handlePressDishOut = () => {
        const payload = {
            id: item._id,
            user: user._id,
        }
        acceptDishout(accessToken, dispatch, payload)
        setVisible(false)
    }
    const handlePressRejectBill = () => {

        const payload = {
            id: item._id,
            user: user._id,
            userPlaced: selectedValue,
        }
        rejectBill(accessToken, dispatch, payload)
        setVisible(false)
    }
    const handlePressFail = () => {
        console.log("k co quyen");
    }
    return (
        <Modal transparent visible={visible} animationType={'fade'}>
            <View style={{ backgroundColor: "#00000080" }} className="flex-1  justify-end items-center bg-slate-400 ">
                <View style={{ elevation: 20 }} className="w-full bg-white py-5 px-3 rounded-lg h-4/5">
                    <View className="justify-between">
                        <View className="flex-row justify-between">
                            <Text className="text-3xl text-sky-800 font-bold">Tùy chỉnh hóa đơn </Text>
                            <TouchableOpacity onPress={() => { setVisible(false) }} className="">
                                <XCircleIcon color={"#A0AEC0"} size={30} />
                            </TouchableOpacity >
                        </View>
                        <View className="flex-row items-center border-b border-gray-300">
                            <TouchableOpacity className="py-2 text-xl font-semibold" onPress={user.isAdmin || user.role === "cashier" ? () => handlePressAcceptBill() : () => handlePressFail()}>
                                <Text className="text-xl pr-3">Xác nhận đơn hàng</Text>
                            </TouchableOpacity>
                            {item?.isActiveBill == true ? <CheckCircleIcon color={"#005028"} size={30} /> : <></>}
                        </View>
                        <View className="flex-row items-center border-b border-gray-300">
                            <TouchableOpacity className="py-2 text-xl font-semibold" onPress={user.role === "chef" ? () => handlePressChefAccept() : () => handlePressFail()}>
                                <Text className="text-xl">Hoàn thành món ăn</Text>
                            </TouchableOpacity>
                            {item?.chefActive ? <CheckCircleIcon color={"#005028"} size={30} /> : <></>}
                        </View>

                        {/* <View className="flex-row items-center border-b border-gray-300">
                            <TouchableOpacity className="py-2 text-xl font-semibold" onPress={user.role === "cashier" || user.isAdmin ? () => handlePressDishOut() : () => handlePressFail()}>
                                <Text className="text-xl">Hoàn tất hóa đơn</Text>
                            </TouchableOpacity>
                        </View> */}
                            {/* {item?.userPlaced ? <CheckCircleIcon color={"#005028"} size={30} /> : <></>} */}

                        <View className="flex-row items-center border-b border-gray-300" >
                            <TouchableOpacity className="py-2 text-xl font-semibold" onPress={() => handlePressRejectBill()}>
                                <Text className="text-xl">Hủy hóa đơn</Text>
                            </TouchableOpacity>
                            {item?.isRejectBill == true ? <CheckCircleIcon color={"#005028"} size={30} /> : <></>}

                        </View>
                    </View>
                    {/* chon nguoi dat mon */}
                    {user.role === 'chef' ? <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        {
                            allUser?.map((item, index) => {
                                if (item.role === 'cashier' || item.isAdmin) {
                                    return <Picker.Item key={index} label={item.username} value={item._id} />
                                }
                            })
                        }

                    </Picker> : <></>}


                    <View>
                        <Text className="text-2xl text-sky-800 font-bold pt-5">Chi Tiết Đơn Hàng</Text>
                    </View>
                    <ScrollView>
                        <View className="flex-row">    
                            <Text className="text-xl">Sản phẩm: </Text>
                            <View className="">
                                {
                                    item?.products.map((itemBill, index) => {
                                        return <Text key={index} className="text-xl">{itemBill.name}</Text>
                                    })
                                }
                            </View>
                        </View>
                        <Text className="text-xl">Mô tả chi tiết: {item?.description}</Text>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default ModalOrder
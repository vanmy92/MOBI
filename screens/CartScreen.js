import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductSelectId, removeProduct, removeProductSelectId } from "../redux/billSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import SelectList from "react-native-dropdown-select-list";
import { useState } from "react";
import { addBill } from "../redux/apiRequest";
const CartScreen = () => {
  const [select, setSelect] = useState("");

  const dataDropdown = [
    { label: "item 1", value: "1" },
    { label: "item 2", value: "2" },
    { label: "item 3", value: "3" },
    { label: "item 4", value: "4" },
    { label: "item 5", value: "5" },
    { label: "item 6", value: "6" },
    { label: "item 7", value: "7" },
    { label: "item 8", value: "8" },
    { label: "item 9", value: "9" },
    { label: "item 10", value: "10" },
    { label: "item 11", value: "11" },
    { label: "item 12", value: "12" },
    { label: "item mua ve", value: "Mua về" },
  ];
  const CartProduct = useSelector((state) => state.bill?.productCart);
  const bill = useSelector((state) => state.bill?.productSelectId);
  const user = useSelector((state) => state.user.login.currentUser);

  const accessToken = user.accessToken;
  const dispatch = useDispatch();
  const navigation = useNavigation();


  const handleBack = () => {
    navigation.goBack();
  };
  // console.log(bill);
  // console.log(CartProduct.listProduct);
  // console.log(select);

  // xu li dat hang
  let description = ''
  CartProduct.listProduct.map(item=>{
    return description = description +" " + item.dataProduct.name +" " + item.chooseSizeType + "; " 
  })
  // console.log("description: ",description);
  const handlePress = () => {
    const priceBill = CartProduct.price;

    const newBill = {
      priceBill: priceBill,
      numberTable: select,
      products: bill,
      user: user._id,
      description: description
    };
    // console.log(newBill);
    addBill(accessToken, newBill, dispatch);
    navigation.navigate('Home')
  };
  const handleRemoveProduct = (index,item) => {
      const position = index
      const price = item.priceProduct

      const payload = {
        position,
        price,
      }
      dispatch(removeProduct(payload))
      dispatch(removeProductSelectId(payload))
  };
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className=" flex-1 mb-2">
        <View className="flex-row justify-center relative h-11 border-b border-gray-300">
          <TouchableOpacity
            onPress={() => handleBack()}
            className="absolute left-4 top-1"
          >
            <ChevronLeftIcon color="#004666" size={26} />
          </TouchableOpacity>
          <Text className="text-xl">Giỏ hàng</Text>
        </View>
        <ScrollView className="flex-1">
          <View className="justify-between flex-row border-b py-2 border-gray-300">
            <Text className=" px-2 text-xl font-bold ">Danh sách đơn hàng</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
              <Text className=" px-2 text-lg text-blue-900 font-normal">
                + Thêm món
              </Text>
            </TouchableOpacity>
          </View>

          {CartProduct.listProduct.map((item, index) => {
            return (
              <View
                key={index}
                className="flex-row justify-between px-2 border-b py-2 border-gray-300 "
              >
                <Text className="text-lg font-bold text-sky-800">x1</Text>

                <View className="ml-4 flex-1 pr-3 relative">
                  <TouchableOpacity
                    onPress={() => {
                      handleRemoveProduct(index,item);
                    }}
                    className="absolute right-0 pl-2 top-1"
                  >
                    <Text className="font-bold text-sm text-sky-800 px-2">Xóa</Text>
                  </TouchableOpacity>

                  <Text className="text-lg font-bold">
                    {item.dataProduct.name}
                  </Text>
                  {item.chooseSizeType ? (
                    <Text>{item.chooseSizeType}</Text>
                  ) : (
                    <></>
                  )}
                </View>
                <Text className="text-lg font-bold text-red-700 w-24 text-right">
                  {item.priceProduct} đ
                </Text>
              </View>
            );
          })}

          <View></View>
        </ScrollView>
        <View className="px-2 justify-between flex-row border-b border-gray-300 py-2 bg-white">
          <Text className="text-lg pt-2">Chọn bàn</Text>
          <SelectList
            data={dataDropdown}
            setSelected={setSelect}
            placeholder="Chọn số bàn của bạn"
            maxHeight={100}
          />
        </View>
      </View>

      {/* Bottom thanh toán */}
      <View className="w-full h-44 bg-white">
        <View className="h-20 px-2">
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-normal text-red-700">Tổng</Text>
            <Text className="text-base font-bold text-red-700">
              {CartProduct.price} đ
            </Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-normal">Giảm thành viên</Text>
            <Text className="text-base font-normal">0 đ</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-normal">Giảm khuyến mãi</Text>
            <Text className="text-base font-normal">0 đ</Text>
          </View>
        </View>
        <View className="h-24 border border-gray-300 rounded-2xl">
          <View className="items-center">
            <View className="flex-row justify-between w-11/12 items-center pb-2 pt-1">
              <Text className="font-normal text-base">Giá đã bao gồm VAT</Text>
              <Text className="font-bold text-base">
                Thanh toán: {CartProduct.price} đ
              </Text>
            </View>
          </View>
          <View className="items-center">
            <TouchableOpacity
              onPress={
                select
                  ? () => handlePress()
                  : () => {
                      console.log("chon ban an");
                    }
              }
              className="w-11/12 h-12 bg-sky-700 justify-center items-center rounded-md"
            >
              <Text className="text-white text-lg font-semibold">
                Đặt món
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

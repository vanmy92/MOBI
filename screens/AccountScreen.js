import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/apiRequest";
import { useNavigation } from "@react-navigation/native";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  InboxIcon,
  PhoneArrowDownLeftIcon,
  PhoneIcon,
} from "react-native-heroicons/outline";

const AccountScreen = () => {
  const user = useSelector((state) => state.user.login.currentUser);
  const token = user.accessToken;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePress = () => {
    logoutUser(token, user, dispatch);
  };
  return (
    <SafeAreaView className="">
      <View className="justify-center items-center pb-2">
        <Image
          style={{ width: 200, height: 45 }}
          source={{
            uri: "https://png.pngitem.com/pimgs/s/452-4529695_logo-dominos-pizza-png-transparent-png.png",
          }}
        />
      </View>
      <View>
        <Text className="text-center text-gray-700 py-5 text-3xl font-bold">
          Thông tin cá nhân 👌
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Receipt")}
        style={{ elevation: 4, borderRadius: 5 }}
        className="mb-4 mx-3 bg-white flex justify-center h-16"
      >
        <Text className="pl-4 text-xl text-sky-700 font-semibold ">
          Xem hóa đơn
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ elevation: 4, borderRadius: 5 }}
        className=" mb-4 mx-3 bg-white flex justify-center h-16"
      >
        <Text className="pl-4 text-xl text-sky-700 font-semibold ">
          Tài khoản
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("OrderPlaced")}
        style={{ elevation: 4, borderRadius: 5 }}
        className="mb-4 mx-3 bg-white flex justify-center h-16"
      >
        <Text className="pl-4 text-xl text-sky-700 font-semibold ">
          Đơn hàng đã hoàn thành
        </Text>
      </TouchableOpacity>

      <View
        style={{ elevation: 4, borderRadius: 5 }}
        className=" flex-row  items-center mb-4 mx-3 bg-white flex justify-between h-16"
      >
        <Text className="pl-4 text-xl text-sky-700 font-semibold">
          Liên hệ với chúng tôi
        </Text>
        <TouchableOpacity className=" border-2 border-sky-700 flex justify-center items-center w-10 h-10 rounded-full">
          <PhoneArrowDownLeftIcon color={"#1D4ED8"} size={25} />
        </TouchableOpacity>
        <TouchableOpacity className=" border-2 border-sky-700 flex justify-center items-center w-10 h-10 rounded-full">
          <EnvelopeIcon size={25} color={"#1D4ED8"} />
        </TouchableOpacity>
        <TouchableOpacity className=" border-2 border-sky-700 flex justify-center items-center w-10 h-10 rounded-full">
          <Text> </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => handlePress()}
        style={{ elevation: 4, borderRadius: 5 }}
        className="mb-4 mx-3 bg-white flex justify-center h-16"
      >
        <Text className="pl-4 text-xl text-sky-700 font-semibold ">
          Đăng xuất
        </Text>
      </TouchableOpacity>
      <View className="justify-center items-center">
        <Text className="font-semibold">copyright © 2022, VietNam </Text>
        <Text className="font-semibold">Phiên bản: 1.0.0 v1</Text>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

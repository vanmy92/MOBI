import { View, Text, TouchableOpacity, Button, ScrollView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBill } from "../redux/apiRequest";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import ModalOrder from "../components/modalOrder/ModalOrder";
import Modal from "react-native-modal";

const ReceiptScreen = () => {
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState();

  const dispatch = useDispatch();
  const bill = useSelector((state) => state.bill.billProduct?.allBill);
  const user = useSelector((state) => state.user.login.currentUser);
  useEffect(() => {
    getAllBill(user.accessToken, dispatch, user.role,user);
  }, [visible]);

  const handlePress = (item) => {
    setVisible(true);
    setItem(item);
  };
  return (
    <View className="bg-white">
      <ModalOrder visible={visible} setVisible={setVisible} item={item} />
      <View className="flex-row justify-between mx-2 border-b border-gray-300">
        <View>
          <Text className="w-20 text-lg font-bold text-sky-800">Hóa đơn</Text>
        </View>
        <View>
          <Text className="w-20 text-lg font-bold text-sky-800">Tên</Text>
        </View>
        <View className="w-20 items-end">
          <Text className=" text-lg font-bold text-sky-800 ">Giá</Text>
        </View>
        <View>
          <Text className="w-25 text-lg font-bold text-sky-800">
            Trạng thái
          </Text>
        </View>
      </View>

      <ScrollView>
        {bill?.map((item, index) => {
          let nameHD = item._id.slice(20, 24)
          return (
            <TouchableOpacity
              className="py-2 mx-2 border-b border-gray-300"
              onPress={() => {
                handlePress(item);
              }}
              key={index}
            >
              <View className="flex-row justify-between">
                <View>
                  <Text className="w-20 text-base font-normal">
                    HĐ {nameHD}
                  </Text>
                </View>
                <View>
                  <Text className="w-20 text-base font-normal">
                    {item.user.username}
                  </Text>
                </View>
                <View className="w-20  items-end ">
                  <Text className="text-base font-semibold text-red-600 ">
                    {item.priceBill} đ
                  </Text>
                </View>
                <View>
                  {item.status === "DON_MOI" ? (
                    <Text className="w-20 font-semibold text-base text-center text-green-400">
                      chờ xác nhận
                    </Text>
                  ) : item.status === "DON_DA_XAC_NHAN" ? (
                    <Text className="w-20 font-semibold text-base text-center text-yellow-400">
                      Chờ bếp ra món
                    </Text>
                  ) : item.status === "BEP_XAC_NHAN" ? (
                    <Text className="w-20 font-semibold text-base text-center text-orange-400">
                      Chờ nhân viên nhận món
                    </Text>
                  ) : item.status === "HUY_DON" ? (
                    <Text className="w-20 font-semibold text-base text-center text-rose-900">
                      Đơn hủy
                    </Text>
                  )
                    : (
                      <Text className="w-20 font-semibold text-base text-center text-sky-800">
                        Đã ra món
                      </Text>
                    )}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ReceiptScreen;

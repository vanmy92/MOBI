import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";

import React, { useLayoutEffect } from "react";
import {useNavigation } from "@react-navigation/native";
import AppStack from "../navigation/AppStack";
import { useSelector } from "react-redux";

const OnboardingScreen = () => {

  const user = useSelector((state)=>state.user?.login.currentUser)
  const loading = useSelector((state)=>state.user?.login.isFetching)
  const fail = useSelector((state)=>state.user.login.error)
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  if(fail){
    console.log("login that bai");
  }
  return (
   <>
    {
      !user ? (
        <SafeAreaView className="">
      <View>
        <Image
          className="object-right relative"
          source={{
            uri: "https://thumbs.dreamstime.com/b/pizza-food-menu-restaurant-cafe-design-doodle-style-template-flyer-baner-pizza-food-menu-restaurant-cafe-design-158123197.jpg",
          }}
          style={{ width: 450, height: 700, left: -39 }}
        />
        <TouchableOpacity
          className=" bg-sky-600/30 h-14 w-80 absolute bottom-20 ml-11 rounded-xl flex-row justify-around "
          onPress={()=>navigation.navigate('Login')}
       >
          <Text className="text-center pt-3 text-gray-400 text-xl font-norm italic">
            Go to Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
      ) : ( <AppStack />)
    }</>
  );
};

export default OnboardingScreen;

import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AppStack from "./AppStack";
import { useSelector } from "react-redux";
// import AppStack from './AppStack';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <>
     
          <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        
    </>
  );
};

export default AuthStack;

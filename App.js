import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import AccountScreen from './screens/AccountScreen';
// import Test from './screens/Test';
import AuthStack from "./navigation/AuthStack";
import {store} from './redux/store'
import {Provider} from 'react-redux'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
          <NavigationContainer>
            <AuthStack />
          </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

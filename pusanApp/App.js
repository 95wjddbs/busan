/* eslint-disable */
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from 'react-native-splash-screen';

import KorScreen from "./src/Screens/KorScreen";
import EngScreen from "./src/Screens/EngScreen";
import 이용문의 from "./src/Screens/InqScreen";
import 알림확인 from "./src/Screens/Subpage1";

const Stack = createStackNavigator();

const App = () => {
  SplashScreen.hide();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="KorScreen">
        <Stack.Screen name="KorScreen" component={KorScreen} options={{headerShown: false}} />
        <Stack.Screen name="EngScreen" component={EngScreen} options={{headerShown: false}} />
        <Stack.Screen name="이용문의" component={이용문의}/>
        <Stack.Screen name="알림확인" component={알림확인}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
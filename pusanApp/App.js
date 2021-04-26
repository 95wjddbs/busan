/* eslint-disable */
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from 'react-native-splash-screen';

import KorScreen from "./src/Screens/KorScreen";
import EngScreen from "./src/Screens/EngScreen";
import InqScreen from "./src/Screens/InqScreen";

const Stack = createStackNavigator();

const App = () => {
  SplashScreen.hide();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="KorScreen">
        <Stack.Screen name="KorScreen" component={KorScreen} options={{headerShown: false}} />
        <Stack.Screen name="EngScreen" component={EngScreen} options={{headerShown: false}} />
        <Stack.Screen name="InqScreen" component={InqScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
/* eslint-disable */
import "react-native-gesture-handler";
import React,{useState, useEffect} from "react";
import {View, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {NetInfo} from "@react-native-community/eslint-config";
import SplashScreen from 'react-native-splash-screen';

import KorScreen from "./src/Screens/KorScreen";
import EngScreen from "./src/Screens/EngScreen";
import InqScreen from "./src/Screens/InqScreen";
import Inq2Screen from "./src/Screens/Inq2Screen";
import Subpage1 from "./src/Screens/Subpage1";

const Stack = createStackNavigator();
const Subpage2 = ({}) => {
  const [isConnected, setConnected] = useState(true);

  useEffect(() => {
      NetInfo.fetch().then(state => { setConnected(state.isConnected) });
  });

  if(!isConnected) {
      return (
          <WebView source={{uri: 'https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403'}} />
      );
  } else {
      return (
          <View style={{padding: 20}}>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: '#ff0000' }}>인터넷 연결이 되지 않고 있습니다.{"\n"}확인바랍니다.</Text>
          </View>
      );
  }
}
const App = () => {
  SplashScreen.hide();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="KorScreen">
        <Stack.Screen name="KorScreen" component={KorScreen} options={{headerShown: false}} />
        <Stack.Screen name="EngScreen" component={EngScreen} options={{headerShown: false}} />
        <Stack.Screen name="이용문의" component={InqScreen}/>
        <Stack.Screen name="Subpage2" options={{ title: "식단안내" }} component={Subpage2} />
        <Stack.Screen name="Inquiries" component={Inq2Screen}/>
        <Stack.Screen name="알림확인" component={Subpage1}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
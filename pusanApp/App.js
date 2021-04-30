/* eslint-disable */
import "react-native-gesture-handler";
import React,{useState, useEffect} from "react";
import {View, Text} from "react-native";
import {WebView} from "react-native-webview";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NetInfo from "@react-native-community/netinfo";
import SplashScreen from 'react-native-splash-screen';

import KorScreen from "./src/Screens/KorScreen";
import EngScreen from "./src/Screens/EngScreen";
import InqScreen from "./src/Screens/InqScreen";
import Inq2Screen from "./src/Screens/Inq2Screen";
import Subpage1 from "./src/Screens/Subpage1";

const Stack = createStackNavigator();

const Subpage2 = () => {
  const [isConnected, setConnected] = useState(true);

  useEffect(() => {
      NetInfo.fetch()
      .then(state => { setConnected(state.isConnected) })
      .catch(err => console.log(err))
  });

  if(isConnected) {
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

function Subpage3({ navigation }) {
  const isconnet = true;

  useEffect(() => {
      NetInfo.fetch()
        .then(state => { setConnected(state.isconnet) })
        .catch(err => console.log(err))
      });

  if(isconnet) {
      return (
          <WebView source={{uri: 'http://dorm.pusan.ac.kr/dorm/bbs/list01/20000601'}} />
      );
  } else {
      return (
          <View style={{padding: 20}}>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: '#ff0000' }}>인터넷 연결이 되지 않고 있습니다.{"\n"}확인바랍니다.</Text>
          </View>
      );
  }
}

function Subpage4({ navigation }) {
  const isconnet = true;

  useEffect(() => {
      NetInfo.fetch()
        .then(state => { setConnected(state.isconnet) })
        .catch(err => console.log(err))
      });

  if(isconnet) {
      return (
          <WebView source={{uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401'}} />
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

        <Stack.Screen name="Subpage1" options={{ title: "알림확인" }} component={Subpage1}/>
        <Stack.Screen name="Subpage1-1" options={{ title: "Notification" }} component={Subpage1}/>

        <Stack.Screen name="Subpage2" options={{ title: "식단안내" }} component={Subpage2} />
        <Stack.Screen name="Subpage2-1" options={{ title: "Menu" }} component={Subpage2} />

        <Stack.Screen name="Subpage3" options={{ title: "공지사항" }} component={Subpage3} />
        <Stack.Screen name="Subpage3-1" options={{ title: "Notice" }} component={Subpage3} />

        <Stack.Screen name="Subpage4" options={{ title: "원생수칙" }} component={Subpage4} />
        <Stack.Screen name="Subpage4-1" options={{ title: "Dormitory Rules" }} component={Subpage4} />

        <Stack.Screen name="Subpage5" options={{ title: "이용문의" }} component={InqScreen}/>
        <Stack.Screen name="Subpage5-1" options={{ title: "Inquiries" }} component={Inq2Screen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
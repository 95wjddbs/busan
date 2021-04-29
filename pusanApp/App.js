/* eslint-disable */
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from 'react-native-splash-screen';

import KorScreen from "./src/Screens/KorScreen";
import EngScreen from "./src/Screens/EngScreen";
import 이용문의 from "./src/Screens/InqScreen";
import Inquiries from "./src/Screens/Inq2Screen";
import 알림확인 from "./src/Screens/Subpage1";

const Stack = createStackNavigator();

const App = () => {
  SplashScreen.hide();

  function Subpage2({}) {
    const isconnet= true;

    useEffect(() => {
        NetInfo.fetch().then(state => {
            console.log("Is connected?", state.isConnected);
            set_isconnet(state.isConnected)
        });
    }, []);

    if(!isconnet) {
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

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="KorScreen">
        <Stack.Screen name="KorScreen" component={KorScreen} options={{headerShown: false}} />
        <Stack.Screen name="EngScreen" component={EngScreen} options={{headerShown: false}} />
        <Stack.Screen name="이용문의" component={이용문의}/>
        <Stack.Screen name="Subpage2" options={{ title: "식단안내" }} component={Subpage2} />
        <Stack.Screen name="Inquiries" component={Inquiries}/>
        <Stack.Screen name="알림확인" component={알림확인}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
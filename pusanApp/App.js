/* eslint-disable */
import "react-native-gesture-handler";
import React,{useState, useEffect} from "react";
import {View, StyleSheet, ImageBackground, Image, Linking, Button, Dimensions} from "react-native";
import {WebView} from "react-native-webview";
import { Container, Content, Text } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NetInfo from "@react-native-community/netinfo";
import SplashScreen from 'react-native-splash-screen';

import { BtnFill, Btn } from './src/Screens/Custom_button';
import ConfigData from './src/Screens/config.json'; 
import Subpage1 from "./src/Screens/Subpage1";

const Stack = createStackNavigator();

const App = () => {
  SplashScreen.hide();

  function MainPage(props){
    return (
      <ImageBackground style={{flex:1}} source={require('./src/images/bg.jpg')}>
  
      <Container style={{ backgroundColor: null }}>
      <Content padder>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
          <Btn title="한국어" isOn={lang==='kor'} onPress={() => setLang('kor')} />
          <Btn title="ENG" style={{marginLeft:5}} isOn={lang==='eng'} onPress={() => setLang('eng')} />
        </View>  

        <View style={{flex: 1, padding: 30, justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{width: 300, height: 100, resizeMode: 'contain'}} source={require('./src/images/logo.png')}/>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={[styles.box1, { marginRight: 15 }]} onStartShouldSetResponder={() => props.navigation.navigate('Subpage1', {lang_to: lang_to, mt_idx: mt_idx, mt_status: mt_status})}>
            <View style={{height: 60}}>
                <Image style={{width: 60, height: 60, resizeMode: 'contain'}} source={require('./src/images/i1.png')}/>
            </View>
              <View style={{height: 20, marginTop: 10 }}>
              <Text style={styles.box_title}>{lang_to.main_title1}</Text>
            </View>             
          </View>
          <View style={styles.box1} onStartShouldSetResponder={() => props.navigation.navigate('Subpage2')}>
            <View style={{height: 60}}>
              <Image style={{width: 60, height: 60, resizeMode: 'contain'}} source={require('./src/images/i2.png')}/>
            </View>
            <View style={{height: 20, marginTop: 10 }}>
              <Text style={styles.box_title}>{lang_to.main_title2}</Text>
            </View>
          </View>
        </View>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
        <View style={[styles.box1, { marginRight: 15 }]} onStartShouldSetResponder={() => props.navigation.navigate('Subpage3')}>
          <View style={{height: 60}}>
            <Image style={{width: 60, height: 60, resizeMode: 'contain'}} source={require('./src/images/i3.png')}/>
            </View>
            <View style={{height: 20, marginTop: 10 }}>
            <Text style={styles.box_title}>{lang_to.main_title3}</Text>
          </View>
        </View>
  
        <View style={[styles.box1, { marginRight: 15 }]} onStartShouldSetResponder={() => props.navigation.navigate('Subpage4')}>
          <View style={{height: 60}}>
            <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}} source={require('./src/images/i4.png')}/>         
            </View>
            <View style={{height: 20, marginTop: 10 }}>
            <Text style={styles.box_title}>{lang_to.main_title4}</Text>
          </View>
        </View>
  
        <View style={[styles.box1]} onStartShouldSetResponder={() =>{ props.navigation.navigate('Subpage5'); }}>
          <View style={{height:60}}>
            <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}} source={require('./src/images/i5.png')}/>
            </View>
            <View style={{height: 20, marginTop: 10 }}>
            <Text style={styles.box_title}>{lang_to.main_title5}</Text>
          </View>
        </View>
      </View>
  
      <View style={{flex:0.5}} />
      </Content>
      </Container>
      </ImageBackground>
    );

  }

    const [mt_idx, set_mt_idx] = useState();
    const [mt_status, set_mt_status] = useState();

    async function getInstanceId(props) {
        const id = await iid().get();
        const token = await firebase.iid().getToken();

        if(token) {
            Axios.post('http://dmonster1270.cafe24.com/bnu_get_token.php', {
                instance_id_t: id,
                token_t: token,
            })
            .then(function (response) {
                props.set_mt_idx(response.data.mt_idx);
                props.set_mt_status(response.data.mt_status);
            });
        }
    }
    getInstanceId({set_mt_idx, set_mt_status});


  const [lang, setLang] = useState('kor');

  let lang_to;
  if(lang === 'kor'){
    lang_to = ConfigData.kor;
  } else{
    lang_to = ConfigData.eng;
  }


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
  
  function Subpage3({}) {
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
  
  function Subpage4(props) {
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

  function InqScreen({}) {
    return (
      <View style={{padding: 20}}>

          <Text style={{ fontSize: 18, fontWeight: "bold"}}>{lang_to.sub_page5_t1}</Text>
          <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10}}>{lang_to.sub_page5_t1_t1}</Text>
          <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10}}>{lang_to.sub_page5_t1_t2}</Text>

          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop:30}}>{lang_to.sub_page4_t1}</Text>

          <View style={{ marginTop: 15 }}>
              <BtnFill title={lang_to.sub_page4_b1} style={{ padding: 10, height: 'auto', width: 'auto' }} onPress={() => Linking.openURL('https://dorm.pusan.ac.kr/')} />
              <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10 }}>{lang_to.sub_page4_b1_t}</Text>
          </View>
          
          <View style={{ marginTop: 15 }}>
              <BtnFill title={lang_to.sub_page4_b2} style={{ padding: 10, height: 'auto', width: 'auto' }} onPress={() => Linking.openURL('https://dorm.pusan.ac.kr/')} />
              <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10 }}>{lang_to.sub_page4_b2_t}</Text>
          </View>

          <View style={{ marginTop: 15 }}>
              <BtnFill title={lang_to.sub_page4_b3} style={{ padding: 10, height: 'auto', width: 'auto' }} onPress={() => Linking.openURL('tel:0515107827')} />
              <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10 }}>{lang_to.sub_page4_b3_t}</Text>
          </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="MainPage" options={{headerShown: false, title: ''}} component={MainPage} />
        <Stack.Screen name="Subpage1" options={{ title: lang_to.main_title1 }} component={Subpage1}/>
        <Stack.Screen name="Subpage2" options={{ title: lang_to.main_title2 }} component={Subpage2} />
        <Stack.Screen name="Subpage3" options={{ title: lang_to.main_title3 }} component={Subpage3} />
        <Stack.Screen name="Subpage4" options={{ title: lang_to.main_title4 }} component={Subpage4} />
        <Stack.Screen name="Subpage5" options={{ title: lang_to.main_title5 }} component={InqScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  box1: {
      flex:1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 200, backgroundColor: '#fefefe', borderRadius: 12
  },
  box_title: {
      fontWeight: 'bold', fontSize: 16, color: '#333333'
  }
});

export default App;
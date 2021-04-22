import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking} from 'react-native'
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {HomeScreen} from '../App'

const [lang, setLang] = useState('kor');

function EngScreen({navigation}){
  return (
    <ImageBackground style={styles.bgImg} source={require('./images/bg.jpg')}>
    <View style={styles.container}>
    {lang=='kor' ? (
          <View style={styles.transBt}>
          <TouchableOpacity style={styles.koBt}  onPress={()=>setLang('kor')} >
            <Text style={styles.koTx}>한국어</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.enBt} onPress={()=>setLang('eng')}>
            <Text style={styles.enTx}>ENG</Text>
          </TouchableOpacity>
          </View>
      ) : (
        <View style={styles.transBt}>
        <TouchableOpacity style={styles.koBt}  onPress={()=>setLang('kor')} >
          <Text style={styles.koTx}>한국어</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.enBt} onPress={()=>setLang('eng')}>
          <Text style={styles.enTx}>ENG</Text>
        </TouchableOpacity>
        </View>
      )}
      
      
      <View style= {styles.logo}>
          <Image style={styles.logoImg}
            source={require('./images/logo.png')}>
          </Image>

          <View style = {styles.txCol}>
          <Text style= {styles.logoTx1}>부산대학교 대학생활원</Text>
          <Text style= {styles.logoTx2}>PUSAN NATIONAL UNIVERSITY DORMITORY</Text>
          </View>
      </View>

    <View Style={styles.mainMenu}>
      <View style={styles.upMenu}>
        <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401');}}>
          <View style={styles.upMenuLeft}>
            <Image style={styles.logoImg}
              source={require('./images/i1.png')}>
            </Image>
            <Text style={styles.menuTx}>Notifications</Text>
          </View>             
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403');}}>
          <View style={styles.upMenuRight}>
            <Image style={styles.logoImg}
              source={require('./images/i2.png')}>
            </Image>
            <Text style={styles.menuTx}>Menu</Text>
          </View>
        </TouchableOpacity>
      </View>
          

    <View style={styles.downMenu}>
      <TouchableOpacity onPress={() => {Linking.openURL('http://dorm.pusan.ac.kr/dorm/bbs/list01/20000601');}}>
        <View style={styles.downMenu1}>
          <Image style={styles.logoImg}
            source={require('./images/i3.png')}>
          </Image>
          <Text style={styles.menuTx}>Notice</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401');}}>
        <View style={styles.downMenu2}>
          <Image style={styles.logoImg}
            source={require('./images/i4.png')}>
          </Image>
          <Text style={styles.menuTx}>DormitoryRule</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/');}}>
        <View style={styles.downMenu3}>
          <Image style={styles.logoImg}
            source={require('./images/i5.png')}>
          </Image>
          <Text style={styles.menuTx}>이용문의</Text>
        </View>
      </TouchableOpacity>

    </View>
    </View>
    </View>
  </ImageBackground>
  )
}
/*
function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}*/

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      if () {
        <Stack.Screen name="Eng" component={EngScreen} options={{headerShown: false}} />
        
      }
    </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  //한/영
  transBt: {
    marginLeft: 272,
    marginTop: 8,
    width:130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  koBt: {
    width: 60,
    backgroundColor: 'white',
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom:8,
    paddingLeft:15,
    paddingRight:15,
    borderRadius: 8
  },
  enBt: {
    width: 60,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom:8,
    paddingLeft:15,
    paddingRight:15,
    borderRadius: 8,
  },
  koTx:{
    fontSize: 10,
    color: 'black',
    textAlign: 'center'
  },
  enTx:{
    fontSize: 10,
    color: 'white',
    textAlign: 'center'
  },
  //로고
  logo:{
    marginTop: 40,
    marginBottom:40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  logoTx1: {
    marginLeft: 8,
    fontSize: 24,
    color: 'white',
  },
  logoTx2: {
    marginLeft: 8,
    fontSize: 12,
    color: 'white',
  },

  // 버튼들
  mainMenu: {
    flexDirection: 'row',
  },
  upMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  upMenuLeft: {
    paddingTop: 50,
    paddingBottom:50,
    paddingLeft:65,
    paddingRight:65,
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  upMenuRight: {
    paddingTop: 50,
    paddingBottom:50,
    paddingLeft:65,
    paddingRight:65,
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  menuTx: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },

  downMenu:{
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  downMenu1:{
    paddingTop: 50,
    paddingBottom:50,
    paddingLeft:30,
    paddingRight:30,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  downMenu2:{
    paddingTop: 50,
    paddingBottom:50,
    paddingLeft:30,
    paddingRight:30,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  downMenu3:{
    paddingTop: 50,
    paddingBottom:50,
    paddingLeft:30,
    paddingRight:30,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  }
});
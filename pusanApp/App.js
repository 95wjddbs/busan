import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Linking} from 'react-native';
import SplashScreen from 'react-native-splash-screen'



/* 함수형컴포넌트의 기본값 = function 변수명(props){ return 내용{props.name} } 
   클래스형 컴포넌트 기본값 = class 변수명 extends React.Component{ render() { return 내용 {this.props.name }}}
*/
// props 를 {} , string, 
function HomeScreen(props){

  // 스플래시 시도
  setTimeout(() => {
    SplashScreen.hide();
}, 1000);

  const [lang, setLang] = useState('kor');
  return (
    /* ImageBackground 컴포넌트는 Image 컴포넌트와 달리 자손을 가질 수 있음. 
       ImageBackground 컴포넌트를 배경화면으로 사용하고, 다양한 컴포넌트를 추가 가능 
       
       1.imageStyle 2.imageRef(내부 구성요소의 참조를 설정) 3.Style 
       
       Image 컴포넌트는 자손을 가질 수 없다. 
       1. accessible bool(defalut false) = true이면 내게 필요한 요소.
       2. blurRadius */
    <ImageBackground style={styles.bgImg} source={require('./images/bg.jpg')}>
    <View style={styles.container}>

    {lang=='kor' ? (
          <View>
          <View style={styles.transBt}>
          <TouchableOpacity style={styles.koBt}  onPress={()=>setLang('kor')} >
            <Text style={styles.koTx}>한국어</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.enBt} onPress={()=>setLang('eng')}>
            <Text style={styles.enTx}>ENG</Text>
          </TouchableOpacity>
          </View>

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
          <View style={styles.LeftBox}>
            <View style={{alignItems:'center'}}>
            <Image style={styles.logoImg}
              source={require('./images/i1.png')}>
            </Image>
            </View>
            <Text style={styles.menuTx}>알림확인</Text>
          </View>             
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403');}}>
          <View style={styles.RightBox}>
            <Image style={styles.logoImg}
              source={require('./images/i2.png')}>
            </Image>
            <Text style={styles.menuTx}>식단안내</Text>
          </View>
        </TouchableOpacity>
      </View>
          
    <View style={styles.downMenu}>
      <TouchableOpacity onPress={() => {Linking.openURL('http://dorm.pusan.ac.kr/dorm/bbs/list01/20000601');}}>
        <View style={styles.downMenu1}>
          <Image style={styles.logoImg}
            source={require('./images/i3.png')}>
          </Image>
          <Text style={styles.menuTx}>공지사항</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401');}}>
        <View style={styles.downMenu2}>
          <Image style={styles.logoImg}
            source={require('./images/i4.png')}>
          </Image>
          <Text style={styles.menuTx}>원생수칙</Text>
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
      ) : (
      
      <View>
        <View style={styles.transBt}>
        <TouchableOpacity style={styles.enBt}  onPress={()=>setLang('kor')} >
          <Text style={styles.enTx}>한국어</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.koBt} onPress={()=>setLang('eng')}>
          <Text style={styles.koTx}>ENG</Text>
        </TouchableOpacity>
        </View>

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
          <View style={styles.LeftBox}>
            <Image style={styles.logoImg}
              source={require('./images/i1.png')}>
            </Image>
            <Text style={styles.menuTx}>Notifications</Text>
          </View>             
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403');}}>
          <View style={styles.RightBox}>
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
          <Text style={{fontSize: 16,fontWeight: 'bold',}}>Dormitory</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold',}}>Rule</Text>
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
      )}
    </View>
  </ImageBackground>
  )
}
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
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
    flex:1,
    resizeMode: 'cover'
  },
  //한/영
  transBt: {
    marginLeft: 266,
    marginTop: 8,
    width:136,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  koBt: {
    width: 65,
    backgroundColor: 'white',
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom:8,
    paddingLeft:15,
    paddingRight:15,
    borderRadius: 8
  },
  enBt: {
    width: 65,
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  LeftBox: {
    width: 180,
    height: 180,
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  RightBox: {
    width: 180,
    height: 180,
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuTx: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },

  downMenu:{
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  downMenu1:{
    width: 120,
    height: 180,
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  downMenu2:{
    width: 120,
    height: 180,
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  downMenu3:{
    width: 120,
    height: 180,
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
/* eslint-disable */

import React from "react";
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Linking} from 'react-native';

function EngScreen({ navigation }) {
  return (
    <ImageBackground style={{flex:1}} source={require('../images/bg.jpg')}>

    <View style={{flex: 1}}>
      <View style={{marginTop: '2%', flexDirection:'row',justifyContent: 'space-around', width:120, marginLeft:'70%', alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate("KorScreen")} style={{borderWidth: 1, borderStyle: 'solid', borderColor: 'white', fontweight:'bold', borderRadius:8,
      paddingTop: 4, paddingBottom: 4, paddingRight: 10, paddingLeft: 10}}>
          <Text style={{fontSize: 12, color: 'white', textAlign: 'center'}}>한국어</Text>
        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => navigation.navigate("EngScreen")} style={{backgroundColor:'white', fontweight:'bold', borderRadius:8, 
        paddingTop: 4, paddingBottom: 4, paddingRight: 12, paddingLeft: 12}}>
          <Text style={{fontSize: 12, color: 'black', textAlign: 'center'}}>ENG</Text>
        </TouchableOpacity>
        </View>

        <View style={{marginTop: 40, marginBottom:40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
          <Image style={{width: 60, height: 60, resizeMode: 'contain',}}
            source={require('../images/logo.png')}>
          </Image>

          <View>
          <Text style={{ marginLeft: 8, fontSize: 24, color: 'white',}}>부산대학교 대학생활원</Text>
          <Text style={{marginLeft: 8, fontSize: 12, color: 'white',}}>PUSAN NATIONAL UNIVERSITY DORMITORY</Text>
          </View>
      </View>

      <View style={{flex:1}}>
      <View style={{flexDirection:'row',justifyContent:'space-around', marginTop:'5%', marginBottom:'5%'}}>
        <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401');}}>
          <View style={{width: 180, height: 180, borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}}
              source={require('../images/i1.png')}>
            </Image>
            <Text>Notifications</Text>
          </View>             
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403');}}>
          <View style={{width: 180, height: 180, borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}}
              source={require('../images/i2.png')}>
            </Image>
            <Text>Menu</Text>
          </View>
        </TouchableOpacity>
      </View>
          

    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <TouchableOpacity onPress={() => {Linking.openURL('http://dorm.pusan.ac.kr/dorm/bbs/list01/20000601');}}>
        <View style={{width: 120, height: 180, borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}}
            source={require('../images/i3.png')}>
          </Image>
          <Text>Notice</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401');}}>
        <View style={{width: 120, height: 180, borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}}
            source={require('../images/i4.png')}>
          </Image>
          <Text>Dormitory</Text>
          <Text>Rule</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/');}}>
        <View style={{width: 120, height: 180, borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}}
            source={require('../images/i5.png')}>
          </Image>
          <Text>Inquiries</Text>
        </View>
      </TouchableOpacity>
    </View>
    </View>
        </View>
    </ImageBackground>
 );
}
export default EngScreen;
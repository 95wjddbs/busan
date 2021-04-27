import React, { Fragment } from "react";
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Linking, Button, StatusBar} from 'react-native';

function 이용문의({}) {
    return (
      <ImageBackground style={{flex:1}} source={require('../images/bg2.png')}>
      <View style={{flex: 1, marginLeft:"auto", marginRight:"auto"}}>

        <View style={{flex: 1, marginTop:"5%", alignItems:"baseline", flexWrap:"wrap"}}>
          <Text style={{ color:"#000000", fontWeight:"bold", fontSize:16, marginBottom:"3%"}}>어플리케이션 안내 및 알림 수신 방법</Text>
          <Text style={{ color:"grey", marginLeft:"2%", fontSize:13}}>* 본 어플리케이션은 생활원 공지알림 수신을 위한 PUSH 전용</Text>
          <Text style={{ color:"grey", marginLeft:"2%", marginRight:"2%", fontSize:13}}>앱으로 생활원 알림을 수신하고자 하는 모든 분이 이용가능합니다.</Text>

          <Text style={{ color:"grey", marginTop:"3%", marginLeft:"2%", marginRight:"2%", fontSize:13}}>* Push 알림을 수신하고자 하는 이용자는 메인화면 알림확인 →</Text>
          <Text style={{ color:"grey", marginLeft:"2%", marginRight:"2%", fontSize:13}}>알림설정 → ON 선택 바랍니다.</Text>
        </View>

        <View style={{flex: 1, width:"90%", alignContent:"space-around"}}>
          <Text style={{ color:"#000000",fontWeight:"bold", fontSize:16, marginBottom:"3%"}}>이용방법 문의</Text>

          <View>
          <Button title={"원생 게시판 바로가기"} onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/');}}/>
          <Text style={{marginTop:"3%", color:"grey", fontSize:13, marginLeft:"2%", marginRight:"2%"}}>* 현재 생활원에 거주중인 원생이 이용가능한 게시판입니다.</Text>
          </View>
          
          <View style={{marginTop:"3%"}}>
          <Button title={"비원생 게시판 바로가기"} onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/');}}/>
          <Text style={{marginTop:"3%", color:"grey", fontSize:13, marginLeft:"2%", marginRight:"2%"}}>* 현재 생활원에 거주중이지 않은 비원생이 이용가능한 게시판입니다.</Text>
          </View>

          <View style={{marginTop:"3%"}}>
          <Button title={"생활원 전화문의"} onPress={()=> {Linking.openURL(`tel:051-510-7827`);}} />
          <Text style={{marginTop:"3%", color:"grey", fontSize:13, marginLeft:"2%", marginRight:"2%"}}>* 행정실 운영시간: 평일9시 ~ 18시 / 12시 ~ 13시 제외</Text>
          </View>
        </View>

        <View style={{flex: 2}}></View>
      </View>
      </ImageBackground>
    );
  }
  
  export default 이용문의;
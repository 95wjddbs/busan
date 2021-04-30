import React, { Fragment } from "react";
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Linking, Button, StatusBar} from 'react-native';
import { BtnFill, Btn_on, Btn_off } from './Custom_button';

function InqScreen({}) {
    return (
      <View style={{padding: 20}}>

          <Text style={{ fontSize: 18, fontWeight: "bold"}}>어플리케이션 안내 및 알림 수신 방법</Text>
          <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10}}>* 본 어플리케이션은 생활원 공지알림 수신을 위한 PUSH 전용 앱으로 생활원 알림을 수신하고자 하는 모든 분이 이용가능합니다.</Text>
          <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10}}>* Push 알림을 수신하고자 하는 이용자는 메인화면 알림확인 → 알림설정 → ON 선택 바랍니다.</Text>

          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop:30}}>이용방법 문의</Text>

          <View style={{ marginTop: 15 }}>
              <BtnFill title={"원생게시판 바로가기"} style={{ padding: 10, height: 'auto', width: 'auto' }} onPress={() => Linking.openURL('https://dorm.pusan.ac.kr/')} />
              <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10 }}>* 현재 생활원에 거주중인 원생이 이용가능한 게시판입니다.</Text>
          </View>
          
          <View style={{ marginTop: 15 }}>
              <BtnFill title={"비원생게시판 바로가기"} style={{ padding: 10, height: 'auto', width: 'auto' }} onPress={() => Linking.openURL('https://dorm.pusan.ac.kr/')} />
              <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10 }}>* 현재 생활원에 거주중이지 않은 비원생이 이용가능한 게시판입니다.</Text>
          </View>

          <View style={{ marginTop: 15 }}>
              <BtnFill title={"생활원 전화문의"} style={{ padding: 10, height: 'auto', width: 'auto' }} onPress={() => Linking.openURL('tel:0515107827')} />
              <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10 }}>* 행정실 운영시간 : 평일 9시 ~ 18시 / 12시 ~ 13시 제외</Text>
          </View>
      </View>
    );
  }
  
  export default InqScreen;
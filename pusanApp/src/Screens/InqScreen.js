import React from "react";
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Linking, Button} from 'react-native';

function InqScreen({ navigation }) {
    return (
      <ImageBackground style={{flex:1}} source={require('../images/bg.jpg')}>
      <View style={{flex: 1}}>

          <Text>어플리케이션 안내 및 알림 수신 방법</Text>
          <Text>* 본 어플리케이션은 생활원 공지알림 수신을 위한 PUSH 전용</Text>
          <Text>앱으로 생활원 알림을 수신하고자 하는 모든 분이 이용가능합니다.</Text>

          <Text>* Push 알림을 수신하고자 하는 이용자는 메인화면 알림확인</Text>
          <Text>알림설정 ON 선택 바랍니다.</Text>

          <Text>이용방법 문의</Text>
          <Button>원생 게시판 바로가기</Button>
          <Text>* 현재 생활원에 거주중인 원생이 이용가능한 게시판입니다.</Text>

          <Button>비원생 게시판 바로가기</Button>
          <Text>* 현재 생활원에 거주중이지 않은 비원생이 이용가능한 게시판입니다.</Text>

          <Button>생활원 전화문의</Button>
          <Text>* 행정실 운영시간: 평일9시 ~ 18시 / 12시 ~ 13시 제외</Text>
      </View>
      </ImageBackground>
    );
  }
  
  export default InqScreen;
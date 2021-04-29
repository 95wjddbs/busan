import React, { Fragment } from "react";
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Linking, Button, StatusBar} from 'react-native';
import { BtnFill, Btn_on, Btn_off } from './Custom_button';

function 이용문의({}) {
    return (
      <View style={{padding: 20}}>

          <Text style={{ fontSize: 18, fontWeight: "bold"}}>Application guide Ways of receiving notifications</Text>
          <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10}}>* This application is a PUSH app designed to provide notifications of the notice from dormitory, and is available for anyone who would like to receive notifications from dormitory.</Text>
          <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10}}>* Those who want to receive push notifications tap Settings on the main page -> Push settings -> tap Push On</Text>

          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop:30}}>Ways of making inquiries</Text>

          <View style={{ marginTop: 15 }}>
              <BtnFill title={"Shortcut to Bulletin board for Dorm students"} style={{ padding: 10, height: 'auto', width: 'auto' }} onPress={() => Linking.openURL('https://dorm.pusan.ac.kr/')} />
              <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10 }}>* * This bulletin board is available for students who are currently living in the dormitory.</Text>
          </View>
          
          <View style={{ marginTop: 15 }}>
              <BtnFill title={"Shortcut to Bulletin board for Non-dorm students"} style={{ padding: 10, height: 'auto', width: 'auto' }} onPress={() => Linking.openURL('https://dorm.pusan.ac.kr/')} />
              <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10 }}>* This bulletin board is available for students who are not living in the dormitory.</Text>
          </View>

          <View style={{ marginTop: 15 }}>
              <BtnFill title={"Dormitory telephone inquiries"} style={{ padding: 10, height: 'auto', width: 'auto' }} onPress={() => Linking.openURL('tel:0515107827')} />
              <Text style={{ fontSize: 13, color: "#666666", paddingLeft: 10, paddingTop: 10 }}>* Administration office’s Working hours: 09:00~18:00 on Weekdays / Except 12:00~13:00</Text>
          </View>
      </View>
    );
  }
  
  export default 이용문의;
import React, { Fragment } from "react";
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Linking, Button, StatusBar} from 'react-native';

function Inquiries({}) {
    return (
      <ImageBackground style={{flex:1}} source={require('../images/bg2.png')}>
      <View style={{flex: 1, marginLeft:"auto", marginRight:"auto", padding:"5%"}}>

        <View style={{flex: 1, alignItems:"baseline"}}>
          <Text style={{ color:"#000000", fontWeight:"bold", fontSize:16, marginBottom:"3%"}}>Application guide Ways of receiving notifications</Text>
          <Text style={{ color:"grey", marginLeft:"1%", fontSize:13}}>* This application is a PUSH app designed to provide notifications of the notice from dormitory, and is available for anyone who would like to receive notifications from dormitory.</Text>

          <Text style={{ color:"grey", marginTop:"3%", marginLeft:"1%", marginRight:"1%", fontSize:13}}>* Those who want to receive push notifications tap Settings on the main page - Push settings - tap Push On</Text>
        </View>

        <View style={{flex: 1, width:"100%" , alignContent:"space-around", marginTop:"5%"}}>
          <Text style={{ color:"#000000",fontWeight:"bold", fontSize:16, marginBottom:"3%"}}>Ways of making inquiries</Text>

          <View>
          <Button title={"Shortcut to Bulletin board for Dorm students"} onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/');}}/>
          <Text style={{marginTop:"3%", color:"grey", fontSize:13, marginLeft:"1%", marginRight:"1%"}}>* This bulletin board is available for students who are currently living in the dormitory.</Text>
          </View>
          
          <View style={{marginTop:"3%"}}>
          <Button title={"Shortcut to Bulletin board for Non-dorm students"} onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/');}}/>
          <Text style={{marginTop:"3%", color:"grey", fontSize:13, marginLeft:"1%", marginRight:"1%"}}>* This bulletin board is available for students who are not living in the dormitory.</Text>
          </View>

          <View style={{marginTop:"3%"}}>
          <Button title={"Dormitory telephone inquiries"} onPress={()=> {Linking.openURL(`tel:051-510-7827`);}} />
          <Text style={{marginTop:"3%", color:"grey", fontSize:13, marginLeft:"1%", marginRight:"1%"}}>* Administration office’s Working hours: 09:00~18:00 on Weekdays / Except 12:00~13:00</Text>
          </View>
        </View>

        <View style={{flex: 2}}></View>
      </View>
      </ImageBackground>
    );
  }
  
  export default Inquiries;
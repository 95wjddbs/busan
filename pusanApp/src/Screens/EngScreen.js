/* eslint-disable */

import React from "react";
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity, Linking, Button} from 'react-native';
import { Container, Content, Text, Accordion } from "native-base";

function EngScreen({ navigation }) {
  return (
    <ImageBackground style={{flex:1}} source={require('../images/bg.jpg')}>

    <Container style={{ backgroundColor: null }}>
    <Content padder>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={() => navigation.navigate("KorScreen")} style={{borderWidth: 1, borderStyle: 'solid', borderColor: 'white', fontweight:'bold', borderRadius:8,
          paddingTop: 4, paddingBottom: 4, paddingRight: 10, paddingLeft: 10}} >
          <Text style={{fontSize: 12, color: 'white', textAlign: 'center'}}>한국어</Text>
        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => navigation.navigate("EngScreen")} style={{backgroundColor:'white', fontweight:'bold', borderRadius:8, 
          paddingTop: 4, paddingBottom: 4, paddingRight: 12, paddingLeft: 12, marginLeft:5}} >
          <Text style={{fontSize: 12, color: 'black', textAlign: 'center'}}>ENG</Text>
        </TouchableOpacity>
        </View>

        <View style={{flex: 1, padding: 30, justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{width: 300, height: 100, resizeMode: 'contain'}} source={require('../images/logo.png')}/>
          </View>

      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <View style={[styles.box1, { marginRight: 15 }]} onStartShouldSetResponder={() => navigation.navigate('Subpage1-1')}>
          <View style={{height: 60}}>
              <Image style={{width: 60, height: 60, resizeMode: 'contain'}} source={require('../images/i1.png')}/>
          </View>
            <View style={{height: 20, marginTop: 10 }}>
            <Text style={styles.box_title}>Notifications</Text>
          </View>             
        </View>

        <View style={styles.box1} onStartShouldSetResponder={() => navigation.navigate('Subpage2-1')}>
          <View style={{height: 60}}>
            <Image style={{width: 60, height: 60, resizeMode: 'contain'}} source={require('../images/i2.png')}/>
            </View>
            <View style={{height: 20, marginTop: 10 }}>
              <Text style={styles.box_title}>Menu</Text>
          </View>
        </View>
      </View>
          

    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
    <View style={[styles.box1, { marginRight: 15 }]} onStartShouldSetResponder={() => navigation.navigate('Subpage3-1')}>
        <View style={{height: 60}}>
          <Image style={{width: 60, height: 60, resizeMode: 'contain'}} source={require('../images/i3.png')}/>
          </View>
          <View style={{height: 20, marginTop: 10 }}>
          <Text style={styles.box_title}>Notice</Text>
        </View>
      </View>

      <View style={[styles.box1, { marginRight: 15 }]} onStartShouldSetResponder={() => navigation.navigate('Subpage4-1')}>
        <View style={{height: 60}}>
          <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}} source={require('../images/i4.png')}/>         
          </View>
          <View style={{height: 20, marginTop: 10 }}>
          <Text style={styles.box_title}>Dormitory</Text>
          <Text style={styles.box_title}>Rules</Text>
        </View>
      </View>

      <View style={[styles.box1]} onStartShouldSetResponder={() =>{ navigation.navigate('Subpage5-1'); }}>
        <View style={{height:60}}>
          <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}} source={require('../images/i5.png')}/>
          </View>
          <View style={{height: 20, marginTop: 10 }}>
          <Text style={styles.box_title}>Inquiries</Text>
        </View>
      </View>
    </View>

    <View style={{flex:0.5}} />
        </Content>
    </Container>
    </ImageBackground>
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

export default EngScreen;
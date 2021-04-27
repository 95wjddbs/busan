/* eslint-disable */
import React, { useEffect, useState } from "react";
import { View, Switch, StyleSheet, Text, SafeAreaView, FlatList, ActivityIndicator, Dimensions, Linking, toggleSwitch } from "react-native";
import Axios from 'axios';
import { Container, Header, Content, Accordion, Icon } from "native-base";
import { Btn_on, Btn_off } from './Custom_button';


function 알림확인({ }) {
    const [toggle, setToggle] = useState(false);

    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between', margin:'1%'}}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>
                    알림 설정
                </Text>
                <Switch
                    trackColor={{false: 'white', true: '#D1E8CF'}}
                    thumbColor={{false: '#000000', true: '#9CD9C7'}}
                    onValueChange={(value) => setToggle(value)}
                    value={toggle} />
            </View>

            <View style={{margin:'1%'}}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>알림 내역</Text>
            </View>
        </View>
  );
};

export default 알림확인;
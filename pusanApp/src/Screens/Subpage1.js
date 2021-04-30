/* eslint-disable */
import React, { useEffect, useState } from "react";
import { View, Switch, StyleSheet, Text, SafeAreaView, FlatList, ActivityIndicator, Dimensions, Linking, toggleSwitch } from "react-native";
import Axios from 'axios';
import { Container, Header, Content, Accordion, Icon } from "native-base";


function 알림확인({props}) {
    const [toggle, setToggle] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        isEnabled ? chg_notice_setting('N') : chg_notice_setting('Y')
    }
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
/* eslint-disable */
import React, { useEffect, useState } from "react";
import { View, Switch, StyleSheet, Text, SafeAreaView, FlatList, ActivityIndicator, Dimensions, Linking, toggleSwitch } from "react-native";
import Axios from 'axios';
import { Container, Header, Content, Accordion, Icon } from "native-base";


function 알림확인({props}) {
    const mt_idx = props.route.params.mt_idx;
    const [toggle, setToggle] = useState(false);

    const [isOn, set_isOn] = useState(true);
    const [isEnabled, setIsEnabled] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const [data_movie, setData] = useState([]);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        isEnabled ? chg_notice_setting('N') : chg_notice_setting('Y')
    }

    useEffect(() => {
        getMoviesFromApi();
    }, []);

    function getMoviesFromApi() {
        Axios.post('http://dmonster1270.cafe24.com/bnu_notice_json.php', {
            pg: '1',
            mt_idx: mt_idx,
        })
        .then(function (response) {
            //console.log(response);
            setData(response.data.list_data);
            response.data.mt_status=='Y' ? setIsEnabled(true) : setIsEnabled(false)
            set_isOn(false)
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => setLoading(false));
    }

    function chg_notice_setting(props) {
        Axios.post('http://dmonster1270.cafe24.com/bnu_push_update.php', {
            mt_idx: mt_idx,
            mt_status: props,
        })
        .then(function (response) {
            //console.log(response.data.result);
            //setIsEnabled(response.data.result)
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => setLoading(false));
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
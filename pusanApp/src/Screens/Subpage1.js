/* eslint-disable */
import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { View, Switch, StyleSheet, Text, SafeAreaView, FlatList, ActivityIndicator, Dimensions, Linking } from "react-native";
import { Container, Header, Content, Accordion, Icon } from "native-base";
import { WebView } from 'react-native-webview';
import 'react-native-get-random-values';

function Subpage1(props) {
    const lang_to = props.route.params.lang_to;
    const mt_idx = props.route.params.mt_idx;
    
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
            mt_idx: mt_idx
        })
        .then(function (response) {
            setData(response.data.list_data);
            response.data.mt_status=='Y' ? setIsEnabled(true) : setIsEnabled(false)
            set_isOn(false)
        })
        .catch(err => {console.log(err)})
        .finally(() => {setLoading(false)})
    }

    function chg_notice_setting(props) {
        Axios.post('http://dmonster1270.cafe24.com/bnu_push_update.php', {
            mt_idx: mt_idx,
            mt_status: props
        })
        .then(function (response) {
            setIsEnabled(response.data.result)
        })
        .catch(err => {console.log(err)})
        .finally(() => {setLoading(false)})
    }

    function Acc_rend_head(item, expanded) {
        return (
            <View style={{ flexDirection: "row", padding: 20, justifyContent: "space-between", alignItems: "center" , borderBottomWidth: 1, borderBottomColor: '#e6e6e6', }}>
                <Text style={{ fontWeight: "700" }}> {item.title} </Text>
                {expanded
                ? <Icon style={{ fontSize: 18 }} name="keyboard-arrow-up" type="MaterialIcons" />
                : <Icon style={{ fontSize: 18 }} name="keyboard-arrow-down" type="MaterialIcons" />}
            </View>
        );
    }

    function Acc_rend_content(item) {

        return (
            <View style={styles.accContent}>
                <Text style={styles.wdate}>{item.wdate}</Text>
                <WebView
                    originWhitelist={['*']}
                    source={{ html: item.content }}
                    style={{ width: '100%', height: 400 }}
                    onShouldStartLoadWithRequest={event => {
                        if (event.url.slice(0,4) === 'http') {
                            Linking.openURL(event.url)
                            return false
                        }
                        return true
                    }}
                />
            </View>
        );
    }

    if(isOn) {
        return (
            <View style={styles.container}>
                 <View style={{ paddingLeft: 60, paddingRight: 60, paddingTop: 60 }}>
                     <View style={{ margin: 30 }}>
                         <ActivityIndicator size="large" color="#0000ff" />
                     </View>
                 </View>
            </View>
        );
    } else {
       return (
      <View style={styles.container}>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <View style={{flex:1, flexDirection: 'row', height: 25, justifyContent: 'flex-start'}}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>{lang_to.sub_page1_t1}</Text>
              </View>
                <Switch
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
          </View>

            <View style={{ paddingTop:20, paddingBottom:10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{lang_to.sub_page1_t2}</Text>
            </View>

          <View style={{ flex: 1 }}>
            <SafeAreaView>
              {isLoading ? <ActivityIndicator/> : (
                  <Accordion dataArray={data_movie} expanded={[]}
                  renderHeader={Acc_rend_head} renderContent={Acc_rend_content} style={{border:0}} />
                  
              )}
            </SafeAreaView>
          </View>
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  accContent: {
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    paddingTop: 8,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#ffffff'
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginVertical: 8,
  },
  title: {
    fontSize:13,
    paddingBottom: 10,
    fontWeight: '700'
  },
  wdate: {
    fontSize:11,
    paddingBottom: 5,
    textAlign: 'left',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    marginVertical: 10,
    textAlign: 'right',
  },
  content: {
    fontSize:14
  }
});

export default Subpage1;
/* eslint-disable */

import React from "react";
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Linking, Button} from 'react-native';

function KorScreen({ navigation }) {
  return (
    <ImageBackground style={{flex:1}} source={require('../images/bg.jpg')}>

    <View style={{flex:1}}>
      <View style={{flex:0.2, flexDirection:'row',justifyContent: 'space-around', width:'30%', marginLeft:'68%', alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate("KorScreen")} style={{backgroundColor:'white', fontweight:'bold', borderRadius:8, 
          paddingTop: 4, paddingBottom: 4, paddingRight: 10, paddingLeft: 10}}>
          <Text style={{fontSize: 12, color: 'black', textAlign: 'center'}}>한국어</Text>
        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => navigation.navigate("EngScreen")} style={{borderWidth: 1, borderStyle: 'solid', borderColor: 'white', fontweight:'bold', borderRadius:8,
          paddingTop: 4, paddingBottom: 4, paddingRight: 12, paddingLeft: 12}}>
          <Text style={{fontSize: 12, color: 'white', textAlign: 'center'}}>ENG</Text>
        </TouchableOpacity>
        </View>

        <View style={{flex:0.2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
          <Image style={{width: 60, height: 60, resizeMode: 'contain',}}
            source={require('../images/logo.png')}>
          </Image>

          <View>
          <Text style={{ marginLeft: 8, fontSize: 24, color: 'white',}}>부산대학교 대학생활원</Text>
          <Text style={{marginLeft: 8, fontSize: 12, color: 'white',}}>PUSAN NATIONAL UNIVERSITY DORMITORY</Text>
          </View>
      </View>

      <View style={{flex:2}}>
      <View style={{flexDirection:'row',justifyContent:'space-around', marginTop:'5%', marginBottom:'5%', flex:1}}>
        <TouchableOpacity onPress={() =>{ navigation.navigate('알림확인'); }}>
          <View style={{flex:1, borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', paddingLeft:'15%',paddingRight:'15%'}}>
            <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}}
              source={require('../images/i1.png')}>
            </Image>
            <Text>알림확인</Text>
          </View>             
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403');}}>
          <View style={{flex:1, borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', paddingLeft:'15%',paddingRight:'15%'}}>
            <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}}
              source={require('../images/i2.png')}>
            </Image>
            <Text>식단안내</Text>
          </View>
        </TouchableOpacity>
      </View>
          

    <View style={{flex:1, flexDirection:'row',justifyContent:'space-around'}}>
      <TouchableOpacity onPress={() => {Linking.openURL('http://dorm.pusan.ac.kr/dorm/bbs/list01/20000601');}}>
        <View style={{flex:1, borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', paddingLeft:'7.5%',paddingRight:'7.5%'}}>
          <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}}
            source={require('../images/i3.png')}>
          </Image>
          <Text>공지사항</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401');}}>
        <View style={{flex:1, borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', paddingLeft:'7.5%',paddingRight:'7.5%'}}>
          <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}}
            source={require('../images/i4.png')}>
          </Image>
          <Text>원생수칙</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>{ navigation.navigate('이용문의'); }}>
        <View style={{flex:1, flexDirection:'column', borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', paddingLeft:'7.5%',paddingRight:'7.5%'}}>
          <Image style={{width: 60, height: 60, resizeMode: 'contain', marginBottom:10}}
            source={require('../images/i5.png')}>
          </Image>
          <Text>이용문의</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style={{flex:0.5}} />
    </View>
        </View>
    </ImageBackground>
  );
  
}

export default KorScreen;



          /* React는 데이터 전달방향이 부모 -> 자식임
        그래서 자식컴포넌트가 필요로 하는 데이터는 부모 컴포넌트에서 자식 컴포넌트의 props에 담아 전달
        이를 통해 자식 컴포넌트는 부모로부터 props를 전달받아 사용 가능.
        하지만 props는 읽기전용이기 때문에 데이터 변경 불가능.

        이를 해결하기 위해 state에서 변경된 데이터를 관리함.
        컴포 <=> 컴포 / 사용자 <=> 컴포 사이에서 상호작용 하며 값을 바꿀 수 있고
        데이터가 변경된 컴포넌트와 그 아래 자식컴포넌트는 리랜더링 하여 사용자에게 바뀐 상태 제공
        */

        /* 스테이트 초기화 방법
        class Drink extends React.Component{
        ** constructor(props:any){ **
        **   super(props);         **
            this.state={
              name: 'coke',                      => 여기서 스테이트는 name, price, quantity이고 각각 디폴트 값이 정해져있음
              price: 1000,                       => 그리고 **로 싸여져있는 생성자는 생략이 가능함.
              quantity: 1
            };
          };
        }
        */

        /* 함수형컴포넌트의 기본값
              import React from 'react';
              import './App.css';

              function App() {
                const name = 'react';
                return <div className = "react"> {name} </div>
              }

              export default App;


          클래스형 컴포넌트 기본값
              import React, {Component} from 'react';

              class App extends Component {
              render() {
                const name = 'react';
                return <div className="react">{name}</div>
              }
            }

        export default App;
        */


        /* props
        props는 컴포넌트의 속성을 설정할 때 사용하는 요소임, props는 읽기 전용으로 수정 불가능함 (수정은 state가 가능)
          클래스형 컴포넌트는 prop를 this.props로 불러와서 사용
          class MyComponent extends Component {
            render(){
            const {name, favoriteNumber, children} = this.porps;
            return(
              <view>
                <text> 안녕하세요, 제 이름은 {name} 입니다. </text>
                  <text> children 값은 {children} 입니다. </text>
                  <text> 제가 좋아하는 숫자는 {favoriteNumber} 입니다. </text>
              </view>
            );
          }
          }

          함수형 컴포넌트는 props를 불러올 필요 없이 바로 호출 가능.
          const MyComponent = ({name, children}) => {
            return (
              <view>
                  <text>안녕하세요 제 이름은 {name}입니다.</text>
                    <text>children 값은 {children}입니다.</text>
                </view>
            )
        } */


          /* useState 사용
            const [lang, setLang] = useState('kor'); 에서
            lang은 현재 상태
            setLang은 이 상태를 바꾸기 위한 함수명
            kor은 바뀌는 상태의 함수명을 뜻함 */

      /* ImageBackground 컴포넌트는 Image 컴포넌트와 달리 자손을 가질 수 있음. 
         ImageBackground 컴포넌트를 배경화면으로 사용하고, 다양한 컴포넌트를 추가 가능 
         
         Image 컴포넌트는 자손을 가질 수 없다. 
         1. accessible bool(defalut false) = true이면 내게 필요한 요소.
         2. blurRadius(number) = 주변 블러값
         3. resizeMode cover = 뷰의 해당 치수와 같거나 크도록 조정, contain 뷰의 해당 치수와 같거나 작도록 조정, repeat 이미지 반복, center 이미지의 시작점을 중앙
         4. source = uri(string), require('경로') 
         5. style = style={{ 변경할 내용 }} or style={styles.클래스 명} */

  
        /* View  UI 구축을 위한 가장 기본적인 요소들을 지원하는 컴포넌트
        View는 다른 View 내부에 중첩 가능하고, 모든 유형의 자식을 가질 수 있음 */

                
              /* upMenu 클래스 안에 LeftBox를 눌르면 Linking.openURL('')을 통해 ''안에 링크로 이동 시킬 수 있음
              Linking의 매서드로는 OpenURL('string') => 링크 제공
              GetInitialURL('string') => 앱 링크에 의해 앱이 시작되면 제공 링크
          */
                
  
  
           /*
            stack = 기존의 화면 위로 새로운 화면이 덮이도록 하는 플러그인
            export default KorScreen;
            
            css에서 사용하는 layout props
            alignContent: 'center','stretch', 'space-between', 'space-around', 'space-eevenly'
            각각 가운데정렬, 양끝까지 늘리기, 양끝에 여백없이 균일하게 배분하기, 양끝에 여백 포함하여 균일하게 배분하기, 양끝 여백 포함하여 모든 여백이 균일하게 됨
            
            align-self = 동등한 관계에 영향을 받지 않고 독립적으로 조절할 수 있게 해줌
            align-self: 'stretch', 'center', 'start', 'end'
            
            flex = 컨테이너를 플랙스 값에 비례하여 크기 조정 가능 양수를 기본적으로 사용하나, 0이면 유연x, 음수면 사이즈 부족시 줄어들음
            flexDirection: 'row', 'row-reverse', 'column', 'column-reverse'
            각각 가로정렬, 가로정렬 후 역순배열, 세로정렬, 세로정렬 후 역순배열 
            
            flex-wrap = 자식 콘텐츠가 부모 컨텐츠를 넘기는지 안넘기는지 판단
            flex-wrap: nowrap;, wrap;, wrap-reverse
            각각 부모요소를 넘기는 자식, 부모요소를 넘기지 않도록 배치, 부모요소를 넘기지 않도록 배치후 역순배열 
            
            justifyContent = 자식의 방향 정렬을 도와줌
            justifyContent: 'center', 'space-between', 'space-around', 'space-evenly'
            각각 가운데정렬, 양끝까지 늘리기, 양끝에 여백없이 균일하게 배분하기, 양끝에 여백 포함하여 균일하게 배분하기, 양끝 여백 포함하여 모든 여백이 균일하게 됨 
            
            overflow = 자식이 부모 요소를 넘치게 될 때 이를 설정할 수 있음
            overflow: 'visible', 'hidden', 'scroll', 'auto'
            각각 부모요소 넘쳐도 보이게 만듬, 넘치는 부분은 숨김, 넘치는 부분을 스크롤 할 수 있음(상하좌우 스크롤 둘다 생성), 넘치는 부분에 맞게만 스크롤 생성(상하좌우 판단)
            
            z-index = 레이아웃에 z값을 설정할 수 있음
            z-index: 'auto', '숫자'
            auto는 컨텐츠 순서에 맞춰서 z값을 자동으로 설정
            숫자는 더 높은 z값을 가진 컨텐츠가 맨 위에 자리하게끔 배치함 */
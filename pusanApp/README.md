

<img src="C:\Users\a\Desktop\Screenshot_1619753352.png" style="zoom:10%;" /><img src="C:\Users\a\Desktop\Screenshot_1619757246.png" style="zoom:10%;" /><img src="C:\Users\a\Desktop\Screenshot_1619758770.png" style="zoom:10%;" /><img src="C:\Users\a\Desktop\Screenshot_1619758777.png" style="zoom:10%;" /><img src="C:\Users\a\Desktop\Screenshot_1619758782.png" style="zoom:10%;" /><img src="C:\Users\a\Desktop\Screenshot_1619757983.png" style="zoom:10%;" />



- ## 부산대학교 대학생활원 클론 프로젝트

------





<img src="C:\Users\a\Desktop\files\app_icon.png" style="zoom:25%;" />

- ### 아이콘 이미지

  ./android/app/src/main/res/'mipmap-xxx' 폴더에 각각 아이콘 이미지 넣기 (1024 x 1024)



<img src="C:\Users\a\Desktop\Screenshot_1619753352.png" style="zoom: 25%;" />

- ### **스플래쉬 이미지**

  ./android/app/src/main/res/drawable 경로에 'drawble-xxx' 폴더에 각각 스플래쉬 이미지 넣기 

  (3000x3000 권장 /// 또는 핸드폰 사이즈에 맞춰서 이미지 넣기)

  ./android/app/src/main/res/values/**styles.xml** 에 아래 코드 추가

```react
<style name="SplashScreenTheme" parent="SplashScreen_SplashTheme">
        <item name="colorPrimaryDark">@color/splashprimary</item>
    </style>
```

​	./android/app/src/main/res/values/ 에 **colors-splash.xml** 파일 생성 및 아래 코드 추가

```react
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="splashprimary">#FFFFFF</color>
</resources>

```

​	./android/app/src/main/java/com/[프로젝트 파일명]/**MainActivity.java** 파일에 다음과 같이 추가

```react
package com.pusanapp;
import android.os.Bundle;  // 추가 부분
import org.devio.rn.splashscreen.SplashScreen; // 추가 부분
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {  //추가 부분
        SplashScreen.show(this, true);
        super.onCreate(savedInstanceState);
    }
...
  }
}

```

./android/app/src/main/res/layout/**launch_screen.xml** 파일에 다음과 같이 수정

```react
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <ImageView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:contentDescription="Splashscreen"
        android:scaleType="centerCrop"
        android:background="@color/splashprimary"
        android:src="@drawable/splashscreen"/>
</RelativeLayout>

```



프로젝트의 App.js에 해당 코드를 삽입 (x초 만큼 스플래쉬 화면을 보여주겠다.)

```react
const App = () => {
  SplashScreen.hide(1000 * X);
```



------



<img src="C:\Users\a\Desktop\Screenshot_1619757246.png" style="zoom:25%;" /><img src="C:\Users\a\Desktop\Screenshot_1619757743.png" style="zoom:25%;" />



- ### (App.js)

  App.js에는 Stack.Navigation만 추가하여 간결하게 정리 (해당 화면은 KorScreen.js)


  각각의 버튼의 페이지로 넘어가는 코드는 다음과 같음

  

```react
// Arrow function 활용 부분
const Subpage2 = () => {
  const [isConnected, setConnected] = useState(true);

  useEffect(() => {
      NetInfo.fetch()
      .then(state => { setConnected(state.isConnected) })
      .catch(err => console.log(err))
  });

  if(isConnected) {
      return (
          <WebView source={{uri: 'https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403'}} />
      );
  } else {
      return (
          <View style={{padding: 20}}>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: '#ff0000' }}>인터넷 연결이 되지 않고 있습니다.{"\n"}확인바랍니다.</Text>
          </View>
      );
  }
}

// 일반 function 활용 부분
function Subpage3({ navigation }) {
  const isconnet = true;

  useEffect(() => {
      NetInfo.fetch()
        .then(state => { setConnected(state.isconnet) })
        .catch(err => console.log(err))
      });

  if(isconnet) {
      return (
          <WebView source={{uri: 'http://dorm.pusan.ac.kr/dorm/bbs/list01/20000601'}} />
      );
  } else {
      return (
          <View style={{padding: 20}}>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: '#ff0000' }}>인터넷 연결이 되지 않고 있습니다.{"\n"}확인바랍니다.</Text>
          </View>
      );
  }   
}

// 본문 스택 부분
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="KorScreen">
        <Stack.Screen name="KorScreen" component={KorScreen} options={{headerShown: false}} />
        <Stack.Screen name="EngScreen" component={EngScreen} options={{headerShown: false}} />

        <Stack.Screen name="Subpage1" options={{ title: "알림확인" }} component={Subpage1}/>
        <Stack.Screen name="Subpage1-1" options={{ title: "Notification" }} component={Subpage1}/>

        <Stack.Screen name="Subpage2" options={{ title: "식단안내" }} component={Subpage2} />
        <Stack.Screen name="Subpage2-1" options={{ title: "Menu" }} component={Subpage2} />

        <Stack.Screen name="Subpage3" options={{ title: "공지사항" }} component={Subpage3} />
        <Stack.Screen name="Subpage3-1" options={{ title: "Notice" }} component={Subpage3} />

        <Stack.Screen name="Subpage4" options={{ title: "원생수칙" }} component={Subpage4} />
        <Stack.Screen name="Subpage4-1" options={{ title: "Dormitory Rules" }} component={Subpage4} />

        <Stack.Screen name="Subpage5" options={{ title: "이용문의" }} component={InqScreen}/>
        <Stack.Screen name="Subpage5-1" options={{ title: "Inquiries" }} component={Inq2Screen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
```



------



<img src="C:\Users\a\Desktop\Screenshot_1619757983.png" style="zoom:25%;" />



- ### InqScreen.js (subpage5)

  


  해당 페이지는 스택으로 컴포넌트가 생성되게 하였고, InqScreen.js라는 파일을 새로 만들어서 네비게이션을 활용함. 코드는 아래

```react
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
```


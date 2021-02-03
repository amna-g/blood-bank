
import React, { useState,state } from 'react'
import auth, { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
// import *as firebase from 'firebase'
// import {firebaseConfig} from '../Start/Config'
import { Container, Header, Content, Form, Item, Input,Button } from 'native-base';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    KeyboardAvoidingView,
    Image,
    TouchableHighlight,
    ActivityIndicator,

  
    FlatList

  
  } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
  import { block } from 'react-native-reanimated';


  // firebase.initializeApp(firebaseConfig);
  // const firebaseConfig = {
  //  apiKey: "AIzaSyAO05hXKvIF4Rh4vnqginnSuRjZl0qff68",
  //  authDomain: "blood-bank-app-d43fd.firebaseapp.com",
  //  databaseURL: "https://blood-bank-app-d43fd-default-rtdb.firebaseio.com",
  //  projectId: "blood-bank-app-d43fd",
  //  storageBucket: "blood-bank-app-d43fd.appspot.com",
  //  messagingSenderId: "725275574282",
  //  appId: "1:725275574282:web:435daad99103327e2adff3"
  // }


function Signin(props){
 const[email,setEmail]=useState("")
 const[password,setPassword]= useState("")
 
 const save_data=()=>{
let user={
  email,
  password,
 
}
// console.log("user==>",user)
 database().ref('/').child('users').push(user)
 setEmail("")
 setPassword("")

};

  return(
  

<Container>
        <Header />
        
        <Content>
       < Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-di8bAG0HWiP5NT9ucFbHZJgH25qvrE9JuQ&usqp=CAU  '}} 
        style={{width: 350, height: 200,resizeMode:'contain',marginTop:2}} />
        <KeyboardAvoidingView behavior="position">
          <Form>
        <Item>
              <Input value={email} onChangeText={(text)=>setEmail(text)} placeholder="EMAIL" />
            </Item>
            <Item last>
              <Input value={password} onChangeText={(text)=>setPassword(text)}  placeholder="Password" />
            </Item>
          </Form>
          </KeyboardAvoidingView>
          <View> 
          <TouchableOpacity onPress={save_data} >
            <Text  onPress={()=>props.navigation.navigate('Start')} style={{textAlign:'center',fontSize:45,backgroundColor:'pink',clor:'white',marginBottom:259}} > Signin</Text>
           </TouchableOpacity>
          </View>
       

       
        
        
        </Content>
       
        
     
      

      </Container>
  )
}
export default Signin;
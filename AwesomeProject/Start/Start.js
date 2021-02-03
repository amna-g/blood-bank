import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ImageBackground } from 'react-native'

function Start(Props){
    return (
      <>
<Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWjRTmeQzgTS8Z0hapfe-gZ901q6RymqDEg&usqp=CAU'}}
       style={{width: 400, height: 460}} />
{/* 
      <Text> START</Text> */}
      <Button onPress={()=>Props.navigation.navigate('Home')} title="start app"></Button>
  
      
      </>
    );
  };

  const style= StyleSheet.create({
      Button :{
          marginBottom: 10,

      }
  })
     
  export default Start;
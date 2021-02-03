

import React from 'react'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    FlatList

  
  } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import { TouchableOpacity } from 'react-native-gesture-handler';
  import { block } from 'react-native-reanimated';

 


  

function Home(Props){

    return(
        <View>
        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvpKxRZ8-EdR-LYN3UkuPthtWUoqjxobYdQ&usqp=CAU'}}
        style={{width: 350, height: 200,resizeMode:'contain',marginTop:2}} />
   <Text> BLOOD is a combination of plasma and cell that circulate through the entire body</Text>
 
   <Image source={{uri: 'https://www.oneblood.org/_resources/images/content/blood-components.jpg '}} 
        style={{width: 350, height: 200,resizeMode:'contain',marginTop:2}} />
   <TouchableOpacity onPress={()=>Props.navigation.navigate('BloodDetail')} title='click'>  
           <Text style={{textAlign:'center',fontSize:45,backgroundColor:'pink',clor:'white',marginTop:15}}  >READ</Text>
</TouchableOpacity>
   
   </View>
  

    )
}


export default Home;
 


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

 


  

function Next(Props){

    return(
        <View>
            <Text style={{textAlign:'center',fontSize:23,marginTop:10}}> BLOOD DONOR DETAILS</Text>
        <Image source={{uri: 'https://www.disabled-world.com/pics/1/compatible-blood-donors.png'}}
        style={{width: 350, height: 200,resizeMode:'contain',marginTop:2}} />
 
 
   <Image source={{uri: 'data:image/jpeg;base64,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 '}} 
        style={{width: 350, height: 200,resizeMode:'contain',marginTop:2}} />
   <TouchableOpacity onPress={()=>Props.navigation.navigate('Lastpage')} title='click'>  
           <Text style={{textAlign:'center',fontSize:45,backgroundColor:'pink',clor:'white',marginTop:15}}  >READ</Text>
</TouchableOpacity>
   
   </View>
  

    )
}


export default Next;
 


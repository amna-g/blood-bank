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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { block } from 'react-native-reanimated';

function Lastpage(Props){
    return(
<View>
<Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgC8KI5UIzPb7o93w4odnXbwf7tKBtLdyASA&usqp=CAU'}}
       style={{width: 350, height: 200,resizeMode:'contain',marginTop:2 }} />

<TouchableOpacity  title="click here">
         <Text  onPress={()=>Props.navigation.navigate('Register')}  style={{textAlign:'center',fontSize:33,backgroundColor:'pink',color:'black',marginTop:20}}>LOG OUT</Text></TouchableOpacity>

</View>
    )
}


export default Lastpage;
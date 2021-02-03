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

function Home(Props){
    return(
<View > 
<Image source={{uri: 'https://www.oneblood.org/_resources/images/content/blood-components.jpg '}} 
        style={{width: 350, height: 200,resizeMode:'contain',marginTop:2}} />
    <Text style={{color:'black',fontSize:20
}}>IF YOU WANT TO DONATE BLOOD THEN PLZ FILL FORM </Text>

<TouchableOpacity onPress={()=>Props.navigation.navigate('Login')} title="click here">
         <Text style={{textAlign:'center',fontSize:33,backgroundColor:'pink',color:'black',marginTop:20}}> REGISTERATION FORM</Text></TouchableOpacity>

    <Text style={{color:'black',fontSize:23,marginTop:10}}> and if you want to read documentation then click here</Text>
     <TouchableOpacity onPress={()=>Props.navigation.navigate('About')} title="click here">
         <Text style={{textAlign:'center',fontSize:33,backgroundColor:'pink',clor:'white',marginTop:20}}> click </Text></TouchableOpacity>
</View>
    )
}


export default Home;
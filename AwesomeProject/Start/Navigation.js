

import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../Start/Start';
import Home from '../Start/Home'
import About from '../Start/About'
import BloodDetail from '../Start/BloodDetail'
import Next from '../Start/Next'
import Login from '../Start/Login'
import Thankyou from '../Start/Thankyou'
import Signin from '../Start/Signin'
import Lastpage from '../Start/Lastpage'
import Register from '../Start/Register'



const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Sign" component={Signin} />
  
      <Stack.Screen name="Lastpage" component={Lastpage} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="BloodDetail" component={BloodDetail} />
      <Stack.Screen name="Next" component={Next} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Thankyou" component={Thankyou} />
      <Stack.Screen name="Register" component={Register} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
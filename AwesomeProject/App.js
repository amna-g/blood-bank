/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { ImageBackground } from 'react-native'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Start from './Start/Start'
import AppNavigation from './Start/Navigation'
import Home from './Start/Home';
const App = () => {
  return (


    <>
    {/* <Start/> */}
    <AppNavigation/>
    {/* <Home/>  */}
{/* <ImageBackground style={{width:"100%",height:"100%"}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWjRTmeQzgTS8Z0hapfe-gZ901q6RymqDEg&usqp=CAU"}}>
<Text style={{color:"white",fontSize:50,marginTop:200,alignItems:"center"}}> WELCOME TO BLOOD BANK </Text>

</ImageBackground>
    */}

      
    
    </>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;

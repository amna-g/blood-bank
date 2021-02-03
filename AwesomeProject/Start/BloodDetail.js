import React from 'react';
import { FlatList, StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
   item: {
    fontSize: 18,
    height: 44,
  },
});

const BloodDetail = (Props) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={[
          {key: 'A'},
          {key: 'B'},
          {key: 'AB'},
          {key: '0'},
         
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />




<Image source={{uri: 'data:image/jpeg;base64,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 '}} 
        style={{width: 350, height: 200,resizeMode:'contain',marginEnd:20}} />

 <TouchableOpacity onPress={()=>Props.navigation.navigate('Next')}><Text style={{textAlign:'center',fontSize:23,backgroundColor:'pink',clor:'white',marginTop:20,marginBottom:20}}> NEXT</Text></TouchableOpacity>

    
    </View>
  );
}

export default BloodDetail;
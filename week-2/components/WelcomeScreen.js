import React from 'react';
import { View,ImageBackground,Image,Text,Button,StyleSheet } from 'react-native';
import color from './color';

const WelcomeScreen = (props) => {
    
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/background.jpg')} blurRadius={2}  style={styles.image}>
     <Image style={styles.image1} source={require('../assets/logo-red.png')}></Image>
      <Text style={styles.text}>Sell What You Don't Need </Text>
      <View style={styles.button1}>
      <Button
        title={props.name}
        color={color.primary}
        
      />
      </View>
         <View style={styles.button2}>
         <Button
        title={props.name1}
        color={color.secondary}
        
      />
         </View>
          </ImageBackground>
         
         
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    },
  image: {
    flex: 1,
    alignItems:"center",
    justifyContent:"flex-start",
    
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop:1
           
  },
  image1:{
      width:100,
      height:100,
      marginTop:50
      },
   button1:{
    width:"90%",
    marginTop:"115%",
    borderRadius:4
   
    
  },
  button2:{
    width:"90%",
    marginTop:"5%", 
    
  },


});
export default WelcomeScreen;
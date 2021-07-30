import React from "react";
import { StyleSheet, Text, TouchableOpacity, View,Alert } from "react-native";
import colors from "../../config/color";
const Mybutton = ({text,onPress,color}) => {
  return (
    <TouchableOpacity
    style={[styles.button,{backgroundColor:colors[color]}]}
    onPress={()=>Alert.alert('login',[
      {text:'yes', onPress:()=>console.log('login successfully')},
      {text:'no',onPress:()=>console.log('login not successfully')}
    ])}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  
  button: {
    backgroundColor:color.primary,
    borderRadius:55,
    justifyContent:"center",
    alignItems:'center',
    padding:15,
    width:'90%',
    marginTop:50
  },
  text: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
});
export default Mybutton;


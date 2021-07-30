import React from 'react';
import { StyleSheet,TouchableOpacity,Text } from 'react-native';
import colors from '../../config/color';


const Mybutton = ({text,onPress,color,style}) => {
    return (
        <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  
    button: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 90,
      marginTop: 15,
    },
  });
export default Mybutton;
import React from 'react';
import { View,StyleSheet,Image } from 'react-native';
import Mytext from './Mytext';
import colors from '../../config/color';
const Mycard = ({title,subtitle,image}) => {
    return (
        <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Image source={image} style={styles.image} />
          <View style={styles.textContainer}>
            <Mytext text={title} />
            <Mytext text={subtitle} style={styles.text} />
          </View>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center"
     
    },
    image: {
        height: 135,
        width: 155
    },
    cardContainer: {
        backgroundColor: "#eee",
        borderRadius: 90,
        overflow: "hidden"
    },
    textContainer: {
        padding: 10,
        width: 155
    },
    text: {
      color: colors.secondary,
      marginTop: 5,
      fontWeight: "bold",
    },

  });


export default Mycard;
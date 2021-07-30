import React from 'react';
import { StyleSheet,Image, View, Text } from 'react-native';
import Mylistitem from '../app/Components/Mylistitem';
import color from '../config/color';

const Listdetailsscreen = () => {
    return (
        <View style={styles.container}>
             <View style={styles.card}>
                 <View style={{height: 470 ,width:400}}>
                 <Image
            source={require('../assets/jacket.jpg')}
            resizeMode='stretch'
            style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Red jacket for sale</Text>
                <Text style={[styles.text,{color:color['secondary']}]}>$100</Text>
            </View>
            </View>
                 </View>
          
           
            <Mylistitem
            image={require("../assets/chair.jpg")}
            title="Mosh Hamedani"
            subTitle=" 5 Listings"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
    },

    imageContainer: {
      flex: 1,
      borderWidth: 5,
    },
    image: {
        
      width: 400,
      height: 400,
      borderRadius:35,
      
    },
    text: {
      marginTop: 5,
      fontSize: 19,
      fontWeight: "bold",
      marginLeft:25
    },
    textContainer: {
      padding: 10,
      width:155
    },
  
    card:{
        backgroundColor: "#eee", 
        borderRadius: 35, 
        overflow:"hidden" ,
        marginTop:40
    }
   
  });

export default Listdetailsscreen;
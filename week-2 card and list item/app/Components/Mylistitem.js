import React from 'react';
import { View , Image ,StyleSheet } from 'react-native';
import Mytext from './Mytext';
import colors from '../../config/color';


const Mylistitem = ({image,title,subtitle}) => {
    return (
      
     <View style={styles.container}>
          <View style={styles.listItem}>
              <Image source={image} resizeMode="cover" style={styles.image}></Image>
                    <View style={styles.text}>
                      <Mytext text={title}/>
                      <Mytext text={subtitle} style={{ color: colors["gray"] ,fontSize:30 }} />
                    </View>
         </View>
      </View>
    
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "25%",
      height: "35%",
      borderRadius: 50,
    },
    text: {
      padding: 13,
      fontSize:40
    },
    listItem: {
      flexDirection: "row",
      width: "100%",
      height: "100%",
      alignItems: "center",
      padding: 1,
    },
  });
export default Mylistitem;
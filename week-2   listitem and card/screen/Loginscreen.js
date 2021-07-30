import React from 'react';
import { Button, View,StyleSheet } from 'react-native';
import Mybutton from '../app/components/Mybutton';
const Loginscreen = () => {
    return (
        <View style={styles.button}>
          <Mybutton text="login" color="primary"></Mybutton>
        
        </View>
    );
}
const styles = StyleSheet.create({
    button:{
        flex:1,
        justifyContent:"center",  
    }
})

export default Loginscreen;
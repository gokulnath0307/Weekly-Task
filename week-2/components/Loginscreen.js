import React from 'react';
import { Button, View,StyleSheet } from 'react-native';
import color from './color';
const Loginscreen = (props) => {
    return (
        <View style={styles.button}>
            <Button 
        title={props.name}
        color={color.primary}
       />
        
        </View>
    );
}
const styles = StyleSheet.create({
    button:{
        flex:1,
        justifyContent:"center", 
        width:"100%",
        height:"100%",
        borderRadius:7
        
    }
})

export default Loginscreen;
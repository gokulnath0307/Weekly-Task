import React from 'react';
import { View ,StyleSheet} from 'react-native';
import Mybutton from '../app/Components/Mybutton';


const Loginscreen = () => {
    return (
        <View>
            <Mybutton text="LOGIN" color='primary' style={styles.button}/>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 90,
       
      },
})
export default Loginscreen;
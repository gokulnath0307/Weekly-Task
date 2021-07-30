import React from 'react';
import { View ,StyleSheet,ImageBackground,Image,Text,} from 'react-native';
import Mybutton from '../app/Components/Mybutton';
import colors from '../config/color';
const Welcomescreen = () => {
    const login = () =>
    Alert.alert(
      'login',
      
      [
        {
          text: "Cancel",
          onPress: () => console.log("login not successfull"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("login successfull") }
      ]
    );
    const register = () =>
    Alert.alert(
      'login',
      
      [
        {
          text: "Cancel",
          onPress: () => console.log("login not successfull"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("login successfull") }
      ]
    );
    return (
        <View style={styles.container}>
      <ImageBackground
        blurRadius={3}
        source={require("../assets/background.jpg")}
        style={{ flex: 1, alignItems: "center", paddingTop: "40%" }}
      >
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo} 
          resizeMode="contain"
        />
        <Text style={styles.text}>Sell What you Don't need</Text>

        <Mybutton text="LOGIN" color='primary'onPress={login} style={styles.button} ></Mybutton>
        <Mybutton text='REGISTER' color='secondary' onPress={register} style={styles.button}></Mybutton>
      </ImageBackground>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logo: {
      width: 100,
      height: 100,
    },
    text: {
      marginTop: 10,
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 300,
    },
    buttonContainer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      top: "75%",
    },
    button: {
      color: "white",
      fontSize: 25,
      fontFamily: "sans-serif",
      fontWeight: "bold",
    },
  });

export default Welcomescreen;
import React from "react";
import { ImageBackground, StyleSheet, Image, Text, View, Alert } from "react-native";
import Mybutton from "../app/components/Mybutton";
export default function WelcomeScreen() {
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
        style={{ flex: 1, alignItems: "center", paddingTop: "30%" }}
      >
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo} 
          resizeMode="contain"
        />
        <Text style={styles.text}>Sell What you Don't need</Text>

        <Mybutton text="login" color='primary'onPress={login} ></Mybutton>
        <Mybutton text='register' color='secondary' onPress={register}></Mybutton>
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
});
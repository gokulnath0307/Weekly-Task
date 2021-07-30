import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mycard from './app/components/Mycard';
import Listdetails from './screen/Listdetails';
import Loginscreen from './screen/Loginscreen';
import WelcomeScreen from './screen/WelcomeScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen ></WelcomeScreen> */}
      {/* <Loginscreen ></Loginscreen> */}
    
     <Listdetails/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

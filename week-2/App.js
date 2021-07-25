import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loginscreen from './components/Loginscreen';
import WelcomeScreen from './components/WelcomeScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen  name="login" name1="register"></WelcomeScreen> */}
      <Loginscreen name="login"></Loginscreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

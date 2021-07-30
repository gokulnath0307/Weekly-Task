import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Listdetailsscreen from './screen/Listdetailsscreen';
import Loginscreen from './screen/Loginscreen';
import ViewScreen from './screen/ViewScreen';
import Welcomescreen from './screen/Welcomescreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcomescreen></Welcomescreen> */}
      <Loginscreen/>
      {/* <ViewScreen></ViewScreen> */}
      {/* <Listdetailsscreen></Listdetailsscreen> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});

import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import HelpSupport from './src/screens/HelpSupport';
import Languages from './src/screens/Languages';
import Safety from './src/screens/Safety';
import About from './src/screens/About';
import Settings from './src/screens/Settings';
import Preferences from './src/screens/Preferences';
const App = () => {
  return (
    <SafeAreaView style={styles.mainCont}>
    {/* <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer> */}
     <Preferences/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  mainCont:{
    flex:1,
    backgroundColor:"#EFA601"
  }
})
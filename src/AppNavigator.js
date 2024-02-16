import React from 'react';
import { StatusBar, StyleSheet, useWindowDimensions } from 'react-native';
import { createDrawerNavigator , DrawerItemList} from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation , DrawerActions} from '@react-navigation/native' 
import Home from './screens/Home';
import Login from './screens/Login';
import OtpVerificationL from './screens/OtpVerificationL';
import OtpVerificationS from './screens/OtpVerificationS';
import About from './screens/About';
import Favourites from './screens/Favourites';
import HelpSupport from './screens/HelpSupport';
import Languages from './screens/Languages';
import MyRides from './screens/MyRides';
import Safety from './screens/Safety';
import Settings from './screens/Settings';
import ShareApp from './screens/ShareApp';
import PaymentHistory from './screens/PaymentHistory';
import Logout from './screens/Logout';
const Drawer = createDrawerNavigator();
/**
 * TODO:- Temporarily using r-nav-stack instead of r-nav-native-stack cause of following issue:
 * https://github.com/react-navigation/react-navigation/issues/10941
 * Replace with r-nav-native-stack, once this is fixed.
 */
// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = () => {
<Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
  <Stack.Screen
    name="Home"
    component={Home}
  />
  <Stack.Screen
    name="Login"
    component={Login}
  />
  <Stack.Screen
    name="otps"
    component={OtpVerificationS}
  />
  <Stack.Screen
    name="otpl"
    component={OtpVerificationL}
  />
</Stack.Navigator> 
}

// const DrawerNavigator = () => {
//     return (
//       <Drawer.Navigator
  
//         drawerContent={
//           (props)=>{
//               return (
//                   <SafeAreaView>
//                       <View style={{
//                           height: 200,
//                           width: "100%",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           backgroundColor: "#fff"
//                       }}>
//                           <Image
//                             source={require("./assets/avatar.png")}
//                             style={{
//                               height: 100,
//                               width: 100,
//                               borderRadius: 50,
//                               marginBottom: 12
//                             }}
//                           />
//                           <Text style={{
//                               fontSize: 18,
//                               fontWeight: "bold",
//                               color: "#000",
//                               marginBottom: 6
//                           }}>Bandaru Aswith</Text>
//                           {/* <Text style={{
//                               fontSize: 16,
//                               color: COLORS.black
  
//                           }}>Product Designer</Text> */}
//                       </View>
//                       <DrawerItemList {...props} />
//                   </SafeAreaView>
//               )
//           }
//         }
//         screenOptions={{
//           drawerStyle: {
//             backgroundColor: "#fff",
//             width: 250,
//           },
//           headerStyle: {
//             backgroundColor: "#fff",
//           },
//           headerShown: false,
//           headerTintColor: "#000",
//           drawerLabelStyle: {
//             color: "#000",
//             fontSize: 14,
//             marginLeft: -10,
//           },
//         }}
//       >
        
//         <Drawer.Screen
//           name="MyRides"
//           options={{
//             drawerLabel: "My Rides",
//             title: "My Rides",
//             headerShadowVisible: false,
//             drawerIcon: () => (
//               <Ionicons name="gift-outline" size={24} color={"#000"} />
//             ),
//           }}
//           component={MyRides}
//         />
//         <Drawer.Screen
//           name="Favourites"
//           options={{
//             drawerLabel: "Favourites",
//             title: "Favourites",
//             headerShadowVisible: false,
//             drawerIcon: () => (
//               <Ionicons name="search-outline" size={24} color={"#000"} />
//             ),
//           }}
//           component={Favourites}
//         />
//         <Drawer.Screen
//           name="HelpSupport"
//           options={{
//             drawerLabel: "HelpSupport",
//             title: "HelpSupport",
//             headerShadowVisible: false,
//             drawerIcon: () => (
//               <Ionicons name="heart-outline" size={24} color={"#000"} />
//             ),
//           }}
//           component={HelpSupport}
//         />
//         <Drawer.Screen
//           name="Languages"
//           options={{
//             drawerLabel: "Languages",
//             title: "Languages",
//             headerShadowVisible: false,
//             drawerIcon: () => (
//               <Ionicons name="location-outline" size={24} color={"#000"} />
//             ),
//           }}
//           component={Languages}
//         />
//         <Drawer.Screen
//           name="Safety"
//           options={{
//             drawerLabel: "Safety",
//             title: "Safety",
//             headerShadowVisible: false,
//             drawerIcon: () => (
//               <AntDesign name="creditcard" size={24} color={"#000"} />
//             ),
//           }}
//           component={Safety}
//         />
//         <Drawer.Screen
//           name="PaymentHistory"
//           options={{
//             drawerLabel: "PaymentHistory",
//             title: "PaymentHistory",
//             headerShadowVisible: false,
//             drawerIcon: () => (
//               <Ionicons
//                 name="notifications-outline"
//                 size={24}
//                 color={"#000"}
//               />
//             ),
//           }}
//           component={PaymentHistory}
//         />
//         <Drawer.Screen
//           name="ShareApp"
//           options={{
//             drawerLabel: "ShareApp",
//             title: "ShareApp",
//             headerShadowVisible: false,
//             drawerIcon: () => (
//               <Feather name="help-circle" size={24} color={"#000"} />
//             ),
//           }}
//           component={ShareApp}
//         />
//         <Drawer.Screen
//           name="About"
//           options={{
//             drawerLabel: "About",
//             title: "About",
//             headerShadowVisible: false,
//             drawerIcon: () => (
//               <Feather name="help-circle" size={24} color={"#000"} />
//             ),
//           }}
//           component={About}
//         />
//         <Drawer.Screen
//           name="Settings"
//           options={{
//             drawerLabel: "Settings",
//             title: "Settings",
//             headerShadowVisible: false,
//             drawerIcon: () => (
//               <Feather name="help-circle" size={24} color={"#000"} />
//             ),
//           }}
//           component={Settings}
//         />
//         <Drawer.Screen
//           name="Logout"
//           options={{
//             drawerLabel: "Logout",
//             title: "Logout",
//             headerShadowVisible: false,
//             drawerIcon: () => (
//               <Feather name="help-circle" size={24} color={"#000"} />
//             ),
//           }}
//           component={Logout}
//         />
        
        
//       </Drawer.Navigator>
//     );
//   };

const AppNavigator = () => {
  return (
      <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name='MyRides' component={MyRides}/>
        <Drawer.Screen name= "Settings" component={Settings}/>
      </Drawer.Navigator>

  );
};
export default AppNavigator
const styles = StyleSheet.create({
  drawerSceneContainer: {
    elevation: 24,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
});
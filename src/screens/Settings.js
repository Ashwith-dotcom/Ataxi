import { Image, StyleSheet, Text, View , TouchableOpacity , Switch } from 'react-native'
import React , {useState} from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Entypo"
import Icon4 from "react-native-vector-icons/MaterialIcons"
const Settings = () => {
  const [isNotificationSwitchOn, setNotificationSwitchOn] = useState(false);

  const toggleSwitch = () => setNotificationSwitchOn(!isNotificationSwitchOn);
  return (
    <View style={styles.mainCont}>
      <View>
        <Icon name="arrow-back" size={26} color={"#000"}/>
      </View>
      <View>
        <Text style={{color:"#000" , fontWeight:"700" , fontSize:28 , marginTop:15}}>Settings</Text>
      </View>
      <View style={{padding:10}}>
        <Text style={{color:"#000" , fontSize:22 , fontWeight:"700"}}>Account</Text>
        <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , marginTop:15}}>
          <View style={{flexDirection:"row" , alignItems:"center"}}>
          <View style={{width:40 , height:40 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center" , borderRadius: 10 , marginRight:10}}>
          <Icon name={"person-circle-outline"} size={26} color={"#000"}/>
          </View>
          <View>
            <Text style={{color:"#000" , fontSize:16}}>Profile</Text>
          </View>
          </View>
          <View>
          <Icon4 name={"keyboard-arrow-right"} size={26} color={"#000"}/>

          </View>
          </View>
          <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , marginVertical:20}}>
          <View style={{flexDirection:"row" , alignItems:"center"}}>
          <View style={{width:40 , height:40 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center" , borderRadius: 10 , marginRight:10}}>
          <Icon1 name={"wallet"} size={26} color={"#000"}/>
          </View>
          <View>
            <Text style={{color:"#000" , fontSize:16}}>Payment</Text>
          </View>
          </View>
          <View>
          <Icon4 name={"keyboard-arrow-right"} size={26} color={"#000"}/>

          </View>
          </View>
          <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
          <View style={{flexDirection:"row" , alignItems:"center"}}>
          <View style={{width:40 , height:40 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center" , borderRadius: 10 , marginRight:10}}>
          <Icon2 name={"sound-mix"} size={26} color={"#000"}/>
          </View>
          <View>
            <Text style={{color:"#000" , fontSize:16}}>Preferences</Text>
          </View>
          </View>
          <View>
          <Icon4 name={"keyboard-arrow-right"} size={26} color={"#000"}/>

          </View>
          </View>
      </View>
        <View style={{padding:10}}>
     
          <Text style={{color:"#000" , fontSize:22 , fontWeight:"700"}}>Notifications</Text>
          <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , marginTop:15}}>
          <View style={{flexDirection:"row" , alignItems:"center"}}>
          <View style={{width:40 , height:40 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center" , borderRadius: 10 , marginRight:10}}>
            <Icon name={"notifications-outline"} size={26} color={"#000"}/>
          </View>
          <View>
            <Text style={{color:"#000" , fontSize:16}}>Allow notifications</Text>
          </View>
          </View>
          <View>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isNotificationSwitchOn ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isNotificationSwitchOn}
            />

          </View>
          </View>
        </View>
        <View  style={{padding:10}}>
        
          <Text style={{color:"#000" , fontSize:22 , fontWeight:"700"}}>Privacy and Sharing</Text>
          <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , marginTop:15}}>
          <View style={{flexDirection:"row" , alignItems:"center"}}>
          <View style={{width:40 , height:40 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center" , borderRadius: 10 , marginRight:10}}>
            <Icon name={"location-outline"} size={26} color={"#000"}/>
          </View>
          <View>
            <Text style={{color:"#000" , fontSize:16}}>Location sharing</Text>
          </View>
          </View>
          <View>
            <Icon4 name={"keyboard-arrow-right"} size={26} color={"#000"}/>

          </View>
          </View>
        </View>
        <View style={{padding:10}}>
       
          <Text style={{color:"#000" , fontSize:22 , fontWeight:"700"}}>App Settings</Text>
          <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center", marginTop:15}}>
          <View style={{flexDirection:"row" , alignItems:"center"}}>
          <View style={{width:40 , height:40 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center" , borderRadius: 10 , marginRight:10}}>
          <Icon4 name={"dark-mode"} size={26} color={"#000"}/>
          </View>
          <View>
            <Text style={{color:"#000" , fontSize:16}}>Dark mode</Text>
          </View>
          </View>
          <View>
           <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isNotificationSwitchOn ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isNotificationSwitchOn}
            />
          </View>
          </View>
          <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center", marginVertical:20}}>
          <View style={{flexDirection:"row" , alignItems:"center"}}>
          <View style={{width:40 , height:40 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center" , borderRadius: 10 , marginRight:10}}>
            <Icon4 name={"language"} size={26} color={"#000"}/>
          </View>
          <View>
            <Text style={{color:"#000" , fontSize:16}}>Languages</Text>
          </View>
          </View>
          <View>
            <Icon4 name={"keyboard-arrow-right"} size={26} color={"#000"}/>

          </View>
          </View>
        </View>
        
      
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  mainCont:{
    padding:15
  }
})
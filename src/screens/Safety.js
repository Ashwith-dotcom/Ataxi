import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
const Safety = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.headerCont}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color={"#fff"}/>
        </TouchableOpacity>
        <Text style={styles.headingtext}>Safety</Text>
      </View>
      <View style={styles.contentCont}>
        <Image source={require("../assets/safety.png")} style={styles.icon}/>
        <View style={{marginTop: 50}}>
          <Text style={{fontWeight:"700" , fontSize:18}}>Ataxi provides following safety features</Text>
          <Text style={{fontWeight:"700" , fontSize:18}}>                          during ride :</Text>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={{fontWeight:"700" , fontSize:16}}>~ SOS</Text>
          <Text style={{fontWeight:"700" , fontSize:16}}>~ Secure</Text>
          <Text style={{fontWeight:"700" , fontSize:16}}>~ Route Optimization</Text>
          <Text style={{fontWeight:"700" , fontSize:16}}>~ Fare Transparency</Text>
          <Text style={{fontWeight:"700" , fontSize:16}}>~ Real Time Tracking</Text>
          <Text style={{fontWeight:"700" , fontSize:16}}>~ 24*7 Customer Support</Text>
          <Text style={{fontWeight:"700" , fontSize:16}}>~ Helmet & License</Text>
        </View>
      </View>
    </View>
  )
}

export default Safety

const styles = StyleSheet.create({
  headerCont:{
    flexDirection:"row",
    backgroundColor:"#000",
    width:"100%",
    height:60,
    alignItems:"center",
    paddingLeft:10
  },
  headingtext:{
    paddingLeft:12,
    fontSize:24,
    fontWeight:"500",
    color:"#fff"
  },
  icon:{
    height:195,
    width:206
  },
  contentCont:{
    alignItems:"center",
    marginTop:60
  }
})
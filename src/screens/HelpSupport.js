import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import HelpSupportOptionsComponent from '../components/HelpSupportOptionsComponent'

const HelpSupport = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.headerCont}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color={"#fff"}/>
        </TouchableOpacity>
        <Text style={styles.headingtext}>Help & Support</Text>
      </View>
      <View style={styles.optionsCont}>
        <HelpSupportOptionsComponent icon={require("../assets/payments.png")} text={"Payments"}/>
        <HelpSupportOptionsComponent icon={require("../assets/accmanagement.png")} text={"Account Management"}/>
        <HelpSupportOptionsComponent icon={require("../assets/techissue.png")} text={"Technical Issues"}/>
        <HelpSupportOptionsComponent icon={require("../assets/security.png")} text={"Privacy & Security"}/>
        <HelpSupportOptionsComponent icon={require("../assets/lostitems.png")} text={"Lost Items"}/>
        <HelpSupportOptionsComponent icon={require("../assets/contactsupport.png")} text={"Contact Support"}/>
        <HelpSupportOptionsComponent icon={require("../assets/others.png")} text={"Others"}/>
      </View>
    </View>
  )
}

export default HelpSupport

const styles = StyleSheet.create({
  mainCont:{
    // flex:1,
    // backgroundColor:"#EFA601"
  },
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
  optionsCont:{
    backgroundColor:"#D9D9D9",
    flex:1,
    marginHorizontal:30,
    marginVertical:15,
    borderRadius:30,
    paddingTop:30
  }
})
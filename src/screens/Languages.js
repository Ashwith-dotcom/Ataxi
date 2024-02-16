import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import LanguageSelectComponent from '../components/LanguageSelectComponent';
const languages = [
  { id: 'en', name: 'English' ,icon : require("../assets/english.png") },
  { id: 'te', name: 'Telugu' ,icon : require("../assets/telugu.png")},
  { id: 'hi', name: 'Hindi' ,icon : require("../assets/hindi.png")},
  // Add more languages as needed
];

const Languages = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.headerCont}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color={"#fff"}/>
        </TouchableOpacity>
        <Text style={styles.headingtext}>Languages</Text>
      </View>
      <View style={styles.selectCont}>
       <LanguageSelectComponent languages={languages} />
      </View>
    </View>
  )
}

export default Languages

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
  selectCont:{
    backgroundColor:"#D9D9D9",
    // flex:1,
    marginHorizontal:30,
    marginVertical:30,
    borderRadius:30,
    paddingVertical:30
  }
})
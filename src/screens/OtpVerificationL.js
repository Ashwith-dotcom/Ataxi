import { StyleSheet, Text, TouchableOpacity, View , Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import { OtpInput } from 'react-native-otp-entry'
const OtpVerificationL = () => {
  return (
    <View style={styles.mainCont}>
      <TouchableOpacity style={styles.arrowBtn}>
        <Icon name="arrowleft" size={25} color="#000"/>
      </TouchableOpacity>
      <View style={{flexDirection:"row" , justifyContent:"center" , alignItems:"center" , marginTop:70}}>
         <Image
            style={styles.Inlogo}
            source={require('../assets/Indialogo.jpg')}
          />
        <Text style={{color:"#fff" , fontWeight:"500" , paddingHorizontal:5}}>MADE IN INDIA</Text>
         <Image
            style={styles.Inlogo}
            source={require('../assets/Indialogo.jpg')}
          />
      </View>
      <View style={{justifyContent:"center" , alignItems:"center"}}>
        <View style={styles.logoShadow}>
          <Image
            style={styles.logo}
            source={require('../assets/logo.jpeg')}
          />
        </View>
        </View>
        <View style={{justifyContent:"center" , alignItems:"center"}}>
            <Text style={{color:"#000" , fontWeight:"bold" , fontSize:18}}>Enter Verification Code</Text>
            <Text style={{color:"#000" , fontSize:14}}>Sent to +91 ******4456</Text>
        </View>
        <View>
        <OtpInput 
          numberOfDigits={4} 
          onTextChange={(text) => console.log(text)} 
          focusColor="#000"
          focusStickBlinkingDuration={500}
          theme={{
            containerStyle: styles.cont,
           }}
        />
        <View style={{alignItems:"flex-end" , marginRight:10}}>
        <Text>Resend SMS</Text>
        </View>
        </View>
        <View style={{justifyContent:"center" , alignItems:"center"}}>
        <TouchableOpacity style={styles.btn}>
            <Text style={{color:"#fff"}}>NEXT</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.footer}>
        <Text style={styles.footerText}>www.ataxi.com</Text>
      </View>
    </View>
  )
}

export default OtpVerificationL

const styles = StyleSheet.create({
    mainCont:{
        flex:1,
        backgroundColor:"#EFA601",
        
    },
    footer:{
        justifyContent:"center",
        alignItems:"center",
    },
    footerText:{
        color:"#000",
        letterSpacing:6
    },
    btn:{
    backgroundColor: "#000",
      height:45,
      width:130,
      borderRadius:50,
      justifyContent:"center",
      alignItems:"center",
      marginTop: 30,
      marginBottom:160
    
    },
    arrowBtn:{
        height:40,
        width:40,
        backgroundColor:"#D9D9D9",
        borderRadius:25,
        justifyContent: "center",
        alignItems:"center",
        margin:10
    },
    cont:{
        paddingHorizontal:60,
        marginTop:20
    },
    logo:{
        height:200,
        width:200,
        borderRadius:100,
        // borderWidth:1.5,
        // borderColor:"yellow",
    },
    Inlogo:{
      width:30,
      height:20
    },
})
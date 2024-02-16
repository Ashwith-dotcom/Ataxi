import { StyleSheet, Text, View , TouchableOpacity , Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign"

const RideHistoryComponent = ({to , from , price , datetime}) => {
  return (
    <View style={[styles.mainCont , datetime ?  styles.datetimeTrue : styles.datetimeFalse]}>
      <TouchableOpacity style={{flexDirection:"row", justifyContent:"space-between" , alignItems:"center"}}>
                <View style={{flexDirection:"row" , alignItems:"center"}}>
                    <TouchableOpacity style={{width:50 , height:50 , borderRadius:15 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center"}}>
                      <Icon name="car" size={26} color={"#000"}/>
                    </TouchableOpacity>
                    <View style={{marginLeft:15}}>
                        <Text style={{fontSize:14 , color:"#000" , fontWeight:"500"}}>To: {to}</Text>
                        <Text style={{fontSize:12 , color:"#fff"}}>From: {from}</Text>
                        {datetime && <Text style={{fontSize:12 , color:"#fff"}}>{datetime}</Text>}
                        
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={{fontSize:16 , color:"#000"}}>${price}</Text>
                    </View>
                </View>
       </TouchableOpacity>
    </View>
  )
}

export default RideHistoryComponent

const styles = StyleSheet.create({
    mainCont:{
        height:55 , justifyContent:"center" , marginBottom:3
    },
    datetimeTrue: {
        marginBottom:10,
        width:370 ,
      },
      datetimeFalse: {
        marginBottom:3,
        width:350 ,
      },
})
import { StyleSheet, Text, View , TouchableOpacity ,ScrollView} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import RideHistoryComponent from '../components/RideHistoryComponent'


const RideHistory = () => {
  return (
    <View>
      <View style={styles.headerCont}>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{paddingTop:5}}>
          <Icon name="arrow-back" size={24} color={"#fff"}/>
        </TouchableOpacity>
          
        </View>
        <View>
           <Text style={styles.headingtext}>Ride history</Text>
        </View>
        <View>
          <TouchableOpacity>
          <Icon name="settings-outline" size={24} color={"#fff"}/>  
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}
  style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
    <View style={{alignItems:"center" , paddingTop:20 , paddingBottom:90}}>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"} datetime={"Feb 1,2023 Fri, 11:30AM"}/>
      </View>
      </ScrollView>
    </View>
  )
}

export default RideHistory

const styles = StyleSheet.create({
    headerCont:{
        flexDirection:"row",
        backgroundColor:"#000",
        width:"100%",
        height:60,
        alignItems:"center",
        paddingHorizontal:15,
        justifyContent:"space-between"
      },
      headingtext:{
        paddingLeft:12,
        fontSize:24,
        fontWeight:"500",
        color:"#fff"
      },
})
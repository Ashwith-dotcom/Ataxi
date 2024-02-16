import { ScrollView, StyleSheet, Text, View , TouchableOpacity , Image} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/MaterialIcons"
import RideHistoryComponent from '../components/RideHistoryComponent'

const Profile = () => {
  return (
    <View>
      <View style={{flexDirection:"row" , width:"100%" , height:60 , justifyContent:"space-between" , alignItems:"center" , paddingHorizontal:20 }}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color={"#000"}/>   
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="settings-outline" size={24} color={"#000"}/>   
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}
  style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
        <View style={{marginBottom:15}}>
            <Text style={{fontWeight:"bold" , fontSize:28 , color:"#000"}}>Profile</Text>
            <Image source={require("../assets/avv.png")} style={{height:150 , width:150 , borderRadius:80 , marginVertical:15}}/>
            <Text style={{fontWeight:"bold" , fontSize:22 , color:"#000"}}>Hi, Sarah</Text>
            <Text style={{fontSize:16 , fontWeight:"500" , color:"#fff"}}>Your account is 60% complete</Text>
            <TouchableOpacity style={{backgroundColor:"#fff" , width:300 , height:50 , borderRadius:20 , justifyContent:"center" , alignItems:"center" , marginTop:5}}>
                <Text style={{color:"#000" , fontWeight:"bold" , fontSize:16}}>
                    Complete Profile
                </Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{fontSize:18 , fontWeight:"bold" , color:"#000"}}>Personal Information</Text>
            <View style={{flexDirection:"row", justifyContent:"space-between" , alignItems:"center" , paddingVertical:8}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity>
                        <Image source={require("../assets/avv.png")} style={{height:60 , width:60 , borderRadius:30}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:"center" , paddingLeft:15}}>
                        <Text style={{fontSize:16 , fontWeight:"500" , color:"#000"}}>Sarah Johnson</Text>
                        <Text style={{fontSize:14 , fontWeight:"400" , color:"#fff"}}>member since 2020</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Icon1 name="edit" size={24} color={"#000"}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingLeft:10 , paddingVertical:10}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{width:50 , height:50 , borderRadius:15 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center"}}>
                    <Icon2 name="language" size={28} color={"#000"}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:"center" , paddingLeft:15}}>
                        <Text style={{color:"#000", fontSize:16}}>Female, 26 year old</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Icon2 name="keyboard-arrow-right" size={24} color={"#000"}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingLeft:10, paddingVertical:10 , marginBottom:10}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{width:50 , height:50 , borderRadius:15 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center"}}>
                      <Icon name="home-outline" size={26} color={"#000"}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:"center" , paddingLeft:15}}>
                        <Text style={{color:"#000" , fontSize:16}}>Home</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                      <Icon2 name="keyboard-arrow-right" size={24} color={"#000"}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            
        </View>
        <View>
            <Text style={{fontSize:18 , fontWeight:"bold" , color:"#000"}}>Ride History</Text>
            <View style={{alignItems:"center" , paddingTop:10 , paddingBottom:90}}>
                <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={"15.00"}/>
                <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={16.00}/>
                <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={15}/>
                <RideHistoryComponent to={"K.P.H.B Colony Phase 4"} from ={"Road No.1 K.P.H.B Colony"} price={15}/>
                <TouchableOpacity style={{backgroundColor:"#fff" , width:250 , height:50, borderRadius:20, justifyContent:"center" , alignItems:"center",marginTop:15 }}>
                  <Text style={{color:"#000" , fontWeight:"bold" , fontSize:16}}>All Ride History</Text>
                </TouchableOpacity>
            </View>

        </View>

      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
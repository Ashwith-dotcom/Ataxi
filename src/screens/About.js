import { StyleSheet, Text, View , TouchableOpacity, ScrollView ,Image} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import AboutOptionsComponent from '../components/AboutOptionsComponent'

const About = () => {
  return (
    <View>
      <View style={styles.headerCont}>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{paddingTop:5}}>
          <Icon name="arrow-back" size={24} color={"#fff"}/>
        </TouchableOpacity>
          <Text style={styles.headingtext}>About</Text>
        </View>
        <View>
          <TouchableOpacity style={{width:80 , height:35 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center" , borderRadius:25}}>
            <Text style={{color:"#000" , fontWeight:"500" , fontSize:18}}>? Help</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom:20}} showsVerticalScrollIndicator={false}>
        <View style={{alignItems:"center" , marginVertical:20 , marginHorizontal:30}}>
          <Image source={require("../assets/About.png")} style={styles.icon}/>
          <View style={{marginTop:20}}>
            <Text style={{color:"#000", fontSize:14 , fontWeight:"500"}}>
              ATAXI mobile application available for both Android and iOS platforms, which enables users to book rides conveniently.The ATAXI app offers features such as real-time ride tracking, in-app payments, driver ratings, and a loyalty program, enhancing the overall ride experience.ATAXI app not only facilitates traditional cab booking but also revolutionizes short-distance travel by enabling users to effortlessly scan and book nearby autos, enhancing overall convenience and travel efficiency. 
            </Text>
          </View>
          <View style={styles.addressCont}>
            <View style={{paddingLeft:20 , paddingTop:12}}>
            <Text style={{color:"#000" , fontSize:16 , fontWeight:"500"}} >Registered Address:</Text>
            <Text></Text>
            <Text style={{color:"#000" , fontSize:16 , fontWeight:"500"}}>H.no 1-97/201 Reddy</Text>
            <Text style={{color:"#000" , fontSize:16, fontWeight:"500"}}>Nilayam, Nizampet,</Text>
            <Text style={{color:"#000" , fontSize:16, fontWeight:"500"}}>Medchal-Malkajgiri,</Text>
            <Text style={{color:"#000" , fontSize:16, fontWeight:"500"}}>Nizampet, K.V.Rangareddy,</Text>
            <Text style={{color:"#000" , fontSize:16, fontWeight:"500"}}>Qutubullapur-500090,</Text>
            <Text style={{color:"#000" , fontSize:16, fontWeight:"500"}}>Telangana.</Text>

            </View>
          </View>
          <View style={styles.optionsCont}>
            <TouchableOpacity style={styles.container}>
              <View style={{justifyContent:"center" , flex:1}}>
                <Text style={styles.text}>Privacy & Policy</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
              <View style={{justifyContent:"center" , flex:1}}>
                <Text style={styles.text}>Terms & Condition</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
              <View style={{justifyContent:"center" , flex:1}}>
                <Text style={styles.text}>Software Licence</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height:50 , width:"100%"}}>

          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  headerCont:{
    flexDirection:"row",
    backgroundColor:"#000",
    width:"100%",
    height:60,
    alignItems:"center",
    paddingHorizontal:10,
    justifyContent:"space-between"
  },
  headingtext:{
    paddingLeft:12,
    fontSize:24,
    fontWeight:"500",
    color:"#fff"
  },
  icon:{
    width:350,
    height:230
  },
  addressCont:{
    width:350,
    height:200,
    backgroundColor:"#FFBBBB7D",
    marginTop:30,
    borderRadius:15,
    borderWidth:1,
  },
  optionsCont:{
    width:350,
    height:150,
    backgroundColor:"#d3d3d3",
    marginTop:30,
    borderRadius:15,
    justifyContent:"center"
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.2,
    
    // shadowRadius: 2,
    // elevation: 3,
    // marginVertical: 0,
},

text:{
    fontSize:16,
    color:"#000",
    fontWeight:"700",
}
})
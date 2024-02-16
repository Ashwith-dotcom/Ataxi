import { StyleSheet, Text, View , TouchableOpacity , Switch } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons"

const Preferences = () => {
    const [isEmpro , setEmpro] = useState(false)
    const [isEmvo , setEmvo] = useState(false)
    const [isSmspro , setSmspro] = useState(false)
    const [isSmsvo , setSmsvo] = useState(false)
    const toggleEmpro = () => setEmpro(!isEmpro);
    const toggleEmvo = () => setEmvo(!isEmvo);
    const toggleSmspro = () => setSmspro(!isSmspro);
    const toggleSmsvo = () => setSmsvo(!isSmsvo);
  return (
    <View>
      <View style={styles.headerCont}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color={"#fff"}/>
        </TouchableOpacity>
        <Text style={styles.headingtext}>Preferences</Text>
      </View>
      <View style={{marginHorizontal:30 , marginTop:15}}>
        <Text style={styles.mainHeadings}>EMAIL</Text>
        <View style={{width:"100%" , height:120 , backgroundColor:"#d9d9d9" , marginVertical:15 , borderRadius:25}}>
            <View>
            <View style={{}}>
                <View>
                    <Text>Allow emails for promotions and offers</Text>
                </View>
                <View>
                 <Switch
                   trackColor={{ false: '#767577', true: '#81b0ff' }}
                   thumbColor={isEmpro ? '#f5dd4b' : '#f4f3f4'}
                   onValueChange={toggleEmpro}
                   value={isEmpro}
                />
                </View>
            </View>
            <View>
                <View>
                    <Text>Allow emails for invoice</Text>
                </View>
                <View>
                 <Switch
                   trackColor={{ false: '#767577', true: '#81b0ff' }}
                   thumbColor={isEmpro ? '#f5dd4b' : '#f4f3f4'}
                   onValueChange={toggleEmpro}
                   value={isEmpro}
                />
                </View>
            </View>
            </View>

        </View>
      </View>
      <View style={{marginHorizontal:30}}>
        <Text style={styles.mainHeadings}>SMS</Text>
        <View style={{width:"100%" , height:120 , backgroundColor:"#d9d9d9" , marginVertical:15 , borderRadius:25}}>
        <View>
                <View>
                    <Text>Allow SMS for invoice</Text>
                </View>
                <View>
                 <Switch
                   trackColor={{ false: '#767577', true: '#81b0ff' }}
                   thumbColor={isEmpro ? '#f5dd4b' : '#f4f3f4'}
                   onValueChange={toggleEmpro}
                   value={isEmpro}
                />
                </View>
            </View>
            <View>
                <View>
                    <Text>Allow promotional SMS offers</Text>
                </View>
                <View>
                 <Switch
                   trackColor={{ false: '#767577', true: '#81b0ff' }}
                   thumbColor={isEmpro ? '#f5dd4b' : '#f4f3f4'}
                   onValueChange={toggleEmpro}
                   value={isEmpro}
                />
                </View>
            </View>

        </View>
      </View>
    </View>
  )
}

export default Preferences

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
      mainHeadings:{
        fontSize:24,
        fontWeight:"600",
        color:"#000"
      }
})
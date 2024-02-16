import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'

const AboutOptionsComponent = ({text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{justifyContent:"center" , flex:1}}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default AboutOptionsComponent

const styles = StyleSheet.create({
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
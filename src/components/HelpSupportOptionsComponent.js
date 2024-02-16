import { StyleSheet, Text, View , Image ,TouchableOpacity} from 'react-native'
import React from 'react'

const HelpSupportOptionsComponent = ({icon , text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={{justifyContent:"center" , flex:1}}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HelpSupportOptionsComponent

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
    icon: {
        width: 26,
        height: 26,
        marginRight: 10,
    },
    text:{
        fontSize:16,
        color:"#000",
        fontWeight:"700",
    }
})
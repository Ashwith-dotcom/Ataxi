import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation , DrawerActions} from '@react-navigation/native'

const Home = () => {
    // const navigation = useNavigation()
  return (
    <View style={{flex:1 , backgroundColor:"#fff"}}>
        <TouchableOpacity>
          {/* <Icon name="menu" size={24} color={"#000"}/> */}
          <Text style={ {color:"#000"}}>HOme</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
   
})
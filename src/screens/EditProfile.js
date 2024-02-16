import { StyleSheet, Text, View , TouchableOpacity , Image, TextInput , KeyboardAvoidingView , Platform,TouchableWithoutFeedback} from 'react-native'
import React,{useState} from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import Icon1 from "react-native-vector-icons/Feather"

const EditProfile = () => {
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [homeAddress , setHomeAddress] = useState('')
    const [email , setEmail] = useState('')
    const [dateOfBirth , setDateOfBirth] = useState('')
    const [altMobileNumber , setAltMobileNumber] = useState('')
    const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };
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
      <View style={{paddingHorizontal:15}}>
        <Text style={{fontWeight:"bold" , fontSize:28 , color:"#000"}}>Profile</Text>
        <View style={{justifyContent:"center" , alignItems:"center" }}>
        <View style={{height:150 , width:150 , borderRadius:80}}>
           <Image source={require("../assets/avv.png")} style={{height:150 , width:150 , borderRadius:80 , marginVertical:15}}/>
           <TouchableOpacity style={{width:30 , height:30 , backgroundColor:"#ddd" , borderRadius:15 , justifyContent:"center" , alignItems:"center" ,position: 'absolute',bottom: 0, right: 0,}}>
            <Icon1 name="edit-2" size={18} color={"#000"}/>
           </TouchableOpacity>
        </View>
        </View>
      </View>
      <View style={{marginHorizontal:30 , marginTop:25}}>
        <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
            <View style={{marginBottom:10}}>
                <Text style={styles.headings}>First Name</Text>
                <TextInput
                   style={styles.input}
                   onChangeText={setFirstName}
                   value={firstName}
                   placeholder='First Name'
                />
            </View>
            <View>
                <Text style={styles.headings}>Last Name</Text>
                <TextInput
                   style={styles.input}
                   onChangeText={setLastName}
                   value={lastName}
                   placeholder='Last Name'
                />
            </View>
        </View>
        <View style={{marginBottom:10}}>
           <Text style={styles.headings}>Date of Birth</Text>
            <TextInput
                style={styles.input1}
                onChangeText={setDateOfBirth}
                value={dateOfBirth}
                placeholder='DD/MM/YYYY'
            />
        </View>
        <View style={{marginBottom:10}}>
            <Text style={styles.headings}>Gender</Text>
            <View style={styles.container}>
                <View style={styles.genderCont}>
              <TouchableOpacity
        style={[styles.circle, selectedGender === 'male' && styles.selected]}
        onPress={() => handleGenderSelect('male')}
      >
        
      </TouchableOpacity>
      <Text style={styles.genderText}>Male</Text>
      </View>
      <View style={styles.genderCont}>
      <TouchableOpacity
        style={[styles.circle, selectedGender === 'female' && styles.selected]}
        onPress={() => handleGenderSelect('female')}
      >
        
      </TouchableOpacity>
      <Text style={styles.genderText}>Female</Text>
      </View>
      <View style={styles.genderCont}>
      <TouchableOpacity
        style={[styles.circle, selectedGender === 'other' && styles.selected]}
        onPress={() => handleGenderSelect('other')}
      >
        
      </TouchableOpacity>
      <Text style={styles.genderText}>Others</Text>
      </View>
    </View>
        </View>
        <View style={{marginBottom:10}}>
            <Text style={styles.headings}>Email</Text>
            <TextInput
                style={styles.input1}
                onChangeText={email}
                value={setEmail}
                placeholder='email address'
            />
        </View>
        <View style={{marginBottom:10}}>
            <Text style={styles.headings}>Alternate mobile number</Text>
            <TextInput
                style={styles.input1}
                onChangeText={setAltMobileNumber}
                value={altMobileNumber}
                placeholder='mobile number'
            />
        </View>
        <View style={{marginBottom:10}}>
            <Text style={styles.headings}>Home Address</Text>
            <TextInput
                style={{backgroundColor:"#d9d9d9",
                width:260,
                height:105,
                borderRadius:15,}}
                onChangeText={setHomeAddress}
                value={homeAddress}
                // multiline={true}
            />
        </View>
      </View>
      <View style={{justifyContent:"center" , alignItems:"center" , marginTop:5}}>
        <TouchableOpacity style={{backgroundColor:"#D9D9D9" , width:300 , height:50 , borderRadius:20 , justifyContent:"center" , alignItems:"center" }}>
            <Text style={{color:"#000" , fontWeight:"bold" , fontSize:16}}>
                Complete Profile
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    headings:{
        fontWeight:"500",
        fontSize:16,
        color:"#000"
    },
    input:{
        backgroundColor:"#d9d9d9",
        width:145,
        height:35,
        borderRadius:15,
    },
    input1:{
        backgroundColor:"#d9d9d9",
        width:260,
        height:35,
        borderRadius:15,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
      },
      circle: {
        width: 15,
        height: 15,
        borderRadius: 8,
        borderWidth: 4,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      selected: {
        backgroundColor: '#000',
      },
      genderText: {
        fontSize: 16,
        paddingLeft:5
      },
      genderCont:{
        flexDirection:"row",
        alignItems:"center"
      }
})
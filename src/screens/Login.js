import { StyleSheet, Text, View ,Image , Platform, TouchableOpacity, TextInput } from 'react-native'
import React , {useState , useRef} from 'react'
import PhoneInput from "react-native-phone-number-input";
import CheckBox from '@react-native-community/checkbox';

const Login = () => {
  const [loginClicked , setLoginClicked] = useState(true)
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const phoneInput = useRef()
  return (
    <View style={styles.mainCont}>
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
        <View style={styles.lsCont}>
            <TouchableOpacity style={{backgroundColor: loginClicked ? '#000' : '#fff' , height:48 , width:98 , justifyContent:"center",alignItems:"center" , borderRadius:50}} onPress={() => setLoginClicked(true)}>
            <Text style={{color: loginClicked ? '#fff' : '#000'}}>
                LOGIN
            </Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{backgroundColor: !loginClicked ? '#000' : '#fff', height:48, width:98, justifyContent:"center" ,alignItems:"center" , borderRadius:50 }} onPress={() => setLoginClicked(false)}>  
            <Text style={{color: !loginClicked ? '#fff' : '#000'}}>
                SIGNUP
            </Text>
            </TouchableOpacity>
        </View>
        <View>
            {
                loginClicked ? 
                <View style={{justifyContent:"center" , alignItems:"center" ,  marginTop:10}}>
                <View style={styles.phnCont}>
                    <View style={styles.countrycodeCont}>
                    <Text style={{color: "#000" , fontSize:12}}>+91</Text>
                    </View>
                    <TextInput
                      style={{color:"#000"}}
                      placeholder='Mobile Number'
                      placeholderTextColor={"#000"}
                      selectionColor={"#000"}
                      keyboardType='numeric'
                    />
                </View>
                <View style={{marginVertical:15, marginBottom:30}}>
                    <View style={{flexDirection:"row" , justifyContent:"center" , alignItems:"center"}}>
                      <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      />
                      <Text style={{color:"#000"}}>Terms and Conditions</Text>
                    </View>
                    <View style={{justifyContent:"center" , alignItems:"center"}}>
                    <Text style={{color:"grey"}}>©copyrights and policy</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.lbtn}>
                  <Text style={{color:"#fff"}}>LOGIN</Text>
                </TouchableOpacity>
                </View>
                 : 
                 <View style={{justifyContent:"center" , alignItems:"center"}}>
                  <View style={{width:"100%" , height:125}}>
                    <View style={{flexDirection:"row" , paddingVertical:8}}>
                      <TextInput
                        style={styles.sinputCont}
                        placeholder='First Name'
                        placeholderTextColor={"#D3D3D3"}
                        selectionColor={"#000"}
                        
                      />
                      <TextInput
                        style={styles.sinputCont}
                        placeholder='Last Name'
                        placeholderTextColor={"#D3D3D3"}
                        selectionColor={"#000"}
                      />
                    </View>
                    <View style={{flexDirection:"row"}}>
                    <TextInput
                        style={styles.sinputCont}
                        placeholder='Gender'
                        placeholderTextColor={"#D3D3D3"}
                        selectionColor={"#000"}
                      />
                      <TextInput
                        style={styles.sinputCont}
                        placeholder='Age'
                        placeholderTextColor={"#D3D3D3"}
                        selectionColor={"#000"}
                      />
                    </View>
                    </View>
                    <View style={styles.phnCont}>
                    <View style={styles.countrycodeCont}>
                    <Text style={{color: "#000" , fontSize:12}}>+91</Text>
                    </View>
                    <TextInput
                      style={{color:"#000"}}
                      placeholder='Mobile Number'
                      placeholderTextColor={"#000"}
                      selectionColor={"#000"}
                      keyboardType='numeric'
                    />
                    </View>
                    <View>
                    <TextInput
                        style={styles.gmailIn}
                        placeholder='gmail'
                        placeholderTextColor={"#D3D3D3"}
                        selectionColor={"#000"}
                      />
                    </View>
                    <View style={{marginVertical:15}}>
                    <View style={{flexDirection:"row" , justifyContent:"center" , alignItems:"center"}}>
                      <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      />
                      <Text style={{color:"#000"}}>Terms and Conditions</Text>
                    </View>
                    <View style={{justifyContent:"center" , alignItems:"center"}}>
                    <Text style={{color:"grey"}}>©copyrights and policy</Text>
                    </View>
                    </View>
                    <TouchableOpacity style={styles.sbtn}>
                      <Text style={{color:"#fff"}}>SIGNUP</Text>
                    </TouchableOpacity>
                 </View>
                
            }
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>www.ataxi.com</Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    mainCont:{
        flex:1,
        backgroundColor:"#EFA601",
        
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
    logoShadow:{
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,    
            },
            android: {
                elevation: 5,
            },
        })
    },
        
    footer:{
        justifyContent:"center",
        alignItems:"center",
    },
    footerText:{
        color:"#000",
        letterSpacing:6
    },
    lsCont:{
        flexDirection:"row",
        height:50,
        width:200,
        borderRadius:50,
        backgroundColor:"#fff",
        justifyContent:"space-evenly",
        alignItems:'center',
        marginBottom:20
    },
    inputCont:{
        flexDirection:"row",
        borderColor:"grey",
        borderBottomWidth:.4,
        alignItems:"center",
        backgroundColor:"#fff",
        width:300,
        height:60,
        borderRadius:100
    },
    sinputCont:{
        borderColor:"grey",
        borderBottomWidth:.4,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
        width:170,
        height:40,
        color:"#000",
        borderRadius:100,
        paddingHorizontal:15,
        marginHorizontal:10
    },
    countrycodeCont:{
        height:"100%",
        width:60,
        // marginRight: 40,
        backgroundColor:"lightgrey",
        justifyContent:"center",
        alignItems:"center",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius:50,
        marginRight:4
    },
    phnCont:{
        flexDirection:"row",
        borderColor:"grey",
        borderBottomWidth:.4,
        // alignItems:"center",
        marginBottom:10,
        backgroundColor:"#fff",
        width:250,
        height:40,
        borderRadius:100

    },
    gmailIn:{
      backgroundColor:"#fff",
      width:250,
      height:40,
      borderRadius:100,
      paddingLeft:15
    },
    sbtn:{
      backgroundColor: "#000",
      height:45,
      width:130,
      borderRadius:50,
      justifyContent:"center",
      alignItems:"center",
      marginBottom: 40
    },
    lbtn:{
      backgroundColor: "#000",
      height:45,
      width:130,
      borderRadius:50,
      justifyContent:"center",
      alignItems:"center",
      marginBottom: 180,

    }
})
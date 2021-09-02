import { StatusBar } from 'expo-status-bar';
import React,{useState ,useEffect} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from './context';
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-simple-toast';
import { showMessage, hideMessage } from "react-native-flash-message";

export default function Register({navigation}) {
    const [username, setUname] = useState('');
    const [userempc, setEmpc] = useState('');
    const [userorg, setOrg] = useState('');
    const [userdiv, setDiv] = useState('');
    const [userdec, setDec] = useState('');
    const [useremail, setEmail] = useState('');
    const [usercity, setCity] = useState('');
    const [usermob, setMob] = useState('');
    const [userpass, setPass] = useState('');
    const [data, setData] =  React.useState({secureTextEntry: true});
    const updateSecureTextEntry = () => {
        setData({
            secureTextEntry: !data.secureTextEntry
        });
    }
    const reguser = (username, userempc, userorg, userdiv, userdec, useremail, usercity, usermob, userpass) =>{
        console.log("Username: "+username)
        console.log("Paaasord: "+userempc)
        console.log("Organization: "+userorg)
        console.log("Division: "+userdiv)
        console.log("Designation: "+userdec)
        console.log("Email: "+useremail)
        console.log("City: "+usercity)
        console.log("Mobile Number: "+usermob)
        console.log("Password: "+userpass)
        var URL_LOGIN = 'https://wecall-api-infocicion.herokuapp.com/addsalesrep';
        fetch(URL_LOGIN, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Basic '+btoa('admin:admin')
        },
        body: JSON.stringify({
            sales_rep_email_address : useremail,
            sales_rep_emp_code : userempc,
            sales_rep_mobile_no : usermob,
            sales_rep_designation : userdec,
            sales_rep_full_name : username,
            sales_rep_hq : userorg,
            sales_rep_status : "Active"
        })      
        })
        .then(
            function(response){
                if (response.status == 201) {
                    Toast.show('Login Successful', Toast.LONG);
                    console.log('Login Successful')
                    showMessage({
                        message: "Login Successful",
                        description: "Welcome To WeCall",
                        type: "success",
                        icon: "auto"
                    });
                }
                else{
                    Toast.show('User Email or Password is Incorrect', Toast.LONG);
                    console.log('Login Unsuccessful')
                    showMessage({
                        message: "Login Unsuccessful",
                        description: "Please check your email and password and try again",
                        type: "danger",
                        icon: "auto"
                    });
                }
            }
            )
            .catch(function(err) {
            console.log('Fetch Error', err);
            });
    }
    return (
    <View style={styles.mainContainer}>
        <Text style={{color:'#d40000',fontWeight:'bold',fontSize:27,paddingTop:30}}>SIGN UP</Text>
        <ScrollView contentContainerStyle={styles.Scroll}>
            <View style={[styles.container,{marginTop:-17}]}>
                <Animatable.View  animation="fadeInUpBig" style={styles.contentWrapper}>
                    <View style={styles.action}>
                        <Icon 
                            name="person-outline"
                            color="#666666"
                            size={20}
                            style={{marginTop:11}}
                        />
                        <TextInput 
                            placeholder="Name (As per Co. Records) " 
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            onChangeText = {username => setUname(username)}
                        />
                    </View>
                    <View style={[styles.action,{
                        marginTop: 20}]}>
                        <Icon 
                            name="compass-outline"
                            type='ionicon'
                            color="#666666"
                            size={20}
                            style={{marginTop:11}}
                        />
                        <TextInput 
                            placeholder="Employee Code" 
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            onChangeText = {userempc => setEmpc(userempc)}
                        />
                    </View>
                    <View style={[styles.action,{
                        marginTop: 20}]}>
                        <Icon 
                            name="business-outline"
                            color="#666666"
                            type='ionicon'
                            size={20}
                            style={{marginTop:11}}
                        />
                        <TextInput 
                            placeholder="Name of Organiztion" 
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            onChangeText = {userorg => setOrg(userorg)}
                        />
                    </View>
                    <View style={[styles.action,{
                        marginTop: 20}]}>
                        <Icon 
                            name="compass-outline"
                            color="#666666"
                            type='ionicon'
                            size={20}
                            style={{marginTop:11}}
                        />
                        <TextInput 
                            placeholder="Name of Division"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            onChangeText = {userdiv => setDiv(userdiv)}
                        />
                    </View>
                    <View style={[styles.action,{
                        marginTop: 20}]}>
                        <Icon 
                            name="key"
                            color="#666666"
                            type='ionicon'
                            size={20}
                            style={{marginTop:11}}
                        />
                        <TextInput 
                            placeholder="Designation"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            onChangeText = {userdec => setDec(userdec)}
                        />
                    </View>
                    <View style={[styles.action,{
                        marginTop: 20}]}>
                        <Icon 
                            name="mail-outline"
                            color="#666666"
                            type='ionicon'
                            size={20}
                            style={{marginTop:11}}
                        />
                        <TextInput 
                            placeholder="Email Address" 
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            onChangeText = {useremail => setEmail(useremail)}
                        />
                    </View>
                    <View style={[styles.action,{
                        marginTop: 20}]}>
                        <Icon 
                            name="location-outline"
                            color="#666666"
                            type='ionicon'
                            size={20}
                            style={{marginTop:11}}
                        />
                        <TextInput 
                            placeholder="City (Company HQ)"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            onChangeText = {usercity => setCity(usercity)}
                        />
                    </View>
                    <View style={[styles.action,{
                        marginTop: 20}]}>
                        <Icon 
                            name="call-outline"
                            color="#666666"
                            type='ionicon'
                            size={20}
                            style={{marginTop:11}}
                        />
                        <TextInput 
                            placeholder="Mobile No"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            onChangeText = {usermob => setMob(usermob)}
                        />
                    </View>
                    <View style={[styles.action,{
                        marginTop: 20}]}>
                        <Icon 
                            name="key-outline"
                            color="#666666"
                            type='ionicon'
                            size={20}
                            style={{marginTop:11}}
                        />
                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            onChangeText = {userpass => setPass(userpass)}
                        />                
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ? 
                            <Feather 
                                name="eye-off"
                                color="grey"
                                size={20}
                                style={{marginTop:11}}
                            />
                            :
                            <Feather 
                                name="eye"
                                color="grey"
                                size={20}
                                style={{marginTop:11}}
                            />
                            }
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
                <Animatable.View animation="fadeInUpBig" style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-back-circle" color="#d40000" type='ionicon' size={55} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => reguser(username, userempc, userorg, userdiv, userdec, useremail, usercity, usermob, userpass)}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </ScrollView>
        <StatusBar style="auto" />
    </View>
    );
}
const styles = StyleSheet.create({
  mainContainer:{
    flexGrow:1,  
    padding:12,
  },
  container: {
    justifyContent:'center',
    alignItems:'center',
  },
  contentWrapper:{
    marginVertical:15,
  },
  inputWrap:{
    flexDirection:'row',
  },
 
  ImageStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
      alignItems: 'center'
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5 ,
    margin: 10
  },
  button: {
    width:270,
    borderRadius: 25,
    marginVertical: 5,
    paddingVertical: 13,
    backgroundColor:'#d40000',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
  },
  hyperLinkText:{
      alignItems:'center',
      fontSize:16,
      marginVertical:16,
  },
  hyperLink:{
      color: '#a40b0e',
      fontSize:14,
  },
  infocisionLogoContainer:{
    marginTop:59,
    alignItems:'center',
  },
  infocisionLogo:{
      width:130,
      height:40,
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#afafaf',
      paddingBottom: 5,
      width:310,
  },
  textInput: {
      flex: 1,
      marginTop:  -4,
      paddingLeft: 10,
      color: '#05375a',
  },
  Scroll:{
      height: 780
  }
});

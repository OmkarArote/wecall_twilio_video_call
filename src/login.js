import { StatusBar } from 'expo-status-bar';
import React,{useState ,useEffect} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from './context';
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-simple-toast';
import { showMessage, hideMessage } from "react-native-flash-message";

export default function Login({navigation}) {
  const [data, setData] =  React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isLoading: false
  });
  const [useremail, setEmail] = useState('');
  const [userpass, setPass] = useState('');
  const updateSecureTextEntry = () => {
    setData({
        secureTextEntry: !data.secureTextEntry
    });
  }
  const handleValidUser = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let validemailformat= reg.test(val)
    if(validemailformat){
      setData({
        ...data,
        isValidUser: true
      });
    } else {
      console.log("Warning: Email Format Is Incorrect")
      setData({
        ...data,
        isValidUser: false
      });
    }
  }
  const handleValidPass = (val) => {
    if(val.length >= 8){
      setData({
        ...data,
        isValidPassword: true
      });
    } else {
      console.log("Warning: Password is too short")
      setData({
        ...data,
        isValidPassword: false
      });
    }
  }
  const { signIn } = React.useContext(AuthContext);
  const login = (useremail, userpass) =>{
    setData({
      ...data,
      isLoading: true
    });
    console.log("Final Entered Email: "+useremail)
    console.log("Final Entered Password: "+userpass)
    var URL_LOGIN = 'https://wecall-api-infocicion.herokuapp.com/user';
    fetch(URL_LOGIN, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+btoa('admin:admin')
      },
      body: JSON.stringify({
        user_email_address: useremail,
        user_password: userpass
      })      
    })
    .then(
      function(response){
        if (response.status == 200) {
          Toast.show('Login Successful', Toast.LONG);
          console.log('Login Successful')
          showMessage({
            message: "Login Successful",
            description: "Welcome To WeCall",
            type: "success",
            icon: "auto"
          });
          signIn()
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
          setData({
            ...data,
            isLoading: false
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
    <Text style={{color:'#d40000',fontWeight:'bold',fontSize:27,paddingTop:30}}>SIGN IN</Text>
    <View style={styles.container}>
      <Animatable.Image style={{height:250,width:250}} animation="bounceIn"
          source={require('../assets/logo.png')}
      />
      <View style={styles.contentWrapper}>
        <Animatable.View  animation="fadeInUpBig" style={styles.action} >
            <Icon 
                name="envelope-o"
                color="#666666"
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
                onEndEditing ={(p)=>handleValidUser(p.nativeEvent.text)}
            />
        </Animatable.View>
        {data.isValidUser ? null :
        <Animatable.View animation="fadeInLeft" duration={500}>
        <Text style={[styles.errorMsg]}>Please check the email format</Text>
        </Animatable.View>
        }
        <Animatable.View style={[styles.action,{
                marginTop: 13}]} animation="fadeInUpBig">
            <Icon 
                name="key"
                color="#666666"
                size={20}
                style={{marginTop:12}}
            />
            <TextInput 
                placeholder="Password"
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color:"#000"
                }]}
                autoCapitalize="none"
                onChangeText = {userpass => setPass(userpass)}
                onEndEditing ={(e)=>handleValidPass(e.nativeEvent.text)}
                secureTextEntry={data.secureTextEntry ? true : false}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ? 
                      <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                        style={{marginTop:13}}
                    />
                    :                    
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                        style={{marginTop:13}}
                    />
                    }
            </TouchableOpacity>
        </Animatable.View>
        {data.isValidPassword ? null :
        <Animatable.View animation="fadeInLeft" duration={500}>
        <Text style={[styles.errorMsg]}>Please length must be greater the 8</Text>
        </Animatable.View>
        }
      </View>
      <Animatable.View animation="fadeInUpBig">
        <TouchableOpacity style={styles.button} onPress={() => login(useremail, userpass)}>
          {data.isLoading?
            <ActivityIndicator animating={data.isLoading} color={"white"}/>
            : <Text style={styles.buttonText}>LOG IN</Text>
          }
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View animation="fadeInUpBig" style={styles.hyperLinkText}>
        <TouchableOpacity >
            <Text style={styles.hyperLink} onPress={() => navigation.navigate('Forgot_Password')}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity  onPress={() => navigation.navigate('Register')}>
            <Text style={styles.hyperLink}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      <Animatable.View animation="fadeInUpBig" style={styles.infocisionLogoContainer}>
          <Image
              style={styles.infocisionLogo}
              source={require('../assets/Infocision-Logo.png')}
          />
          <Text>www.infocision.in</Text>
      </Animatable.View>
    </View>
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
  button: {
    width:310,
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
  errorMsg:{
    color: '#ff0000',
    fontWeight: '600',
    marginTop: 2
  },
  infocisionLogoContainer:{
    marginTop:60,
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
  }
});

import { StatusBar } from 'expo-status-bar';
import React,{useState ,useEffect} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from './context';
import * as Animatable from 'react-native-animatable';

export default function Forgot_Password({navigation}) {
  return (
    
    <View style={styles.mainContainer}>
      <Text style={{color:'#d40000',fontWeight:'bold',fontSize:27,paddingTop:30}}>Forgot Password</Text>
      <View style={styles.container}>
        <Animatable.Image style={{height:250,width:250}} animation="bounceIn"
            source={require('../assets/logo.png')}
        />
        <View style={styles.contentWrapper}>
        <Animatable.View style={styles.action}  animation="fadeInUpBig">
            <Icon 
                name="mail-outline"
                color="#666666"
                type='ionicon'
                size={20}
            />
            <TextInput 
                placeholder="Email Address"
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color:"#000"
                }]}
                autoCapitalize="none"
                
            />
        </Animatable.View>
        <Animatable.View style={[styles.action,{
                marginTop: 35}]} animation="fadeInUpBig">
            <Icon 
                name="call-outline"
                color="#666666"                
                type='ionicon'
                size={20}
            />
            <TextInput 
                placeholder="Mobile No."
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color:"#000"
                }]}     
            />
        </Animatable.View>
        </View>
        <Animatable.View animation="fadeInUpBig" style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack() }>
            <Icon name="chevron-back-circle" color="#d40000" type='ionicon' size={55} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Reset My Password</Text>
          </TouchableOpacity>
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
  }
});

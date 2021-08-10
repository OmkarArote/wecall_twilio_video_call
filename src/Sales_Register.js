import React,{useState ,useEffect} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text,Image,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

function Sales_Register({navigation}) {
    const [data, setData] =  React.useState({secureTextEntry: true});
    const updateSecureTextEntry = () => {
      setData({
          secureTextEntry: !data.secureTextEntry
      });
  }
  return (                
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.contentWrapper}>
                    <View style={styles.action}>
                        <Icon 
                            name="person-outline"
                            color="#666666"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Name (As per Co. Records) " 
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            
                        />
                    </View>
                    <View style={[styles.action,{
                        marginTop: 35}]}>
                        <Icon 
                            name="compass-outline"
                            type='ionicon'
                            color="#666666"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Employee Code" 
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            
                        />
                    </View>
                    <View style={[styles.action,{
                        marginTop: 35}]}>
                        <Icon 
                            name="business-outline"
                            color="#666666"
                            type='ionicon'
                            size={20}
                        />
                        <TextInput 
                            placeholder="Name of Organiztion" 
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            
                        />
                    </View>
                    
                    <View style={[styles.action,{
                        marginTop: 35}]}>
                        <Icon 
                            name="compass-outline"
                            color="#666666"
                            type='ionicon'
                            size={20}
                        />
                        <TextInput 
                            placeholder="Name of Division"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            
                        />
                    </View>
                    
                    <View style={[styles.action,{
                        marginTop: 35}]}>
                        <Icon 
                            name="key"
                            color="#666666"
                            type='ionicon'
                            size={20}
                        />
                        <TextInput 
                            placeholder="Designation"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            
                        />
                    </View>
                    
                    <View style={[styles.action,{
                        marginTop: 35}]}>
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
                    </View>
                    
                    <View style={[styles.action,{
                        marginTop: 35}]}>
                        <Icon 
                            name="location-outline"
                            color="#666666"
                            type='ionicon'
                            size={20}
                        />
                        <TextInput 
                            placeholder="City (Company HQ)"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            
                        />
                    </View>
                    
                    <View style={[styles.action,{
                        marginTop: 35}]}>
                        <Icon 
                            name="call-outline"
                            color="#666666"
                            type='ionicon'
                            size={20}
                        />
                        <TextInput 
                            placeholder="Mobile No"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            
                        />
                    </View>
                    
                    <View style={[styles.action,{
                        marginTop: 35}]}>
                        <Icon 
                            name="key-outline"
                            color="#666666"
                            type='ionicon'
                            size={20}
                        />
                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ? 
                            <Feather 
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather 
                                name="eye"
                                color="grey"
                                size={20}
                            />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>Edit Profile</Text>
                </TouchableOpacity> 
            </View>
        </View>
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center',
      },
      input: {
        paddingLeft:15,
        paddingBottom:10,
        paddingTop:10,
        width:310,
        fontSize:16,
        color:'#000',
        marginVertical: 5,
        marginBottom: 5,
        borderBottomColor:'#dad9d9',
        borderBottomWidth: 1,
      },
      button: {
        width:310,
        borderRadius: 25,
        marginVertical: 15,
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
        textAlign:'center'
      },
    infocisionLogo:{
        width:130,
        height:40
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
    contentWrapper:{
      marginTop:35,
    }
});

export default Sales_Register;
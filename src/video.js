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
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.contentWrapper}>
                    <View style={styles.action}>
                        <Icon 
                            name="key-outline"
                            type="ionicon"
                            color="#666666"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Access Token " 
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color:"#000"
                            }]}
                            autoCapitalize="none"
                            
                        />
                    </View>
                    
                </View>
                <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Call</Text>
                </TouchableOpacity> 
            </View>
        </View>
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
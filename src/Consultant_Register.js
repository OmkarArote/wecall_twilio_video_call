import React,{useState ,useEffect} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text,Image,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

function Consultant_Register({ navigation }) {
    const [data, setData] =  React.useState({secureTextEntry: true});
    const [isShow, setShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const [mode,setMode] = useState('date');
    const showMode = (currentMode) =>{
        setShow(true);
        setMode(currentMode);
    }
    const showDatePicker = () => {
        showMode('date');
    };
    const onChange = (event, value) => {
        setDate(value);
        setShow(true);
    };
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
                                placeholder="Name (As Per Registration) " 
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
                                name="medkit-outline"
                                type='ionicon'
                                color="#666666"
                                size={20}
                            />
                            <TextInput 
                                placeholder="Speciality" 
                                placeholderTextColor="#666666"
                                style={[styles.textInput, {
                                    color:"#000"
                                }]}
                                autoCapitalize="none"
                                
                            />
                        </View>
                        <View style={[styles.action,{
                        marginTop: 35}]}>
                            <View>
                                <TouchableOpacity onPress={showDatePicker} style={styles.dobContainer}>
                                    <TextInput style={[styles.input,{color:"#000"}]} placeholder="Date of Birth" 
                                        placeholderTextColor = "#000"
                                        selectionColor="grey"
                                    >
                                        {isShow && (
                                            <Text style={styles.pickedDate}>{date.toDateString()}</Text>
                                        )}
                                    </TextInput>
                                    <Icon name="calendar-outline" size={30} style={{marginTop:15,marginLeft:-30,}} color="#000" type='ionicon' />
                                </TouchableOpacity>
                            </View>
                            {isShow && (
                                <DateTimePicker
                                value={date}
                                mode={mode}
                                display={Platform.OS === 'ios' ? 'spinner' : 'spinner'}
                                is24Hour={true}
                                onChange={onChange}
                                style={styles.datePicker}
                                />
                            )}
                        </View>
                        <View style={[styles.action,{
                        marginTop: 35}]}>
                            <Icon 
                                name="document-outline"
                                type='ionicon'
                                color="#666666"
                                size={20}
                            />
                            <TextInput 
                                placeholder="MDL Number" 
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
                                name="school-outline"
                                type='ionicon'
                                color="#666666"
                                size={20}
                            />
                            <TextInput 
                                placeholder="Qualification" 
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
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
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

export default Consultant_Register;
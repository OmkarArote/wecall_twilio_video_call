import React,{useState ,useEffect} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View,StyleSheet,Text,TextInput, TouchableOpacity,CheckBox, Platform } from 'react-native';
import { MaterialCommunityIcons,Entypo } from '@expo/vector-icons'; 
import moment from 'moment';

function Call_Scheduler({ navigation }) {  
  const [date, setDate] = useState(new Date(Date.now()));
  const [time, setTime] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('date');
  const [isShow, setShow] = useState(false);

  const onChangeDate = (event, selectedValue) =>{
      const dateValue = selectedValue || new Date();
      setDate(dateValue);
      setShow(Platform.OS === 'ios');
      console.log(selectedValue);
  };
  const onChangeTime = (event, selectedTime) =>{
      const currentTime = selectedTime || new Date();
      setTime(currentTime);
      setShow(Platform.OS === 'ios');
      console.log(currentTime);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setMode('date');
  };
  const showTimepicker = () => {
    showMode('time');
    setMode('time');
  };
  /*checkbox */
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
    return(
      <View style={styles.container}>
          <View style={styles.body}>
            <TextInput style={[styles.input,{color:"#000"}]}
                placeholder="MR We Call Meeting"
                placeholderTextColor = {"#000"}
                selectionColor="grey"
                value="MR We Call Meeting"
            />
            <View style={styles.pickedDateContainer}>
              <Text style={styles.pickedDate}>Date: </Text>
              {!isShow && ( <TouchableOpacity onPress={showDatepicker} >
                <Text style={styles.pickedDate}>{moment(date).format("MMM Do YYYY")}</Text>
              </TouchableOpacity>
              )}
            </View>
              {/* The date picker */}
              {isShow && (
                <DateTimePicker
                  value={date}
                  mode={mode}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={onChangeDate}
                  style={styles.datePicker}
                  
                />
              )}
            <View style={styles.pickedDateContainer}>
              <Text style={styles.pickedDate}>Time: </Text>
              <TouchableOpacity onPress={showTimepicker} >
                <Text style={styles.pickedDate}>{moment(time).utcOffset('+05:30').format('h:mm a')}</Text>
              </TouchableOpacity>
              
            </View>
              {/* The time picker */}
              {isShow && (
                <DateTimePicker
                  value={time}
                  mode={mode}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={false}
                  onChange={onChangeTime}
                  style={styles.datePicker}

                />
              )}
            <View style={styles.receivedFromContainer}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                  tintColors={{ true: '#000', false: '#000' }}
                />
                <Text style={[styles.label,{color:"#000"}]}> Shield / Mr. C</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected1}
                  onValueChange={setSelection1}
                  style={styles.checkbox}
                  tintColors={{ true: '#000', false: '#000' }}
                />
                <Text style={[styles.label,{color:"#000"}]}> Mankind / Mr. B</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected2}
                  onValueChange={setSelection2}
                  style={styles.checkbox}
                  tintColors={{ true: '#000', false: '#000' }}
                />
                <Text style={[styles.label,{color:'#000'}]}> Pfizer / Mr D</Text>
              </View>
            </View>
            <View style={styles.btns}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} >
                      <Text style={styles.buttonText}><MaterialCommunityIcons name="calendar-edit" size={24} color="#fff" /></Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} >
                      <Text style={styles.buttonText} onPress={() => navigation.navigate('Scheduled_Calls')} ><Entypo name="save" size={24} color="#fff" /></Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
          
        </View>
     )
}
const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
      paddingLeft:15,
      paddingBottom:10,
      paddingTop:10,
      width:340,
      fontSize:16,
      marginVertical: 5,
      marginBottom: 5,
      borderBottomColor:'#dad9d9',
      borderBottomWidth: 1,
    },
    dateContainer:{
      backgroundColor:'#e7e7e7',
      marginBottom:5,
      width:340,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    dateInner:{
      flexDirection:'row',
      padding:10,
    },
    dateText:{      
      fontSize:18,
      fontWeight:'bold',
    },
    pickedDate:{      
      fontSize:18,
      fontWeight:'bold',
      marginHorizontal:90,
    },
    receivedFromContainer:{
      marginVertical:10,
    },
    checkboxContainer:{
      flexDirection:'row',
      marginVertical:5,
    },
    label:{
      fontSize:18,
      fontWeight:'bold',
    },
    btns:{
      flexDirection:'row',
      justifyContent:'center',
      alignContent: 'center',
    },
    buttonContainer:{
      paddingRight:8,
    },
    button: {
      width: 150,
      borderRadius: 25,
      marginVertical: 15,
      paddingVertical: 13,
      backgroundColor:"#d40000",
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
    pickedDateContainer: {
      padding: 20,
      backgroundColor: '#e7e7e7',
      borderRadius: 10,
      flexDirection:'row',
    },
    pickedDate: {
      fontSize: 18,
      color: 'black',
    },
    btnContainer: {
      padding: 30,
    },
    // This only works on iOS
    datePicker: {
      width: 320,
      height: 260,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
});
const formatDate = (date) => {
  return `${moment(date).format("MMM Do YY")}`;
};
const formatTime = (time) => {
  return `${moment(time).utcOffset('+05:30').format('h:mm a')}`;
};
export default Call_Scheduler;
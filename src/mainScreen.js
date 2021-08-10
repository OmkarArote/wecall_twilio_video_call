import React from 'react';
import { NavigationContainer, useNavigation, DrawerActions,DefaultTheme as NavigationDefaultTheme,DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import About_Us from './AboutUs';
import Call_Scheduler from './Call_Scheduler';
import Call_Analysis from './Call_Analysis';
import Scheduled_Calls from './Scheduled_Calls';
import Forgot_Password from './Forgot_Password';
import Sales_Register from './Sales_Register';
import Consultant_Register from './Consultant_Register';
import Dashboard from './Dashboard';
import Video from './video';


const HeaderLeft = () => {
    const navigation = useNavigation();
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          <Ionicons name='ios-menu' size={35} color="#fff" style={{backgroundColor:"#d40000",marginLeft:5}}
            ></Ionicons>
        </TouchableOpacity>
      </View>
    );
  };
const Stack = createStackNavigator();

const MainTabScreen = () => (
    <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:"#d40000",
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold'
        }
      }}>
        <Stack.Screen name="Call_Scheduler" component={Call_Scheduler} options={{
            title:'Call Scheduler',
            headerRight:() => (
              <Image
                style={{ width: 40, height: 40,borderRadius:25,marginRight:5,marginTop:5}}
                source={require('../assets/IMG-20210415-WA0017.jpg')}
            />
              ),
              headerLeft: ({}) => <HeaderLeft />
        }}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{
            title:'Dashboard(HO)',
            headerRight:() => (
              <Image
                style={{ width: 40, height: 40,borderRadius:25,marginRight:5,marginTop:5}}
                source={require('../assets/IMG-20210415-WA0017.jpg')}
            />
              ),
              headerLeft: ({}) => <HeaderLeft />
        }}/>
        <Stack.Screen name="Forgot_Password" component={Forgot_Password} options={{
            title:'Forgot Password',
            headerRight:() => (
              <Image
                style={{ width: 40, height: 40,borderRadius:25,marginRight:5,marginTop:5}}
                source={require('../assets/IMG-20210415-WA0017.jpg')}
            />
              )
          }}/>
        <Stack.Screen name="Call_Analysis" component={Call_Analysis} options={{
            title:'Call Analysis',
            headerRight:() => (
              <Image
                style={{ width: 40, height: 40,borderRadius:25,marginRight:5,marginTop:5}}
                source={require('../assets/IMG-20210415-WA0017.jpg')}
            />
              )
            }}/>
        <Stack.Screen name="Scheduled_Calls" component={Scheduled_Calls} options={{
            title:'Scheduled Calls',
            headerRight:() => (
              <Image
                style={{ width: 40, height: 40,borderRadius:25,marginRight:5,marginTop:5}}
                source={require('../assets/IMG-20210415-WA0017.jpg')}
            />
              )
            }}/>
            
        <Stack.Screen name="Sales_Register" component={Sales_Register} options={{
            title:'My Account(MSR)',
            headerRight:() => (
              <Image
                style={{ width: 40, height: 40,borderRadius:25,marginRight:5,marginTop:5}}
                source={require('../assets/IMG-20210415-WA0017.jpg')}
            />
              )
            }}/>
            
        <Stack.Screen name="Consultant_Register" component={Consultant_Register} options={{
            title:'My Account(Dr)',
            headerRight:() => (
              <Image
                style={{ width: 40, height: 40,borderRadius:25,marginRight:5,marginTop:5}}
                source={require('../assets/IMG-20210415-WA0017.jpg')}
            />
              )
            }}/>
        <Stack.Screen name="About_Us" component={About_Us} options={{
            title:'About Us',
            headerRight:() => (
              <Image
                style={{ width: 40, height: 40,borderRadius:25,marginRight:5,marginTop:5}}
                source={require('../assets/IMG-20210415-WA0017.jpg')}
            />
              )
            }}/>
            <Stack.Screen name="Video" component={Video} options={{
            title:'Video Call',
            headerRight:() => (
              <Image
                style={{ width: 40, height: 40,borderRadius:25,marginRight:5,marginTop:5}}
                source={require('../assets/IMG-20210415-WA0017.jpg')}
            />
              )
            }}/>
      </Stack.Navigator>
);

export default MainTabScreen;


const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center',
    },
    aboutUsContainer:{
        justifyContent:'center',
        alignItems: 'center',
        padding:10,
    },
    aboutUsText:{
        textAlign:'justify',
        fontSize:18,
        paddingBottom:10,
    },
    aboutUsInfocisionLogo:{
        marginBottom:20,
    },
    link:{
        color:'#a40b0e',
        fontSize:18,
        fontWeight:'bold',
    }
});
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Register from './register';
import Forgot_Password from './Forgot_Password';
import Call_Scheduler from './Call_Scheduler';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="Register" component={Register}/>
        <RootStack.Screen name="Forgot_Password" component={Forgot_Password}/>
    </RootStack.Navigator>
);

export default RootStackScreen;
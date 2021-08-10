import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import RootStackScreen from "./src/stackScreen";
import { DrawerContent } from './src/DrawerContent';
import { AuthContext } from './src/context';
import MainTabScreen from './src/mainScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
 const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 
  
  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fgkj');
      setIsLoading(false);
      
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
      
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
      
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      setIsLoading(false);
      
    }, 1000);
  }, []);
  return (
    
    <View style={styles.mainContainer}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          { userToken !== null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            </Drawer.Navigator>
          )
        :
          <RootStackScreen/>
        }
        </NavigationContainer>
      </AuthContext.Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flexGrow:1, 
  },
  container: {
    justifyContent:'center',
    alignItems:'center',
  }
});
export default App;
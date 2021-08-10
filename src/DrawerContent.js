import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SimpleLineIcons } from '@expo/vector-icons'; 

export function DrawerContent(props){

    return(
        <View style={{flex:1,}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row'}}>
                            <Avatar.Image 
                                source={require('../assets/user.png')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Milind Malshe</Title>
                                <Caption style={styles.caption}>milindmalshe@gmail.com</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="phone-outline" 
                                color="#000"
                                size={size}
                                />
                            )}
                            label="Call Scheduler"
                            inactiveTintColor="#000"
                            onPress={() => {props.navigation.navigate('Call_Scheduler')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="video-outline" 
                                color="#000"
                                size={size}
                                />
                            )}
                            label="Video Call"
                            inactiveTintColor="#000"
                            onPress={() => {props.navigation.navigate('Video')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="view-dashboard" 
                                color="#000"
                                size={size}
                                />
                            )}
                            label="Dashboard"
                            inactiveTintColor="#000"
                            onPress={() => {props.navigation.navigate('Dashboard')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="phone-log-outline" 
                                color="#000"
                                size={size}
                                />
                            )}
                            label="Scheduled Calls"
                            inactiveTintColor="#000"
                            onPress={() => {props.navigation.navigate('Scheduled_Calls')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <SimpleLineIcons 
                                name="graph" 
                                color="#000"
                                size={size}
                                />
                            )}
                            label="Call Analysis"
                            inactiveTintColor="#000"
                            onPress={() => {props.navigation.navigate('Call_Analysis')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color="#000"
                                size={size}
                                />
                            )}
                            label="My Account (Dr)"
                            inactiveTintColor="#000"
                            onPress={() => {props.navigation.navigate('Consultant_Register')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="My Account (MSR)"
                            inactiveTintColor="#000"
                            onPress={() => {props.navigation.navigate('Sales_Register')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="history" 
                                color={color}
                                size={size}
                                />
                            )}
                            
                            label="About Us"
                            inactiveTintColor="#000"
                            onPress={() => {props.navigation.navigate('About_Us')}}
                        />                       
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    inactiveTintColor="#000"
                />
            </Drawer.Section>
        </View>
    );
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
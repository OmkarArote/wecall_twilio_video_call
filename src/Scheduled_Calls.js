import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem, Left, Icon } from 'react-native-elements';

function Scheduled_Calls({ navigation }) {  
    const list = [
        {
            name: 'Sheild Mankind Pfizer',
            subtitle: 'Today, 7:30am'
        },
        {
            name: 'Pfizer Sheild',
            subtitle: '5th June 2021, 9:00pm'
        },
    ]
    return (
        <View style={styles.container}>
        {
            list.map((l, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor: '#ffffff'}}>
                    <ListItem.Content  style={{backgroundColor:'#ffffff'}}>
                        <ListItem.Title style={{color:'#000'}}>{l.name}</ListItem.Title>
                        <ListItem.Subtitle style={{color:'#000'}}>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Icon
                    name= 'play-outline'
                    type='ionicon'
                    color={'#04B536'}
                    onPress={() => console.log('play')}
                    />
                    <Icon
                    name='create-outline'
                    type='ionicon'
                    color={'#04B0D8'}
                    onPress={() => navigation.navigate('Call_Scheduler')}
                    />
                    <Icon
                    name='trash-bin-outline'
                    type='ionicon'
                    color={'#a40b0e'}
                    onPress={() => console.log('delete')}
                    />
                </ListItem>
            ))
        }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});

export default Scheduled_Calls;
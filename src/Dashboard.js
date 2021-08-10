import React,{useState ,useEffect} from 'react';
import { View,StyleSheet,TouchableOpacity,ScrollView,CheckBox,Text } from 'react-native';
import { List, ListItem, Left, Icon,Switch } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { Card,Searchbar } from 'react-native-paper';

const RightSideContent = () => {
    const [isSelected1, setSelection1] = useState(false);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
      <View style={{flexDirection: 'row'}}>
        <Icon name="play-outline" type="ionicon" color="#04B536" size={25}  />
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="#d40000"/>
      </View>
    );
  };

function Dashboard({ navigation }) {  
   
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
   
    return(
        <ScrollView>
            <View style={styles.container}>
                <Searchbar
                    placeholder="Search here..."
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                <Animatable.View  animation="fadeInUpBig" style={{paddingTop:8}}>
                    <Card.Title
                        title="Today, 9:00pm"
                        titleStyle={{fontSize:20}}
                        subtitle="Dr.Brick Wall - Msr. Everhart"
                        right={(props) => <RightSideContent/>  }
                    />  
                    <View style={{flexDirection:'row',marginLeft:12,marginTop:-6}}>
                        <Icon name="location-outline" type="ionicon" color="#afafaf" size={15} />
                        <Text style={{color:'#afafaf'}}>Mumbai</Text>      
                    </View>       
                </Animatable.View>
            </View>
        </ScrollView>
     );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});
export default Dashboard;
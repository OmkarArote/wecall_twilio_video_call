import React from 'react';
import {StyleSheet,View,ScrollView,Text,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AboutUs = ({navigation}) => { 
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.aboutUsContainer}>
                    <Image
                        style={styles.aboutUsInfocisionLogo}
                        source={require('../assets/Infocision-Logo.png')}
                    />
                    <Text style={styles.aboutUsText}>
                    Infocision is focused on providing user friendly, IT solutions to life-science organizations. We work closely with the manufacturers / marketers of medicines and deploy IT systems or tools to overcome their business challenges. 
                    </Text>
                    <Text style={styles.aboutUsText}>
                        We-Call mobile app is one such solution, keeping in mind the requirements of the medical practitioners and the Medical Sales community to effectively deliver face to face detailing call. 
                    </Text>
                    <Text style={styles.aboutUsText}>
                    For any suggestions for improvement or any technical issue with the Mobile app, please mail (from your registered email id) to us at
                        <TouchableOpacity>
                            <Text style={styles.link}>info@infocision.in</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default AboutUs;
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
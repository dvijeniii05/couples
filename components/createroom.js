import React from 'react';

import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
  
} from 'react-native';

import bgImage from '../images/pattern.png'
import { TextInput } from 'react-native-gesture-handler'
import mask from '../images/mask.png'
import Icon from 'react-native-vector-icons/Entypo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Gender from './GenderRoom'
 


const {width: WIDTH} = Dimensions.get('window');

export default function CreateRoom ({navigation}) {

   
        return (

            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                    <StatusBar barStyle="light-content" backgroundColor="#120916" />
            
            <View>
                <Icon name={'mask'} size={23} color={'rgba(255, 255, 255, 1)'} 
                style={styles.usernameIcon}/>
                <TextInput
                style={styles.input}
                    placeholder={'Enter your Nickname'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                    underlineColorAndroid= 'transparent'
                    />
            </View>
            <TouchableOpacity onPress={() => navigation.push('')}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>
                Submit
            </Text>
            </View>

        </TouchableOpacity>

            
        </ImageBackground>
        )
    }


const styles = StyleSheet.create({
    backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    },
     
    input: {
        width: WIDTH - 50,
        height: 45,
        borderRadius: 45,
        fontSize: 15,
        paddingLeft: 80,
        backgroundColor: 'rgba(0,0,0,1)',
        color: 'rgba(255, 255, 255, 1)',
        zIndex: 2,
        

    },
    usernameIcon: {
        position: 'absolute',
        top: 10,
        left: 30,
        zIndex: 3,
    },
    choosing: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(106, 24, 119, 1)'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})



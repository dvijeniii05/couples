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
  
} from 'react-native';

import bgImage from '../images/pattern.png'
import { TextInput } from 'react-native-gesture-handler'
import mask from '../images/mask.png'
import Icon from 'react-native-vector-icons/Entypo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function Gender() {
    return(

        <ImageBackground source={bgImage} style={styles.backgroundContainer}/>

    )
} 

const styles = StyleSheet.create({
    backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    }
}
)

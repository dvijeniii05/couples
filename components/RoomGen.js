import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import {allStyles} from './AllStyles'

import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Button,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';





export default function RoomGen () {

    return(
        <View>
    <View style={allStyles.roomName}>
      <Text style={allStyles.roomText}>Ваша комната:</Text>
      <Text>  </Text>
      <Text style={allStyles.input} 
      placeholder={'Придумайте Название'} 
      placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
      underlineColorAndroid= 'transparent'>"******"</Text>
      </View>
      <View style={allStyles.roomName}>
        <Text style={allStyles.roomText}>Ваш пароль:</Text>
        <Text>  </Text>
      <Text style={allStyles.input} placeholder={'Придумайте Пароль'}>"******"</Text>
      </View>
      </View>
)
    }
    
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

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



const {width: WIDTH} = Dimensions.get('window');

export default function RoomGen () {

    return(
        <View>
    <View style={styles.roomName}>
      <Text style={styles.roomText}>Ваша комната:</Text>
      <Text>  </Text>
      <Text style={styles.roomText}>"******"</Text>
      </View>
      <View style={styles.roomName}>
        <Text style={styles.roomText}>Ваш пароль:</Text>
        <Text>  </Text>
      <Text style={styles.roomText}>"******"</Text>
      </View>
      </View>
)
}



const styles = StyleSheet.create({

roomText:{
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 1
  },
  
  roomName: {
    width: WIDTH - 120,
    marginTop: 80,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(106, 24, 119, 1)'
  },

})
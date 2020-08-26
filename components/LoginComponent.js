import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Button,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  
} from 'react-native';

import firebase from '@react-native-firebase/app'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import bgImage from './images/pattern.png'
import firstbtn from './images/firstneon.png'
import scndbtn from './images/secoondneon.png'
import Icon from 'react-native-vector-icons/Entypo'
import { TextInput } from 'react-native-gesture-handler'

import RoomGen from './components/RoomGen'
import DefaultMsg from './components/DefaultMessage';
import TaskOne from './components/TaskOne'
import TaskTwo from './components/TaskTwo'
import TaskThree from './components/TaskThree'
import TaskFour from './components/TaskFour'
import TaskFive from './components/TaskFive'
import TaskSix from './components/TaskSix'
import TaskSeven from './components/TaskSeven'
import CongratsMsg from './components/CongratsMsg'

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
        }
    }

    onAnonymousLogin = () => {
        firebase.auth().signInAnonymously()
            .then(() => {
                console.log('Login Done')
                this.setState ({
                    isAuthenticated: true,
                })
            })
            .catch((error) => {
                console.log(`Login failed. Error = ${error}`)
            })
    }
    redner() {
        return (
            <View 
            style={{
                
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'white',
            
            }} >
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: "center",
                    margin: 40 
                }}>Login with Firebase</Text>
                <Button containerStyle={{
                    padding: 10,
                    backgroundColor: 'rgba(226,161,184,1)'
                }} style={{
                    fontSize:18,
                    color: 'white'
                }} onPress={this.onAnonymousLogin}>Login anonymous</Button>
                <Text style={{ margin: 20, fontSize: 15, }}>{this.state.isAuthenticated == true? 'Logged in anonymous': '' }</Text>
            </View>
        )
    }
}


<TouchableOpacity onPress={() => this.props.navigation.navigate('GenderRoom')}>
      <View style={styles.buttonSubmit}>
      <Text style={styles.buttonText}>
          Submit
      </Text>
      </View>

  </TouchableOpacity>

const admin = require('firebase-admin');
const admin = require('firebase-admin');  
admin.initializeApp();

let db = admin.firestore();
let docRef = db.collection('users').doc('Room');
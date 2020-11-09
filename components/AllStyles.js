import React from 'react'

import {StyleSheet, Dimensions, StatusBar,} from  'react-native'


const {width: WIDTH} = Dimensions.get('window');
const styles = StyleSheet.create ({

    passwordBox: {
        marginTop:20,
      },
    
      buttonDone2: {
        marginTop: 20,
        marginLeft: 205,
          width: 130,
          borderRadius: 8,
          paddingVertical: 14,
          paddingHorizontal: 10,
          backgroundColor: 'rgba(106, 24, 119, 1)'
      },
    
      MessageText:{
        color: '#AACCFF',
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 1
      },
      
      MessageBG: {
        width: WIDTH - 120,
        marginTop: 80,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#222233',
        marginLeft: 10
      },
      
    secondBg: {
      flex: 1,
      width: WIDTH - 50,
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 20,
      
      backgroundColor: 'rgba(0, 0, 0, 0.67)'
    
    },
    buttonDone: {
      marginTop: 20,
      marginLeft: 230,
        width: 100,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(106, 24, 119, 1)'
    },
      buttonText2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 1
      },
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
      
      
      buttonGender: {
        marginTop: 10,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(106, 24, 119, 1)',
        width: WIDTH - 80,
    
      },
      genderLayout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 30,
        marginBottom: 30,
        
        
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
    buttonSubmit: {
      marginTop: 80,
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
        textAlign: 'center',
        letterSpacing: 1
    },
      backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      container: {
        alignItems: 'center',
      },
    
      button: {
        width: 250,
        height: 250,
      },
    
      button2: {
        width: 250,
        height: 250,
        marginTop: 50
      }
})

export {styles} 
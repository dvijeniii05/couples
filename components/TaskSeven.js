import React from 'react'
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

  export default function TaskSeven() {

  return(
        
          <View style={styles.MessageBG}>
<Text style={styles.MessageText}>
    Ваше седьмое задание. жууууууууууууууууууууужужужужужжужужжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжуууууууууууууужужжужужужжжжжжжжжжжжжжжжжжжжжжжжжжжжжжууууууууууууууууууууууууууууууууууужужжужу.
</Text>
          </View>
    )
  }


  const styles = StyleSheet.create({

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
    })
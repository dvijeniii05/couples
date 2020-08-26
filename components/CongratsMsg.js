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

  export default function CongratsMsg() {

  return(
        
          <View style={styles.MessageBG}>
<Text style={styles.MessageText1}>
    Поздравляем! 
      
</Text>
<Text style={styles.MessageText}>
Надеюсь вам понравились все наши задания. Как только ваш партнёр подтвердит вашу победу, комната будет закрыта!

</Text>
          </View>
    )
  }


  const styles = StyleSheet.create({

    MessageText1:{
        color: '#AACCFF',
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 1,
        textTransform: 'uppercase'
      },
      MessageText:{
        color: '#AACCFF',
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 1,
        
      },
      
      MessageBG: {
        width: WIDTH - 120,
        marginTop: 80,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#222233',
        marginLeft: 35
      },
    })
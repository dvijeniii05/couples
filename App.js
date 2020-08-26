/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
/* Firebase part Next */
import auth from '@react-native-firebase/auth';
import firestore from  '@react-native-firebase/firestore'
import firebase from '@react-native-firebase/app'

/* End of Firebase part */
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







const {width: WIDTH} = Dimensions.get('window');
const {height: HEIGHT} = Dimensions.get('window');



const db = firebase.firestore();


function FirstScreen({navigation}) {


  return(
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#120916" />
        <View style={styles.container}>
          
          <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
            <Image source={firstbtn} style={styles.button} />
          </TouchableOpacity>
         
          <TouchableOpacity onPress={() => navigation.navigate('SecondScreen2')}>
          <Image source={scndbtn} style={styles.button2} />
          </TouchableOpacity>

        </View>

    </ImageBackground>
  );
};

class AuthoristaionPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    }
}


onAnonymousLogin = () => {
  auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
     this.setState ({
                    isAuthenticated: true,
                })
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });
}
render() {
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
      <TouchableOpacity onPress={() => {
        this.props.navigation.navigate('GenderRoom');
        this.onAnonymousLogin()}}>
      <View style={styles.buttonSubmit}>
      <Text style={styles.buttonText}>
          Submit
      </Text>
      </View>

  </TouchableOpacity>
      
  <Text style={{ margin: 20, fontSize: 15, }}>{this.state.isAuthenticated == true? 'Logged in anonymous': '' }</Text>

      
  </ImageBackground>
  
  )
}
}


class SecondScreen2 extends React.Component {

  constructor(props2) {
    super(props2);
}

render() {
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
      <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
      <View style={styles.buttonSubmit}>
      <Text style={styles.buttonText}>
          Submit
      </Text>
      </View>

  </TouchableOpacity>

      
  </ImageBackground>
  
  )
}
}


class LoginScreen extends React.Component {

  constructor(kiki) {
    super(kiki);
    this.state = {
      roomNameToCheck: '',
      roomPassToCheck: '',

    
    }
}
  async  settingPass  ()  {
  const collectionRef = db.collection('Rooms')
  const snapshot =  await collectionRef.where('roomName', '==', this.state.roomNameToCheck).get()
  
  try {
    
    if (snapshot.docs[0].exists){

    const passCheck = snapshot.docs[0].data()

  if (passCheck.roomPass === this.state.roomPassToCheck) {
    this.props.navigation.navigate('ChatRoom')
  } else {
    alert('Пароль введён неверно!')
    console.log('Password or does not match')

}}} catch {
  alert('Комнаты с таким названием не существует')
  console.log('Room does not exist')
}}

render() {
  return (
    

      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
              <StatusBar barStyle="light-content" backgroundColor="#120916" />
      
      <View>
      <Icon name={'login'} size={23} color={'rgba(255, 255, 255, 1)'} 
          style={styles.usernameIcon}/>
          <TextInput
          style={styles.input}
              placeholder={'Room Name'}
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              underlineColorAndroid= {'transparent'}
              onChangeText={(value1) => this.setState({roomNameToCheck: value1})}
              />
      </View>
      <View style={styles.passwordBox} >
          <Icon name={'lock'} size={23} color={'rgba(255, 255, 255, 1)'} 
          style={styles.usernameIcon}/>
          <TextInput
          style={styles.input}
              secureTextEntry={true}
              placeholder={'Password'}
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              underlineColorAndroid= {'transparent'}
              onChangeText={(value2) => this.setState({roomPassToCheck: value2})}
              />
      </View>
      <TouchableOpacity onPress={() => {
        console.log(this.state.roomNameToCheck + this.state.roomPassToCheck);
        this.settingPass()
      }}>
      <View style={styles.buttonSubmit}>
      <Text style={styles.buttonText}>
          Submit
      </Text>
      </View>

  </TouchableOpacity>

      
  </ImageBackground>
  
  )
}
}

class GenderRoom extends React.Component {

  constructor(pupu) {
    super(pupu)
  }
   render() {
  return(

      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
<View style={styles.genderLayout}>
<TouchableOpacity onPress={() => this.props.navigation.navigate('RoomName1')}>
      <View style={styles.buttonGender}>
      <Text style={styles.buttonText}>
          Male + Female
      </Text>
      </View>

  </TouchableOpacity>
  <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomName2')}>
      <View style={styles.buttonGender}>
      <Text style={styles.buttonText}>
          Male + Male
      </Text>
      </View>

  </TouchableOpacity>
  <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomName3')}>
      <View style={styles.buttonGender}>
      <Text style={styles.buttonText}>
          Female + Female
      </Text>
      </View>

  </TouchableOpacity>
  </View>
      </ImageBackground>

  )
}
 }

 class GenderPicker extends React.Component {

  constructor(xoxo) {
    super(xoxo)
  }
   render() {
  return(

      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
<View style={styles.genderLayout}>
<TouchableOpacity onPress={() => this.props.navigation.navigate('ChatRoom')}>
      <View style={styles.buttonGender}>
      <Text style={styles.buttonText}>
          Я мужчина
      </Text>
      </View>

  </TouchableOpacity>
  <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatRoom')}>
      <View style={styles.buttonGender}>
      <Text style={styles.buttonText}>
          Я женщина
      </Text>
      </View>

  </TouchableOpacity>
  
  </View>
      </ImageBackground>

  )
}
 }


class RoomName1 extends React.Component {

  constructor(koko) {
    super(koko)
  } 


  generateRoom = (taskIndex, taskName) => {
    firestore()
    .collection('Rooms')
    .doc('RRN')
    .set({
      roomName: 'Random Name',
      roomPass: 'randompass'
    })
    .then(() => {
      console.log('Room created with roomName and roomPass')
    })
  }

  render() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <RoomGen/> 
      
    
    <TouchableOpacity onPress={() => {
      this.generateRoom();
      this.props.navigation.navigate('GenderPicker')}}>
      <View style={styles.buttonSubmit}>
      <Text style={styles.buttonText2}>
          Войти
      </Text>
      </View> 

  </TouchableOpacity>
    </ImageBackground>
      
  )
} 
}

class RoomName2 extends React.Component {

  constructor(kuku) {
    super(kuku)
  } 
  render() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <RoomGen/> 
      
    
    <TouchableOpacity onPress={() => this.props.navigation.navigate('GenderRoom')}>
      <View style={styles.buttonSubmit}>
      <Text style={styles.buttonText2}>
          Войти
      </Text>
      </View> 

  </TouchableOpacity>
    </ImageBackground>
      
  )
} 
}

class RoomName3 extends React.Component {

  constructor(kaka) {
    super(kaka)
  } 
  render() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <RoomGen/> 
      
    
    <TouchableOpacity onPress={() => this.props.navigation.navigate('GenderRoom')}>
      <View style={styles.buttonSubmit}>
      <Text style={styles.buttonText2}>
          Войти
      </Text>
      </View> 

  </TouchableOpacity>
    </ImageBackground>
      
  )
} 
}

class ChatRoom extends React.Component {
  constructor(zaza) {
    super(zaza);
    this.state = {
      allTasksComplete: false, 
      task1: false,
      task2: false,
      task3: false,
      task4: false,
      task5: false,
      task6: false,
      task7: false, 
      finishedTasks: null,
      zozo: false
    }
    
  }

  generateTask = (taskIndex, taskName) => {
    firestore()
    .collection('Rooms')
    .doc('RRN')
    .collection('Alpha')
    .doc(taskIndex)
    .set({
      taskText: taskName
    })
    .then(() => {
      console.log('Task added')
    })
  }

/*
  updateTask =  taskName => {
    firestore()
    .collection('RRN')
    .doc('Alpha')
    .update({
      taskText: taskName
    })
    .then(() => {
      console.log('Task added')-
    })
  }
*/

  componentDidMount() {
    db.collection('Rooms')
    .doc('RRN')
    .collection('Alpha')
    .get()
    .then( snapshot => {
      const tasks = []
      snapshot.forEach( doc => {
        const data = doc.data()
        tasks.push(data)
      })
      this.setState({
        finishedTasks: tasks
      })

    })
  }


  
  taskOne () {
    if (this.state.task1) {
      return(
        <View>
          <TaskOne/>
          <TouchableOpacity onPress={() => {
            this.generateTask('Task1','First Task');
             this.buttonTaskTwo()
             }} raised ='true' >
      <View style={styles.buttonDone2}>
      <Text style={styles.buttonText2}>
          Выполнено
      </Text>
      </View> 
  </TouchableOpacity>
        </View>
      )
    }
  }

  taskTwo () {
    if (this.state.task2) {
      return(
        <View>
          <TaskTwo/>
          <TouchableOpacity onPress={() => {
            this.generateTask('Task2', 'Second Task'); 
            this.buttonTaskThree()
            }}>
      <View style={styles.buttonDone2}>
      <Text style={styles.buttonText2}>
          Выполнено
      </Text>
      </View> 
  </TouchableOpacity>
        </View>
      )
    }
  }
  taskThree () {
    if (this.state.task3) {
      return(
        <View>
          <TaskThree/>
          <TouchableOpacity onPress={this.buttonTaskFour}>
      <View style={styles.buttonDone2}>
      <Text style={styles.buttonText2}>
      Выполнено
      </Text>
      </View> 
  </TouchableOpacity>
        </View>
      )
    }
  }
  taskFour () {
    if (this.state.task4) {
      return(
        <View>
          <TaskFour/>
          <TouchableOpacity onPress={this.buttonTaskFive}>
      <View style={styles.buttonDone2}>
      <Text style={styles.buttonText2}>
      Выполнено
      </Text>
      </View> 
  </TouchableOpacity>
        </View>
      )
    }
  }
  taskFive () {
    if (this.state.task5) {
      return(
        <View>
          <TaskFive/>
          <TouchableOpacity onPress={this.buttonTaskSix}>
      <View style={styles.buttonDone2}>
      <Text style={styles.buttonText2}>
      Выполнено
      </Text>
      </View> 
  </TouchableOpacity>
        </View>
      )
    }
  }
  taskSix () {
    if (this.state.task6) {
      return(
        <View>
          <TaskSix/>
          <TouchableOpacity onPress={this.buttonTaskSeven}>
      <View style={styles.buttonDone2}>
      <Text style={styles.buttonText2}>
      Выполнено
      </Text>
      </View> 
  </TouchableOpacity>
        </View>
      )
    }
  }
  taskSeven () {
    if (this.state.task7) {
      return(
        <View>
          <TaskSeven/>
          <TouchableOpacity onPress={this.buttonCongrats}>
      <View style={styles.buttonDone2}>
      <Text style={styles.buttonText2}>
      Выполнено
      </Text>
      </View> 
  </TouchableOpacity>
        </View>
      )
    }
  }
  
  
  CongratsMsg () {
    if (this.state.allTasksComplete) {
      return(
        <View>
          <CongratsMsg/>
          <TouchableOpacity onPress={this.lastButton}>
      <View style={styles.buttonDone}>
      <Text style={styles.buttonText2}>
          Получить
      </Text>
      </View> 
  </TouchableOpacity>
        </View>
      )
    }
  }






  lastMessage () {
    if (this.state.zozo) {
      return(
        <View style={styles.MessageBG}>
<View >
    {
      this.state.finishedTasks.map ( task => {
        return (
          <View>
          <Text style={styles.MessageText}>*** {task.taskText} ***</Text>
          
          </View>
        )
      })
    }
</View>
          </View>
      )
    }
  }

  lastButton = () => {
    this.setState({zozo: true})
  }
  
  buttonTaskOne = () => {
    this.setState({task1: true})
  }

  buttonTaskTwo = () => {
    this.setState({task2: true})
  }
  buttonTaskThree = () => {
    this.setState({task3: true})
  }
  buttonTaskFour = () => {
    this.setState({task4: true})
  }
  buttonTaskFive = () => {
    this.setState({task5: true})
  }
  buttonTaskSix = () => {
    this.setState({task6: true})
  }
  buttonTaskSeven = () => {
    this.setState({task7: true})
  }
  buttonCongrats = () => {
    this.setState({allTasksComplete: true}) 
  }
  


  render() {
    return(
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
       <ScrollView style={styles.secondBg}>
      <DefaultMsg />
    
    <TouchableOpacity onPress={this.buttonTaskOne}>
      <View style={styles.buttonDone}>
      <Text style={styles.buttonText2}>
          Начать!
      </Text>
      </View> 
      

  </TouchableOpacity>
  <View>
  
    {this.taskOne()}
        
  </View>
  <View>

    {this.taskTwo()}

  </View>
  <View>

    {this.taskThree()}

  </View>
  <View>

    {this.taskFour()}

  </View>
  <View>

    {this.taskFive()}

  </View>
  <View>

    {this.taskSix()}

  </View>
  <View>

    {this.taskSeven()}

  </View>
  <View>

    {this.CongratsMsg()}
    
  </View>
  <View>

    {this.lastMessage()}
    
  </View>
  </ScrollView>
    </ImageBackground>
    )
  }

}


const styles = StyleSheet.create({

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
});

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator headerMode='none' >
        <Stack.Screen name ='FirstScreen' component={FirstScreen}/>
        <Stack.Screen name ='SecondScreen' component={AuthoristaionPage}/>
        <Stack.Screen name ='SecondScreen2' component={SecondScreen2}/>
        <Stack.Screen name ='GenderPicker' component={GenderPicker}/>
        <Stack.Screen name ='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name ='GenderRoom' component={GenderRoom}/>
        <Stack.Screen name = 'RoomName1' component={RoomName1}/>
        <Stack.Screen name = 'RoomName2' component={RoomName2}/>
        <Stack.Screen name = 'RoomName3' component={RoomName3}/>
        <Stack.Screen name = 'ChatRoom' component={ChatRoom}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
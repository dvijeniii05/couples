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
import firestore from '@react-native-firebase/firestore'
import firebase from '@react-native-firebase/app'

/* End of Firebase part */
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import splashScreen from './images/splashScreen.png'
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
import { styles } from './components/AllStyles'


import AsyncStorage from '@react-native-async-storage/async-storage'





const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');



const db = firebase.firestore();
const collectionRef = db.collection('Rooms')


function FirstScreen({ navigation }) {


  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#120916" />
      <View style={styles.container}>

        <TouchableOpacity onPress={() => navigation.navigate('AuthoristaionPage')}>
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
      isAuthenticated: false,
      nickname: 'no'
    }
  }


  onAnonymousLogin = () => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
        this.setState({
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

  async rememberNick () {

    if (this.state.nickname === 'no')
    {
      alert('Пожалуйста введите Никнейм')
    } else {
      try {
    await AsyncStorage.setItem('nickname', this.state.nickname)
    this.props.navigation.navigate('GenderRoom');
    
    } catch(e) {
      console.log(e)
      alert('Что-то не так')
    }
  }
}

  render() {
    return (


      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#120916" />

        <View>
          <Icon name={'mask'} size={23} color={'rgba(255, 255, 255, 1)'}
            style={styles.usernameIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Enter your Nickname'}
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
            underlineColorAndroid='transparent'
            onChangeText={(newnick) => this.setState({nickname: newnick})}

          />
        </View>
        <TouchableOpacity onPress={() => {
          
          this.rememberNick();
          this.onAnonymousLogin()
        }}>
          <View style={styles.buttonSubmit}>
            <Text style={styles.buttonText}>
              Submit
      </Text>
          </View>

        </TouchableOpacity>

        <Text style={{ margin: 20, fontSize: 15, }}>{this.state.isAuthenticated == true ? 'Logged in anonymous' : ''}</Text>


      </ImageBackground>

    )
  }
}


class SecondScreen2 extends React.Component {

  constructor(props2) {
    super(props2);
    this.state = {
      nickname:'no',
    }
    
  }

  async rememberNick () {

    if (this.state.nickname === 'no')
    {
      alert('Пожалуйста введите Никнейм')
    } else {
      try {
    await AsyncStorage.setItem('nickname', this.state.nickname)
    this.props.navigation.navigate('LoginScreen');
    
    } catch(e) {
      console.log(e)
      alert('Что-то не так')
    }
  }
}
  
  render() {
    return (


      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#120916" />

        <View>
          <Icon name={'mask'} size={23} color={'rgba(255, 255, 255, 1)'}
            style={styles.usernameIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Enter your Nickname'}
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
            underlineColorAndroid='transparent'
            onChangeText={(newnick) => this.setState({nickname: newnick})}
            
          />
        </View>
        <TouchableOpacity onPress={() => {
          this.rememberNick()
          
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


class LoginScreen extends React.Component {

  constructor(kiki) {
    super(kiki);
    this.state = {
      roomNameToCheck: '',
      roomPassToCheck: '',


    }
  }
  async settingPass() {
    
    if (this.state.roomNameToCheck !== '' && this.state.roomPassToCheck !== '') {
    const snapshot = await collectionRef.where('roomName', '==', this.state.roomNameToCheck).get()

    try {

      if (snapshot.docs[0].exists) {

        const passCheck = snapshot.docs[0].data()

        if (passCheck.roomPass === this.state.roomPassToCheck) {
          this.props.navigation.navigate('ChatRoom')
        } else {
          alert('Пароль введён неверно!')
          console.log('Password or does not match')

        }
      }
    } catch {
      alert('Комнаты с таким названием не существует')
      console.log('Room does not exist')
    }
  } else {
alert('Пожалуйста введите данные')
    }
  }

  render() {
    return (


      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#120916" />

        <View>
          <Icon name={'login'} size={23} color={'rgba(255, 255, 255, 1)'}
            style={styles.usernameIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Room Name'}
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
            underlineColorAndroid={'transparent'}
            onChangeText={(value1) => this.setState({ roomNameToCheck: value1 })}
          />
        </View>
        <View style={styles.passwordBox} >
          <Icon name={'lock'} size={23} color={'rgba(255, 255, 255, 1)'}
            style={styles.usernameIcon} />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder={'Password'}
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
            underlineColorAndroid={'transparent'}
            onChangeText={(value2) => this.setState({ roomPassToCheck: value2 })}
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
    return (

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

  async maybe ()  {
    const trytextx = await AsyncStorage.getItem('currentRoom')
  const trial = JSON.parse(trytextx)
  console.log(trial)
  }

  render() {
    return (

      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.genderLayout}>
          <TouchableOpacity onPress={() => {
            this.maybe();
            this.props.navigation.navigate('ChatRoom')
          
          }
            }>
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
    super(koko);
    this.state = {
      NewRoom: '',
      NewPass: ''
    }
  }
  async generateRoom() {
    const nicknameCreator = await AsyncStorage.getItem('nickname')
    const snapshot = await collectionRef.where('roomName', '==', this.state.NewRoom).get()
if ( this.state.NewRoom !== '' && this.state.NewPass !== '') {

    try {
      if (snapshot.empty) {

        firestore()
          .collection('Rooms')
          .doc(this.state.NewRoom)
          .set({
            roomName: this.state.NewRoom,
            roomPass: this.state.NewPass,
            creator: nicknameCreator,
            
          })
          .then(
            await AsyncStorage.setItem('currentRoom', JSON.stringify(this.state.NewRoom)),
            
            console.log(
              this.state.NewRoom, this.state.NewPass)

          )

        await AsyncStorage.setItem('task1', JSON.stringify(false))
        await AsyncStorage.setItem('task2', JSON.stringify(false))
        await AsyncStorage.setItem('task3', JSON.stringify(false))
        await AsyncStorage.setItem('task4', JSON.stringify(false))
        await AsyncStorage.setItem('task5', JSON.stringify(false))
        await AsyncStorage.setItem('task6', JSON.stringify(false))
        await AsyncStorage.setItem('task7', JSON.stringify(false))
        
        

        this.props.navigation.navigate('GenderPicker')
      } else {
        alert('Комната с таким названием уже существует.')
      } 
    } catch (err) {
      console.log(err)
      alert('Наш сервер испытывает сложности')
    }
  }
  else {
    alert('Пожалуйста введите данные')
  }
} 
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#120916" />

        <View>
          <Icon name={'login'} size={23} color={'rgba(255, 255, 255, 1)'}
            style={styles.usernameIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Название Комнаты'}
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
            underlineColorAndroid={'transparent'}
            onChangeText={(maybe1) => this.setState({ NewRoom: maybe1 })}
          />
        </View>
        <View style={styles.passwordBox} >
          <Icon name={'lock'} size={23} color={'rgba(255, 255, 255, 1)'}
            style={styles.usernameIcon} />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder={'Пароль'}
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
            underlineColorAndroid={'transparent'}
            onChangeText={(maybe2) => this.setState({ NewPass: maybe2 })}
          />
        </View>

        <TouchableOpacity onPress={() => {
          this.generateRoom();
        }}>
          <View style={styles.buttonSubmit}>
            <Text style={styles.buttonText2}>
              Создать
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
        <RoomGen />


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
        <RoomGen />


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
      zozo: false,
      newRoomName: '',
      creator: '',
    }

  }




  generateTask =  async (taskIndex, taskName) => {

    const creatorCheck = await AsyncStorage.getItem('nickname')
    this.setState({creator: creatorCheck})
    
  const nicknameSnap = await collectionRef.where('roomName', '==', this.state.newRoomName).get()
   const nickCheck = nicknameSnap.docs[0].data()
   
   
    if(nickCheck.creator === this.state.creator) {

    firestore()
      .collection('Rooms')
      .doc(this.state.newRoomName)
      .collection('Alpha')
      .doc(taskIndex)
      .set({
        taskText: taskName
      })
      .then(() => {
        console.log('Task added')
      })
    }
  else {
    firestore()
      .collection('Rooms')
      .doc(this.state.newRoomName)
      .collection('Beta')
      .doc(taskIndex)
      .set({
        taskText: taskName
      })
      .then(() => {
        console.log('Task added')
      })
  } }

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

  async componentDidMount() {
    try {
      

      const trytextx = await AsyncStorage.getItem('currentRoom')
      const trial = JSON.parse(trytextx)

    const maybe1 = await AsyncStorage.getItem('task1')
    const string1 = JSON.parse(maybe1)

    const maybe2 = await AsyncStorage.getItem('task2')
    const string2 = JSON.parse(maybe2)
    
    const maybe3 = await AsyncStorage.getItem('task3')
    const string3 = JSON.parse(maybe3)

    const maybe4 = await AsyncStorage.getItem('task4')
    const string4 = JSON.parse(maybe4)

    const maybe5 = await AsyncStorage.getItem('task5')
    const string5 = JSON.parse(maybe5)

    const maybe6 = await AsyncStorage.getItem('task6')
    const string6 = JSON.parse(maybe6)

    const maybe7 = await AsyncStorage.getItem('task7')
    const string7 = JSON.parse(maybe7)

      this.setState({newRoomName: trial})

      if (string1 === false) {
      this.setState({task1: false})
    } else {
    this.setState({ task1: string1 }) 
    }

    if (string2 === false) {
      this.setState({task2: false})
    } else {
    this.setState({ task2: string2 }) 
    }

    if (string3 === false) {
      this.setState({task3: false})
    } else {
    this.setState({ task3: string3 }) 
    }

    if (string4 === false) {
      this.setState({task4: false})
    } else {
    this.setState({ task4: string4 }) 
    }

    if (string5 === false) {
      this.setState({task5: false})
    } else {
    this.setState({ task5: string5 }) 
    }

    if (string6 === false) {
      this.setState({task6: false})
    } else {
    this.setState({ task6: string6 }) 
    }

    if (string7 === false) {
      this.setState({task7: false})
    } else {
    this.setState({ task7: string7 }) 
    }
  } catch (e) {
    console.log(e)
  }
      

    
    
    db.collection('Rooms')
      .doc('RRN')
      .collection('Alpha')
      .get()
      .then(snapshot => {
        const tasks = []
        snapshot.forEach(doc => {
          const data = doc.data()
          tasks.push(data)
        })
        this.setState({
          finishedTasks: tasks
        })

      })
  }



  taskOne() {
    if (this.state.task1) {
      return (
        <View>
          <TaskOne />
          <TouchableOpacity onPress={() => {
            this.generateTask('Task1', 'First Task');
            this.buttonTaskTwo()
          }} raised='true' >
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

  taskTwo() {
    if (this.state.task2) {
      return (
        <View>
          <TaskTwo />
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
  taskThree() {
    if (this.state.task3) {
      return (
        <View>
          <TaskThree />
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
  taskFour() {
    if (this.state.task4) {
      return (
        <View>
          <TaskFour />
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
  taskFive() {
    if (this.state.task5) {
      return (
        <View>
          <TaskFive />
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
  taskSix() {
    if (this.state.task6) {
      return (
        <View>
          <TaskSix />
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
  taskSeven() {
    if (this.state.task7) {
      return (
        <View>
          <TaskSeven />
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


  CongratsMsg() {
    if (this.state.allTasksComplete) {
      return (
        <View>
          <CongratsMsg />
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






  lastMessage() {
    if (this.state.zozo) {
      return (
        <View style={styles.MessageBG}>
          <View >
            {
              this.state.finishedTasks.map(task => {
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

  lastButton = async () => {
    this.setState({ zozo: true })

}

  buttonTaskOne = async () => {
    this.setState({ task1: true })
    try {
    
      await AsyncStorage.setItem('task1', JSON.stringify(true))
      
  } catch (e) {
    console.log(e)
  }
}

  buttonTaskTwo = async () => {
    this.setState({ task2: true })

    try {
      
        await AsyncStorage.setItem('task2', JSON.stringify(true))
        
    } catch (e) {
      console.log(e)
    }
    
  }
  buttonTaskThree = async () => {
    this.setState({ task3: true })
    try {
      
        await AsyncStorage.setItem('task3', JSON.stringify(true))
        
    } catch (e) {
      console.log(e)
    }
  }
  buttonTaskFour = async () => {
    this.setState({ task4: true })
    try {
      
        await AsyncStorage.setItem('task4', JSON.stringify(true))
        
    } catch (e) {
      console.log(e)
    }
    
  }
  buttonTaskFive = async() => {
    this.setState({ task5: true })
    try {
      
        await AsyncStorage.setItem('task5', JSON.stringify(true))
        
    } catch (e) {
      console.log(e)
    }
  }
  buttonTaskSix = async () => {
    try {
      
        await AsyncStorage.setItem('task6', JSON.stringify(true))
        
    } catch (e) {
      console.log(e)
    }
  }
  buttonTaskSeven = async () => {
    this.setState({ task7: true })
    try {
      
        await AsyncStorage.setItem('task7', JSON.stringify(true))
        
    } catch (e) {
      console.log(e)
    }
  }
  buttonCongrats = () => {
    this.setState({ allTasksComplete: true })
  }



  render() {
    return (
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



function LoadingScreen({ navigation }) {
  setTimeout(() => {
    navigation.replace('FirstScreen');
  }, 4000);
  return (
    <ImageBackground style={styles.backgroundContainer} source={splashScreen} />


  );

};



const Stack = createStackNavigator();
const PERSISTENCE_KEY = 'NAVIGATION_STATE';

function App() {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {

        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = savedStateString ? JSON.parse(savedStateString) : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }

      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return <ImageBackground style={styles.backgroundContainer} source={splashScreen} />
  }



  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) =>

        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))

      }
    >
      <Stack.Navigator initialRouteName='SplashScreen' headerMode='none' >
        <Stack.Screen name='SplashScreen' component={LoadingScreen} />
        <Stack.Screen name='FirstScreen' component={FirstScreen} />
        <Stack.Screen name='AuthoristaionPage' component={AuthoristaionPage} />
        <Stack.Screen name='SecondScreen2' component={SecondScreen2} />
        <Stack.Screen name='GenderPicker' component={GenderPicker} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='GenderRoom' component={GenderRoom} />
        <Stack.Screen name='RoomName1' component={RoomName1} />
        <Stack.Screen name='RoomName2' component={RoomName2} />
        <Stack.Screen name='RoomName3' component={RoomName3} />
        <Stack.Screen name='ChatRoom' component={ChatRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
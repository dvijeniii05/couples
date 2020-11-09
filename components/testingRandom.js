buttonRandom = () => {
    let randArray = ['one', 'two', 'three' , 'four'] 
  let randomNumber = randArray[Math.floor(Math.random() * randArray.length)];
   this.setState({numberGen: randomNumber,
                  firstRand: randomNumber });
   
  }

  buttonRandom2 = () => {
    let rondoArray = ['one', 'two', 'three', 'four']
    let {firstRand} = this.state.firstRand;
    let index = rondoArray.indexOf({firstRand})
     let newArray = rondoArray.slice(0, index).concat(rondoArray.slice(index + 1, rondoArray.length)) /* issue is here */
    let randomKoko = newArray[Math.floor(Math.random() * newArray.length)]
    this.setState({ numberGen2: randomKoko,
      secondRand: randomKoko})
  }



  <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatRoom')}>
    </TouchableOpacity>



if (passCheck.roomPass === this.state.roomPassToCheck) {
  this.props.navigation.navigate('ChatRoom')
} else {
  console.log('Passwords dont match')
}



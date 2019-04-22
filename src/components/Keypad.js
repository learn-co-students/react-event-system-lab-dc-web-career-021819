// Code Keypad Component Here
import React, {Component} from 'react'

class CodeKeypad extends Component {

  logToConsole = () => {
    console.log("Entering password...")
  }

  render(){
    return <input onKeyUp={this.logToConsole} type="password"/>
  }


}

export default CodeKeypad

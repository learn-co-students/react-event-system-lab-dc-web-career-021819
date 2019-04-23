import React, { Component } from "react";

class Keypad extends Component {

  keyUpEventHandler = () => console.log("Entering password...");

  render(){
    return (
      <input type="password" onKeyUp={this.keyUpEventHandler}/>
    )
  }
}

export default Keypad;

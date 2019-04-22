import React, { Component } from 'react';

class Keypad extends Component {

  render() {
    const message = () => console.log("Entering password...")

    return (
      <input type="password" onKeyUp={message}/>
    );
  }

}

export default Keypad;

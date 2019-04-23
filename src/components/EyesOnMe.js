import React, { Component } from "react";

class EyesOnMe extends Component {

  onFocusEventHandler = () => console.log("Good!");

  onBlurEventHandler = () => console.log("Hey! Eyes on me!");

  render(){
    return (
      <button onFocus={this.onFocusEventHandler} onBlur={this.onBlurEventHandler} />
    )
  }
}

export default EyesOnMe;

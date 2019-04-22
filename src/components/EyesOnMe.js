import React, { Component } from 'react';

class EyesOnMe extends Component {


  render() {
    const focus = () => console.log("Good!")

    const blur = () => console.log("Hey! Eyes on me!")

    return (
      <button onFocus={focus} onBlur={blur}></button>
    );
  }

}

export default EyesOnMe;

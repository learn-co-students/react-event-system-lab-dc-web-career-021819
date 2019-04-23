import React from 'react';
class Keypad extends React.Component {
  typingPass = () => console.log('Entering password...')
  render () {
    return (
      <input
        type='password'
        onKeyUp={this.typingPass}>
      </input>
    )
  }
}
export default Keypad;

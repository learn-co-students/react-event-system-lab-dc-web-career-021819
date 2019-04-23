import React, {Component} from 'react'

class Keypad extends Component {
  // keyMessage = () => console.log('Entering password...')

  render() {
    return(
      <input type="password" onKeyUp={() => console.log('Entering password...')}/>
    )
  }
}
export default Keypad

// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends React.Component {

  handleInputPassword = () => console.log('Entering password...')

  render() {
    return (
      <div>Keypad
      <input type="password" name="name" onKeyUp={this.handleInputPassword} />
      </div>
    )
  }
}

export default Keypad;

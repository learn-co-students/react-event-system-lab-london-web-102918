// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  enteringPassword = () => (
    console.log('Entering password...')
  )

  render() { 
    return (
      <input type="password" name="" id="" onKeyUp={this.enteringPassword}/>
    );
  }
}
 
export default Keypad;
// Code EyesOnMe Component Here
// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends React.Component {

  handleOnFocus = () => console.log('Good!')

  handleOnBlur = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <div>
      <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>  EyesOnMe </button>
      </div>

    )
  }
}

export default EyesOnMe;

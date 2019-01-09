// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

  render() {
    return (
      <div>
      <button
      onFocus={() => console.log('Good!')}
      onBlur={() => console.log('Hey! Eyes on me!')}>Eyes on me, please!</button>
      </div>
    )
  }

}

export default EyesOnMe;
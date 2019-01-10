// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

    onBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    onFocus = () => {
        console.log('Good!')
    }


    render () {
        return (
            <div>
                <button onBlur={this.onBlur} onFocus={this.onFocus}>
                    Button
                </button>
            </div>
        )
    }
}

export default EyesOnMe
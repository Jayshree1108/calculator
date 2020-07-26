//it is a class component
import React, { Component } from 'react';

class Operations extends Component {

    constructor(props){
        super(props);
        this.state = {
        username : ''
      }
    }       

    updateInput = (event) => {
        this.setState({ username: event.target.value })
    }


    handleSubmit = () => {
        console.log('Your input value is: ' + this.state.username)
        //Send state to the server code
    }
    render() {
        return (
            <div>
                <h1>Operations</h1>
            </div>
        )
    }
}

export default Operations;
//it is a class component
import React, {Component} from 'react';

class Welcome extends Component{
    render(){
        return (
        <div>
            <h1>WELCOME Class COMP {this.props.name} aks {this.props.anyName}</h1>
            {this.props.children}
        </div>
        )
    }
}

export default Welcome;
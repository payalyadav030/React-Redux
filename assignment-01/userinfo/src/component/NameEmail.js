import React, { Component } from 'react';

class NameEmail extends Component{
    render(){
        return(
            <div className="nameEmail">
                <input onChange={(event)=>this.props.getUserName(event.target.value)} type="text" placeholder="name"></input>
                <input onChange={(event)=>this.props.getUserEmail(event.target.value)} type="text" placeholder="email"></input>
            </div>
        )
    }
}

export default NameEmail;
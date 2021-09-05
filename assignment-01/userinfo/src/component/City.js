import React, { Component } from 'react';

class City extends Component{
    render(){
        return(
            <div className="city">
                <input onChange={(event)=>this.props.getUserCity(event.target.value)} 
                type="text" placeholder="city"></input>
            </div>
        )
    }
}

export default City;
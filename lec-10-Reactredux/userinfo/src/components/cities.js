import React, { Component } from 'react';

class Cities extends Component{
    render(){
        // console.log(this.props)
        return(
            <div className="cities">
                cities
                <ul>
                    {this.props.citiDetails.map((city, index)=>{
                        return(
                            <li key={index}>{city}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Cities;
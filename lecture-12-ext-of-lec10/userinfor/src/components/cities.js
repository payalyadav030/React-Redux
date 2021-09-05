import React, { Component } from 'react';
import {connect} from 'react-redux'

class Cities extends Component{
    render(){
        // console.log(this.props)
        return(
            <div className="cities">
                cities
                <ul>
                    {this.props.cities && this.props.cities.map((city, index)=>{
                        return(
                            <li key={index}>{city}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        cities:state.cities
    }
}
export default connect(mapStateToProps)(Cities)
// export default Cities;
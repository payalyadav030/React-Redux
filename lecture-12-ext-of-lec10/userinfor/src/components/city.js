import React, { Component } from 'react';
import { connect } from "react-redux";

class City extends Component{
    render(){
        console.log("City Comp props", this.props)
        return(
            <div className="city">
                <input 
                onChange={(event)=>this.props.handleCityChange({type:"user_city_change", payload: event.target.value})} 
                type="text" placeholder="city"
                value={this.props.userCity}
                />
            </div>
        )
    }
}
const giveDataFromReduxToReact =(state)=>{
    console.log("City Comp redux state", state)
    return {
        userCity : state.city
    }
}
const takeActionsFromReactToRedux = (dispatch)=>{
    console.log("City Comp dispatch func", dispatch)
    return {
        handleCityChange : dispatch
    }
}


export default connect(giveDataFromReduxToReact, takeActionsFromReactToRedux)(City)

// export default City;

/* 
1. the store is exposed to us-DONE
2. We need to connect to the store - connect func
3. Connect functions's job-
    1. To get state from redux, expose it to the react comp through props
    2. to get dispatch function from redux expose it to react through props

4. export connect func after wrapping this component
*/
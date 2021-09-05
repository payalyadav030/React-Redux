import React, { Component } from 'react';
import { connect } from 'react-redux';

// CONNECT function - it takes both state and dispatch fun from store and expose it to react through props

class NameEmail extends Component{

    handleNameChange=(value)=>{
        // console.log("handleNameChange", value)
        /* 
        action => object
        {
            type:"",
            data/ abc/ payload:""
        }
        */
        let action ={
            type: "user_name_change",
            payload:value
        }
        this.props.handleNameChange(action)
    }


    handleEmailChange=(value)=>{
        // console.log("handleEmailChange", value)
        this.props.handleEmailChange({ type:"user_email_change", payload:value})

    }


    render(){
        // console.log("NameEmail props", this.props)
        return(
            <div className="nameEmail">
                <input 
                    value={this.props.userName} 
                    type="text" placeholder="name"
                    onChange={(event)=> this.handleNameChange(event.target.value)}
                />
                <input  
                    value={this.props.userEmail}
                    type="text" placeholder="email"
                    onChange={(event)=> this.handleEmailChange(event.target.value)}
                />
            </div>
        )
    }
}
const giveDataFromReduxToReactComp = (state)=>{
    // take the state from redux , expose it to react comp through props
    // console.log("giveDataFromReduxToReactComp", state)
    return {
        userName : state.name,
        userEmail : state.email
    }
}

const giveReduxChangeRequestFromReactComp = (dispatch)=>{
    // to take the dispatch func from redux and expose it as props to react comp
    // console.log("giveReduxChangeRequestFromReactComp", dispatch)
    return {
        handleNameChange : dispatch,
        handleEmailChange: dispatch
    }
}



// export default NameEmail;
export default connect(giveDataFromReduxToReactComp, giveReduxChangeRequestFromReactComp) (NameEmail)




// //////////////////////////////////////////////////
/*
Job of connect func:
1. To give data from redux state to react component.
2. Take change request from react component to the redux state.
*/

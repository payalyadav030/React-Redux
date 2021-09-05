import React, { Component } from 'react';
import NameEmail from './nameEmail';
import City from './city';
import { connect } from 'react-redux';

class UserInput extends Component{
    // in redux, we are not supposed to hold any state locally, so commenting this or removing this:
   // // state={
        //     name:"",
        //     email:"",
        //     city:""
   // // }
    // userName=(userName)=>{
    //     console.log(userName, "username")
    // }
    render(){
        return(
            
            <div className="userInput">
                UserInput
                
                <NameEmail/> 
                 <City /> 
                 <button onClick={()=>this.props.dispatch({type:"add_user_data"})}>Submit</button>
                
            </div>
        )
    }
}

export default connect()(UserInput)
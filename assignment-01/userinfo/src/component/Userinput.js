import React, { Component } from 'react';
import NameEmail from './NameEmail';
import City from './City';

class UserInput extends Component{
    state={
        name:"",
        email:"",
        city:""
    }
    // userName=(userName)=>{
    //     console.log(userName, "username")
    // }
    render(){
        return(
            <div className="userInput">
                <NameEmail 
                getUserName ={(name)=>this.setState(
                    { name:name}
                    )}
                getUserEmail ={(email)=>this.setState(
                    {email:email}
                    )}
                />
                 <City getUserCity={(city)=>this.setState(
                     { city:city }
                     )}/>
                 <button onClick={()=>this.props.getUserData(this.state)}>Submit</button>
                
            </div>
        )
    }
}

export default UserInput;
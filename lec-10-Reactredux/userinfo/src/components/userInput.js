import React, { Component } from 'react';
import NameEmail from './nameEmail';
import City from './city';

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
                {/* So we have dont pass any props from here, just NameEmail component will be called(same for city comp)
                    /* getUserName ={(name)=>this.setState(
                    //     { name:name}
                    //     )}
                    // getUserEmail ={(email)=>this.setState(
                    //     {email:email}
                    //     )} */}
                
                 <City /> 
                 {/*getUserCity={(city)=>this.setState(
                     { city:city }
                     )} */}
                 <button onClick={()=>this.props.getUserData(this.state)}>Submit</button>
                
            </div>
        )
    }
}

export default UserInput;
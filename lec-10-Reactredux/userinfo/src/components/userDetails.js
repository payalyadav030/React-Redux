import React, { Component } from 'react';

class UserDetails extends Component{
    render(){
        // console.log("userdetails", this.props)
        return(
            <div className="userDetails">
                user details
                <ul>
                    {this.props.userDetails.map((user, index)=>{
                         return(
                             <li key={index}>{user.name}-- {user.email}-- {user.city}</li>
                         )
                    })}
                </ul>
            </div>
        )
    }
}
export default UserDetails;
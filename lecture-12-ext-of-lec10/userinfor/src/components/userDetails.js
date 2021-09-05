import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component{
    render(){
        console.log("userdetails", this.props)
        return(
            <div className="userDetails">
                user details
                <ul>
                    { this.props.userDetails &&  this.props.userDetails.map((user, index)=>{
                         return(
                             <li key={index}>{user.name}-- {user.email}-- {user.city}</li>
                         )
                    })}
                </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        userDetails:state.userDetails
    }
}
// const mapDispatchToProps=(dispatch)=>{

// }
export default connect(mapStateToProps)(UserDetails)
//export default UserDetails;
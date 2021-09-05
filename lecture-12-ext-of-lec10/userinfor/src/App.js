import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import UserInput from './components/userInput';
import UserDetails from './components/userDetails';
import Cities from './components/cities';
//import Input from './components/input';

// connecting to the store with connect function, first importing it:
import { connect } from 'react-redux'

class App extends Component{
//   state={
//     userDetails:[],
//     cities:[],
//     // name:"Payal"
//   }

  addUserDataToList=(data)=>{
    // console.log(data)
    var users = this.state.userDetails.slice();
    // for unique cities logic
    var city = this.state.cities.slice();
    if(city.indexOf(data.city)===-1){
      city.push(data.city)
    }
    users.push(data)
    this.setState({
      userDetails:users,
      cities:city
    }, ()=>{
      console.log(this.state)
    })
    

  }

  // for input componenet, changing name in input field:
//   handleChangeInput=(value)=>{
//     // console.log(value);
//     this.setState({
//       name:value
//     })

//   }

  render(){
    return(
      
    <div className="wrapper">
        
        {/* <input type="text" 
              placeholder="Enter your name"
              value={this.props.name}
              // onChange={(event)=>this.handleChangeInput(event.target.value)}
              onChange={(event)=>this.props.dispatch({type:"change_user_name", payload:event.target.value})} >
        </input> */}
        {/* <div>Hello, my name is {this.props.name} </div> */}
        
      {/* right now working with just one component i.e my input component for changing value using local state, but main 
         objective is to do this with redux */}
         {/* <Input/> */}
            <UserInput getUserData={(data)=>this.addUserDataToList(data)} />
             <div className="lists">
                <UserDetails />
                <Cities />
            </div> 
           
    </div>
    )
  }
}
// mapStateToProps = giving my redux state to props(whos props, to components props) and prop is what - a simple object
// const mapStateToProps =(state)=>{
//   console.log("App state here:", state)
//   return {
//     name:state.name
//   }
// }
// export default connect(mapStateToProps)(App);


export default App;





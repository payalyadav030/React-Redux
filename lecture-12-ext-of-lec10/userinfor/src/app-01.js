// 1. this appjs-01 file is for understanding the working of redux with a small input component example 
// 2. and app js file(earlier one) is for making the assignment of last lect10 video- userinfo using redux.

import './App.css';
import React, { Component } from 'react';
import UserInput from './components/userInput';
import UserDetails from './components/userDetails';
import Cities from './components/cities';
import Input from './components/input';

import { connect } from 'react-redux'

class App extends Component{
//   state={
//     userDetails:[],
//     cities:[],
//     name:"Payal"
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
  render(){
    console.log("App props:",this.props)
    return(
      
      <div className="wrapper">
        
        <div>Hello, my name is {this.props.name} </div>
        
        {/* right now working with just one component i.e my input component for changing value using local state, but main 
        objective is to do this with redux */}
        <Input 
        // name={this.state.name} changeName={(name)=>this.setState({name:name})}  no need to pass props like this,directly talkto global state
        />

          
           
      </div>
     
    )
  }
}
// mapStateToProps = giving my redux state to props(whos props, to components props) and prop is what - a simple object
const mapStateToProps =(state)=>{
  console.log("App state here:", state)
  return {
    name:state.name
  }
}
export default connect(mapStateToProps)(App);


// export default App;

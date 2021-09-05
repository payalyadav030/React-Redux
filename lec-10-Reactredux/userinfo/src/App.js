// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import UserInput from './components/userInput';
import UserDetails from './components/userDetails';
import Cities from './components/cities';

class App extends Component{
  state={
    userDetails:[],
    cities:[]
  }
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
    return(
      <div className="wrapper">
        App
            <UserInput getUserData={(data)=>this.addUserDataToList(data)} />
            <div className="lists">
               <UserDetails userDetails={this.state.userDetails}/>
               <Cities citiDetails={this.state.cities}/>
            </div>
           
      </div>
     
    )
  }
}
export default App;

// 2. Through props: get whatever channels they need through props- connect function:


// 3. There should be for you to raise changes-
// should be able to use the function the service provider gave you - (dispatch function) to triger changes then send 
// in your "CHANGE REQUEST DETAILS" i.e - action 



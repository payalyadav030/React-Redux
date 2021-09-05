// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import UserInput from './component/Userinput';
import UserDetails from './component/UserDetails';
import Cities from './component/Cities';

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
        if(city.indexOf(data.city)==-1){
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

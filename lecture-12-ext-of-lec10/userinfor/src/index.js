import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import App from './app-01'
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store  from  './Redux/state'; // for making the userinfo assignment using redux, with this statejs file
//import store from './Redux/demonstate'   // for understanding redux working with example made this state file

//console.log("redux store here",  store)

ReactDOM.render(
  // 1. expose the family to service provider
  // here we will expose the redux STORE, to the React application
  // exposed the store(i.e my redux to react part by using provider)
  <Provider store={store}>   
      <App />
  </Provider>, 
  document.getElementById('root')

  // now after exposing u hve to go to app component to connect->
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();








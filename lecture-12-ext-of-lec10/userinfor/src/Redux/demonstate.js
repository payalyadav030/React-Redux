import {createStore} from "redux";

// using this js file for storing my state: 
// 1. create that common data state:
let appState ={
    name:"ram shyam"
}

// 2. create a function which will return this state, initially the initial state,then the state after update.
// state means - the state that it will return , intitally it will return th default and after making changes it will return the upadte state.
// actions- accepting the change requests that are coming in.
function appReducer(state = appState, action){
    // console.log("Actions", actions)
    let stateCopy= {...state}   //creating copy of the state, because we never directly make changes in the state
    switch(action.type){
        case "change_user_name":
            stateCopy.name= action.payload
            return stateCopy
            
    }
    return state;
}

// 3. create a package using this state and a few other things.
// how to create a package: importing creatStore from redux:
let store = createStore(appReducer)
// console.log("new store:", store)  // now we have to expose our redux to react at entry level i.e in indexjs

export default store
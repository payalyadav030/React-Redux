import {createStore} from 'redux';

//  1.Application state:

 let initialState={
    name:"Payal ",
    email:"payalyadav@gmail.com",
    city:"Delhi",
    userDetails:[],
    cities:[]
}

// 2. Dispatch function: no need to do anythinng it is already present in react
 //       dispatch(action)

// 3. reducer function- to make neccessary changes based on the data that dispatch func is bringing in(i.e action)"
// whatever action is coming based on that changes will be made in state, so reducer fun will receive two argu 
function appReducerFunction(state = initialState, action){
    // console.log("Redux starts here", action)
    let stateCopy = JSON.parse(JSON.stringify(state))
    console.log("redux starts here", state, action)
    switch(action.type){
        case "user_name_change":
            stateCopy.name = action.payload
            return stateCopy

        case "user_email_change":
            stateCopy.email = action.payload
            return stateCopy

        case "user_city_change":
            stateCopy.city = action.payload
            return stateCopy
        case "add_user_data":
            // creating user data
            let user={};
            user.name=stateCopy.name;
            user.email=stateCopy.email;
            user.city=stateCopy.city;
            // pushed the data inside userdetails array
            stateCopy.userDetails = [...stateCopy.userDetails, user] // or we can do this: statecopy.userdeatils.push(user
            // checking if user city inside cities array, if not then push, if yes not need to do anything.
            if(stateCopy.cities.indexOf(user.city)===-1){
                stateCopy.cities.push(user.city)
            }
            console.log("State after adding user", stateCopy)
            return stateCopy;
        
        default:
            return stateCopy
    }
    // return state;
}

// 4. create a package- (state, dispatch)- called store and there is way to create this store- which is already
//     present in redux
let store = createStore(appReducerFunction)
// console.log("redux store here",  store.getState())
export default store;


// the store is made up of two things - the state/initial state or the updated state and a dispatch funtion
// and these are 2 things that redux can give to react application through props.
// now after doing allthis 4 step we wll move to indexjs file coz that is our entry point.
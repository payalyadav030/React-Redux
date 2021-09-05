import React, { Component } from 'react';
import {createStore} from 'redux';
import 'font-awesome/css/font-awesome.min.css';


let intialState ={
    todoName:"",
    todoDeadline:"",
    edit:false,
    todoItemId:"",
    todoList:[],
    listStatus:"All"
    // completed:[],
    // active:[]
}

function appReducer(state=intialState, actions){
    let stateCopy = JSON.parse(JSON.stringify(state))
    // console.log(stateCopy, actions)

    switch(actions.type){
        case "todo_name_change":
            stateCopy.todoName=actions.payload
            return stateCopy
        case "todo_deadline_change":
            stateCopy.todoDeadline=actions.payload
            return stateCopy


        case "add_todos_to_todoList_array":
            let todoDetails={}
            if(stateCopy.edit){
                // console.log(stateCopy.todoItemId)
                // console.log(stateCopy.todoList)
                let obj = stateCopy.todoList.find(o=>o.id==stateCopy.todoItemId)
                // console.log("addd", obj)
                obj.todoName=stateCopy.todoName
                obj.todoDeadline=stateCopy.todoDeadline
                obj.id=stateCopy.todoItemId
                stateCopy.edit=false

                return stateCopy
            } 
            todoDetails.todoName=stateCopy.todoName
            todoDetails.todoDeadline=stateCopy.todoDeadline
            todoDetails.id = stateCopy.todoList.length
            todoDetails.status="active"
            // stateCopy.active=[...stateCopy.active, todoDetails]
            stateCopy.todoList=[...stateCopy.todoList, todoDetails]
            console.log(stateCopy)
            return stateCopy



        case "edit_todo_item":
            //find the object which has action.id
            let obj = stateCopy.todoList.find(o=>o.id==actions.id)
            // console.log(obj)
            stateCopy.todoName=obj.todoName
            stateCopy.todoDeadline=obj.todoDeadline
            stateCopy.todoItemId=actions.id
            stateCopy.edit=true
            return stateCopy


        case "delete_todo_item":
            let id = stateCopy.todoList.find((o, index)=> {if(o.id==actions.id){return index} })
            // console.log(object, actions.id)
            let list = stateCopy.todoList
            // console.log(list)
            list.splice(id, 1)
            return stateCopy


        case "active_state_todo":
            let objectId = stateCopy.todoList.find(o=>o.id==actions.id)
            console.log(objectId)
            // if(stateCopy.completed.find(o=>o.objectId))
            // stateCopy.completed = [...stateCopy.completed, objectId]
            objectId.status="completed"
            // console.log(stateCopy)
            return stateCopy
        
        case "dropdown_options":
            stateCopy.listStatus = actions.payload
            // stateCopy.todoList.status = actions.payload



        default:
            return stateCopy
    }
}

let store = createStore(appReducer)
export default store
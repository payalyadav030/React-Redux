import React, { Component } from 'react';
import {connect} from 'react-redux'
import 'font-awesome/css/font-awesome.min.css';
// import { FaBeer } from 'react-icons/fa';


class TodoList extends Component{
    handleSelectDropdownChange=(value)=>{
        console.log("value" , value)
        this.props.dispatch({type:"dropdown_options", payload:value})
    }
    render(){
        // console.log(this.props)
        let data = this.props.todoList
        data= data.filter((item, index)=>{
            console.log(this.props.listStatus,item)
            if(this.props.listStatus=="All"){
                return true
            }
            if(this.props.listStatus.toLowerCase()==item.status) return true;
        })
        if(data.length==0){return false}
        return(
            <div className="todolist-outer-div">
                <div className="todolist">
                <ul>
                <h3>User's Todos List</h3>
                    <div className="dropdown-div">
                    <form>
                        <label for="cars"></label>
                        <select onChange={(event)=>this.handleSelectDropdownChange(event.target.value)} id="cars" name="cars">
                            <option value="All">All</option>
                            <option value="Completed">Completed</option>
                            <option value="Active">Active</option>
                        </select>
                    </form>
                    </div>
                    {data && data.map((todo, index)=>{

                        // console.log(index, "index")
                        return(
                            <div className="li-items">
                               <div><li key={index}> {todo.todoName} {todo.todoDeadline}</li></div>
                                
                                <div className="icons">
                                    <div> <i onClick={()=>this.props.dispatch({type:"edit_todo_item", id:todo.id})} class="fas fa-edit"></i></div>
                                    <div> <i onClick={()=>this.props.dispatch({type:"delete_todo_item", id:todo.id})} class="fas fa-trash"></i></div>
                                    <div>
                                    <button 
                                       onClick={()=>this.props.dispatch({type:"active_state_todo", id:todo.id})}>
                                        {todo.status=="active"? "Active" : "Completed"}
                                    </button>
                                    
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        )
                        // console.log("todo", todo)
                       
                     } )}
                </ul>
            </div>
        </div>
            
        )
    }
}
const mapStateToProps=(state)=>{
    // console.log(state)
    return{
        todoList:state.todoList,
        listStatus:state.listStatus
    }

}
const giveReduxChangeRequestFromReactComp=(dispatch)=>{
    return{

        dispatch:dispatch
    }
}
export default connect(mapStateToProps, giveReduxChangeRequestFromReactComp)(TodoList)
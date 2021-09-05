import React, { Component } from 'react';
import {connect} from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';


class Input extends Component{
    handleTodoNameChange=(value)=>{
    //    / console.log(value)

        this.props.handleTodoNameChange({type:"todo_name_change", payload:value})

    }
    handleTodoDeadlineChange=(value)=>{
        // console.log("dedaline", value)

        this.props.handleTodoDeadlineChange({type:"todo_deadline_change", payload:value})
    }


    render(){
        // console.log(this.props)
        return(
            <div className="input-outer-div">
                <div className="input-div">
                <h3>Add todos here</h3>
                
                    <input
                        className="todoName"
                        value={this.props.todoName}
                        onChange={(event)=>this.handleTodoNameChange(event.target.value)}
                        type="text" placeholder="Todo Name">
                    </input>
                    <input
                        className="todoDeadline"
                        value={this.props.todoDeadline} 
                        onChange={(event)=>this.handleTodoDeadlineChange(event.target.value)} 
                        type="date" placeholder="Enter Deadline">
                    </input>
                
                <div className="button-div">
            
                    <button onClick={()=>this.props.dispatch({type:"add_todos_to_todoList_array"})}>{this.props.edit?"Edit":"Add"}</button>
                  
                </div>
            </div>
            </div>
            
        )
    }
}
const giveDataToReduxToReactComp=(state)=>{
    return{
        todoName:state.todoName,
        todoDeadline:state.todoDeadline,
        edit:state.edit
    }
}
const giveReduxChangeRequestFromReactComp=(dispatch)=>{

    return{
        handleTodoNameChange:dispatch,
        handleTodoDeadlineChange:dispatch,
        dispatch:dispatch
    }
}


export default connect(giveDataToReduxToReactComp,giveReduxChangeRequestFromReactComp)(Input)
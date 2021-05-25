import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class Input extends React.Component{
  state={
    title:"",
    deadline:"",
    isCompleted:""
  }
  componentDidUpdate =(prevProps, prevState)=>{
      if(prevProps.editTodoData !== this.props.editTodoData){
          this.setState({
              title:this.props.editTodoData.title,
              deadline:this.props.editTodoData.deadline,
              isCompleted:this.props.editTodoData.isCompleted
      }, ()=>{
          //  console.log(this.state)
      })
      }
}
  handleTitleChange=(event)=>{
      this.setState({
        title:event.target.value
      }, ()=>{
        console.log(this.state)
      })
  }
  handleDeadlineChange=(event)=>{
      this.setState({
        deadline:event.target.value
      }, ()=>{
        console.log(this.state)
      })
  }
  handleCompletedChange=(event)=>{
      this.setState({
        isCompleted:event.target.value
      }, ()=>{
        console.log(this.state)
      })
  }
  sendTodoToApp=()=>{
    this.props.sendTodoFromInput(this.state)
  }
  render(){
    return(
        <div>
          <h3>Add your todos here</h3>
          <input onChange={(event)=>this.handleTitleChange(event)} value={this.state.title} placeholder="Title"></input>
          <input onChange={(event)=>this.handleDeadlineChange(event)} value={this.state.deadline} placeholder="Deadline"></input>
          <input onChange={(event)=>this.handleCompletedChange(event)} value={this.state.isCompleted} placeholder="Status"></input>
          <button onClick={()=>this.sendTodoToApp()} className="btn btn-success">Add</button>
        </div>
    )
  }

}
class List extends React.Component{
  render(){
    return(
      <ul>
         {this.props.todos.map((todo, index)=>{
                    // console.log(todo, index)
                    return(
                        <li key={index}>Title:{todo.title}, Deadline:{todo.deadline},Status:{todo.isCompleted.toString()}
                        <button onClick={()=>this.props.editTodo(index)}>Edit</button>
                        <button onClick={()=>this.props.deleteTodo(index)} >Delete</button>
                        </li>
                        
                    )
               })}
      </ul>
    )
  }

}

// wrapper class
class App extends React.Component{
  state={
    todos:[
      {
        title:"Todo-1",
        deadline:"2021-03-01",
        isCompleted:false
    },
    {
        title:"Todo-2",
        deadline:"2021-03-05",
        isCompleted:false
    },{
        title:"Todo-3",
        deadline:"2021-03-07",
        isCompleted:false
    }
    ],
    isEdit:false,
    editTodoIndex:"",
    editTodoData:""
  }
  addTodoToList=(todo)=>{
    // this.setState({
    //   todos:[...this.state.todos, todo]
    // })
    if(this.state.isEdit === false){
      this.setState({
          todos:[...this.state.todos, todo]
      }, ()=>{
          
      })
  } else{
      var data = this.state.todos
      for(var i=0; i<data.length; i++){
          if(i === this.state.editTodoIndex){
               console.log(data[i])
              data[i]=todo
          }
      }
      this.setState({
          todos : data
      })

  }
  }
  deleteTodoFromList=(index)=>{
    let newTodos= this.state.todos
    newTodos.splice(index, 1)
    this.setState({
        todos:newTodos
    })
    
}
editTodoFromList=(index)=>{
    this.setState({
        isEdit:true,
        editTodoIndex:index,
        editTodoData:this.state.todos[index]
    }, ()=>{
        // console.log(this.state)
    })

}
  render(){
    return(
      <div>
        <Input isEdit={this.state.isEdit} editTodoData={this.state.editTodoData} sendTodoFromInput={(todo)=>this.addTodoToList(todo)}></Input>
        <List todos={this.state.todos}  deleteTodo={(index)=>this.deleteTodoFromList(index)}
                    editTodo={(index)=>this.editTodoFromList(index)}>

                    </List>
      </div>
      
      
    )
  }
}


export default App;

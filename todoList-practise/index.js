// TodoList with crud operation:


class Input extends React.Component{
    state={
        title:"",
        deadline:"",
        isCompleted:false
    }
   
    componentDidUpdate =(prevProps, prevState)=>{
        // console.log("input compn didUpdate",this.props, prevProps)
        // console.log(prevProps, prevState)
        // console.log(prevProps.editTodoData)
        // console.log(this.props.editTodoData)
        if(prevProps.editTodoData != this.props.editTodoData){
            this.setState({
                title:this.props.editTodoData.title,
                deadline:this.props.editTodoData.deadline,
                isCompleted:this.props.editTodoData.isCompleted
         }, ()=>{
            //  console.log(this.state)
         })
        }
    }
    
    handleInputChange=(event)=>{
        // console.log("input event", event.target.value)
        this.setState({
            title:event.target.value
        })
    }
   
    handleDeadlineChange=(event)=>{
        // console.log("input deadline", event.target.value)
        this.setState({
            deadline:event.target.value
        }, ()=>{
            // console.log(this.state)
        })
    }
    sendDataToWrapper=()=>{
        // console.log(this.props)
        // console.log(this.state)
        this.props.sendTodoFromInput(this.state)
    }
    render(){
        // console.log(this.props.isEdit)
        // console.log(nextState)
        return(
            <div className="inputDiv">
                <h1 className="heading">Todo List</h1>
                <input onChange={(event)=>this.handleInputChange(event)} value={this.state.title} type="text" className="title" placeholder="Title" ></input>
                <input onChange={(event)=>this.handleDeadlineChange(event)} value={this.state.deadline} type="date" className="date"></input>
                <button onClick={()=>this.sendDataToWrapper()} type="button" className="saveBtn">Save</button>
                
            </div>
            
        )
    }
}
class List extends React.Component{
    render(){
        // console.log(this.props.todos)
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

class Wrapper extends React.Component{
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
        // console.log(todo)
        if(this.state.isEdit== false){
            this.setState({
                todos:[...this.state.todos, todo]
            }, ()=>{
                // console.log(this.state)
            })
        } else{
            var data = this.state.todos
            // console.log(data)
            for(var i=0; i<data.length; i++){
                // console.log(data[i])
                if(i == this.state.editTodoIndex){
                     console.log(data[i])
                    //  console.log(todo)
                    data[i]=todo
                    // console.log(data)
                }
            }
            this.setState({
                todos : data
            })

        }
        
    }
    deleteTodoFromList=(index)=>{
        // /  console.log(this.state)
        // console.log("deleting index value", index)
        // console.log(this.state)
        let newTodos= this.state.todos
        newTodos.splice(index, 1)
        this.setState({
            todos:newTodos
        })
        
    }
    editTodoFromList=(index)=>{
        // console.log(index)
        // console.log(this.state.todos[index])
        this.setState({
            isEdit:true,
            editTodoIndex:index,
            editTodoData:this.state.todos[index]
        }, ()=>{
            // console.log(this.state)
        })

    }
    // isEdit={this.state.isEdit} editTodoData={this.state.editTodoData}
    render(){
        return(
            <div className="wrapperDiv">
                <Input isEdit={this.state.isEdit} editTodoData={this.state.editTodoData} sendTodoFromInput={(todo)=>this.addTodoToList(todo)}></Input>
                <List todos={this.state.todos} deleteTodo={(index)=>this.deleteTodoFromList(index)}
                    editTodo={(index)=>this.editTodoFromList(index)}>

                </List>
            </div>
        )
    }
}

ReactDOM.render(<Wrapper/>, document.getElementById('root'))
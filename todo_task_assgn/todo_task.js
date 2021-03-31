class Input extends React.Component{
   state={
       title:"",
       description:""
   }
   componentDidUpdate =(prevProps, prevState)=>{
    if(prevProps.editTodoData != this.props.editTodoData){
        console.log(prevProps)
        this.setState({
            title:this.props.editTodoData.title,
            description:this.props.editTodoData.description,
            
     }, ()=>{
        //  console.log(this.state)
     })
    }
}
   handleTitleChange=(event)=>{
        this.setState({
            title: event.target.value
        }, ()=>{
            // console.log(this.state)
        })
   }
   handleDescriptionChange=(event)=>{
        this.setState({
            description: event.target.value
        }, ()=>{
            // console.log(this.state)
        })
   }
   sendTodoToWrapper=()=>{
       this.props.sendTodoFromInput(this.state)
   }
    render(){
        return(
            <div>
                <input onChange={(event)=>this.handleTitleChange(event)} value = {this.state.title} type="text" placeholder="title"></input>
                <input onChange={(event)=>this.handleDescriptionChange(event)} value={this.state.description} type="text" placeholder="description" ></input>
                <button onClick={()=>this.sendTodoToWrapper()} type="button">Add</button>

                <div>Welcome back Michael</div>
            </div>
        )
    }
}
class List extends React.Component{
    
    render(){
        return(
            <div className="todo-Items">
              
                {this.props.todos.map((todo, index)=>{
                    return(
                        
                        <div className="Each-Item" key={index}>
                            
                            <h2 key={index}>{todo.title}</h2> 
                            <p> {todo.description}</p>
                            <button onClick={()=>this.props.editTodo(index)} type="button">Edit</button>
                            <button onClick={()=>this.props.deleteTodo(index)} type="button">Delete</button>
                        </div>
                    ) 
                })}
            </div>
        )
    }
}

class Wrapper extends React.Component{
    state={
        todos:[
            {
                title:"Management",
                description:"Finalise the sales plan for new product marketing."
            },
            {
                title:"Operations",
                description:"Finalise the sales plan for new product marketing."
            },
            {
                title:"Management",
                description:"Finalise the sales plan for new product marketing."
            },
            {
                title:"Management",
                description:"Finalise the sales plan for new product marketing."
            },
            {
                title:"Management",
                description:"Finalise the sales plan for new product marketing."
            },
            {
                title:"Management",
                description:"Finalise the sales plan for new product marketing."
            },
            {
                title:"Management",
                description:"Finalise the sales plan for new product marketing."
            },
            {
                title:"Management",
                description:"Finalise the sales plan for new product marketing."
            },

        ],
        isEdit:false,
        editTodoIndex:"",
        editTodoData:""
    }
    addTodoToList=(todo)=>{
        // console.log(todo)
        // this.setState({
        //     todos:[...this.state.todos, todo]
        // })
        if(this.state.isEdit== false){
            this.setState({
                todos:[...this.state.todos, todo]
            }, ()=>{
                // console.log(this.state)
            })
        } else{
            var data = this.state.todos
            console.log(data)
            for(var i=0; i<data.length; i++){
                if(i == this.state.editTodoIndex){
                     console.log(data[i])
                     data[i]=todo
                }
            }
            this.setState({
                todos : data
            }, ()=>{
                console.log(this.state)
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
        this.setState({
            isEdit:true,
            editTodoIndex:index,
            editTodoData:this.state.todos[index]
        }, ()=>{
              console.log(this.state.editTodoData)
        })
    }

    render(){
        return(
            <div>
                <Input isEdit={this.state.isEdit} editTodoData={this.state.editTodoData}  sendTodoFromInput={(todo)=>this.addTodoToList(todo)} ></Input>
                <List todos={this.state.todos} deleteTodo={(index)=>this.deleteTodoFromList(index)} 
                    editTodo={(index)=>this.editTodoFromList(index)}                                                ></List>
            </div>
            
        )
    }
}


ReactDOM.render(<Wrapper/>, document.getElementById('root'))
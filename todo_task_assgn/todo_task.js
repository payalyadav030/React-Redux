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
            <div className="add-todos">
                <h3>Add your Todos here</h3>
                <input onChange={(event)=>this.handleTitleChange(event)} value = {this.state.title} type="text" placeholder="title" className="title"></input>
                <input onChange={(event)=>this.handleDescriptionChange(event)} value={this.state.description} type="text" placeholder="description" className="description" ></input>
                <button onClick={()=>this.sendTodoToWrapper()} type="button" className="saveBtn">Add</button>

               
            </div>
        )
    }
}
// style={{color:color}}
class List extends React.Component{
    
    render(){
        // var color=['red', 'green', 'blue', 'orange', 'yellow']
       
        //  var color='#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        // console.log(color)
        return(
            <div className="todo-Item">
                 <p className="heading">
                     Welcome back Michael
                 </p>
                 <div className="todo-Items" >
                 {this.props.todos.map((todo, index)=>{
                      var applyColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
                    return(
                        
                        <div className="Each-Item" key={index} style={{borderTop:`2px solid ${applyColor}`}} >
                            
                            <h2 key={index} style={{color:applyColor}} >{todo.title}</h2> 
                            <p> {todo.description}</p>
                            <div className="buttons">
                                <button onClick={()=>this.props.editTodo(index)} type="button" class="btn btn-primary">Edit</button>
                                <button onClick={()=>this.props.deleteTodo(index)} type="button" class="btn btn-danger">Delete</button>
                            </div>
                            
                        </div>
                    ) 
                })}
                 </div>
            </div>
        )
    }
}

class Wrapper extends React.Component{
    state={
        todos:[
            {
                title:"operation",
                description:"finals the list"
            },
            {
                title:"management",
                description:"chek the list "
            },{
                title:"sales",
                description:"how much profit"
            },{
                title:"marketing",
                description:"check the stock list"
            },
            {
                title:"marketing",
                description:"check the stock list"
            },
            {
                title:"marketing",
                description:"check the stock list"
            },
            {
                title:"marketing",
                description:"check the stock list"
            },
            {
                title:"marketing",
                description:"check the stock list"
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
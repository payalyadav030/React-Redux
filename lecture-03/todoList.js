// implementing a small applicaion todolist for getting things clear:
/*
create some data
print it on page
update the data
delete the data

CRUD - TodoList

1. To create new todos.
       - title = Do your project
       - deadline = 07-03-21
       - isCompleted = false
2. You list all the todos
3. You may want to change the todo
       - title = Do your project by next month
       - deadline = 07-04-21
       - isCompleted = false
4. Delete some todo

what should our application have:
1. User input - wher user can type and add a todo.
    - title
    - deadline
2. To print all the todo, you need some data set i.e some place to save data- in an array
3. Updating the todo
    - title
    - deadline
    - isCompleted
4. Deleting the todo - just have to take that element from that array

So what Components do we need:
1. Input component - from where we will be adding data
2. List component - to show data
3. List item component
4. Wrapper component

*/


const rootElement = document.getElementById('root')


// Input Component :
class Input extends React.Component{
    state ={
        title : "",     
        deadline:"",
        isCompleted: false
    }

    componentDidMount=()=>{
        console.log("input CDM", this.props)
    }
    // now i will check that i have received the props ar not after didMount:
    componentDidUpdate =(prevProps, prevState)=>{
        console.log("input compn didUpdate",this.props, prevProps)
        if(prevProps.editTodoData != this.props.editTodoData){
            this.setState({
                title:this.props.editTodoData.title,
                deadline:this.props.editTodoData.deadline,
                isCompleted:this.props.editTodoData.isCompleted
         })
        }
        
    }
    handleInputChange=(event)=>{
       // console.log("1234" , event.target.value)
        // this.state.title = event.target.value  - this won't work as because this direct mutation(changing) & react dont allow this
        // console.log(this.state)
        this.setState({   // this setState function is async
            title: event.target.value
        }, ()=>{
            // console.log(this.state)
        })
    }
    handleDeadlineChange = (event)=>{
        this.setState({
            deadline: event.target.value
        }, ()=>{
            // console.log(this.state)
        })
    }
    sendDataToWrapper=()=>{
        // console.log(this.props)
        this.props.sendTodoFromInput(this.state)
    }
    render(){
      //  console.log("props receiving", this.props)
        return(
            <div>
                 <input onChange={(event)=> this.handleInputChange(event)} value={this.state.title} type ="text" placeholder = "title"/>
                 <input onChange={(event)=>this.handleDeadlineChange(event)} value= {this.state.deadline} type ="date"></input>
                 <button onClick={()=> this.sendDataToWrapper()}>Save</button>
            </div>
        )
    }
}

// List Component:
class List extends React.Component{
    render(){
        // console.log("the list todos", this.props.todos)
        return(
            <ul>
                {/* Data list here , as many as li's are there todo's */}
                {this.props.todos.map((todo, index) =>{
                    return(
                        <li key={index}>{todo.title}, {todo.deadline},{todo.isCompleted.toString()}
                            <button onClick={()=>this.props.editTodo(index)}>Edit</button>
                            <button onClick={()=>this.props.deleteTodo(index)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
/* state ={
    todos: [
        {
            title: "my todo",
            deadline: "20-01-20201",
            isCompleted:false
        }
]
} */

// wrapper component:
class Wrapper extends React.Component{
    // saving the data: using state and it will b object inside which there will be an array of objects-todos
    state = {
        todos:[

        ],
        isEdit:false,
        editTodoIndex:"",
        editTodoData:""
    }
    addTodoToList = (todo)=>{
       // console.log(todo)
       this.setState({
           todos: [...this.state.todos, todo]
       }, ()=>{
        //    console.log(this.state)
       })
    }
    deleteTodoFromList = (index)=>{
        // console.log("delete index here",index)
        let newTodos = this.state.todos.slice()
        console.log(newTodos)
        newTodos.splice(index,1)
        this.setState({
            todos: newTodos
        });
    }
    editTodoInList=(index)=>{
        // console.log(index)
        this.setState({
            isEdit:true,
            editTodoIndex:index,
            editTodoData:this.state.todos[index]
        })
    }
    render(){
        return(
            <div>
            <Input isEdit ={this.state.isEdit} editTodoData={this.state.editTodoData} sendTodoFromInput= {(todo)=> this.addTodoToList(todo)} />
            <List todos={this.state.todos}  deleteTodo={(index)=>this.deleteTodoFromList(index)} editTodo={(index)=>this.editTodoInList(index)}/>
            </div>
        )
    }
}

ReactDOM.render(<Wrapper/>, rootElement)
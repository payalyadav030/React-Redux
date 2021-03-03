// creating button:
// const saveButton = <button>Save</button>
// const editButton = <button>Edit</button>
// const cancelButton = <button>Cancel</button>
    // more optimized way if we want to create n number of buttons ar any elements:
        // const button = ({name, number}) =>{
        //     return(
        //         <button>{name},{number}</button>
        //     )
        // }
    // for jsx- more readibility: and this is also called Functional Component
    const Button = ({name, number}) =>{
        return(
            <button>{name},{number}</button>
        )
    }



// creating a footer
// const footer = (
//     // <div className="container-fluid p-0">
//     //     <div className="my-footer">
//     //         Copyright @2021
//     //         {/* {saveButton}
//     //         {editButton}
//     //         {cancelButton} */}
//     //         {button({name:"Save", number:1})}    
//     //         {button({name:"Edit", number:2})}
//     //         {button({name:"Cancel", number:3})}
//     //     </div>
//     // </div>

//     <div className="container-fluid p-0">
//         <div className="my-footer">
//             Copyright @2021
//             {/* {button({name:"Save", number:1})}     */}
//             {/* instead of this above line 30 for creating button we can also use Jsx for better readibility: and for that we just have to make the b of button function(line no 6) in capital */}
//             <Button name ="Save" number="1"></Button>
//             <Button name ="Edit" number="2"></Button> 
//             <Button name ="Cancel" number="3"></Button>
//             {/* // here also (line 39-41)we have to make B capital(the button tag for implementing in this way, earlier we were calling {button}) */}
//             {/* // and the parameters of the button function becomes here the attributes */}
//         </div>
//     </div>

// );
// ReactDOM.render(footer, document.getElementById('root'))

    // writing the footer part as a function just like we did for button: and this is also called Functional Component
    const Footer = ()=>{
        return (
            <div className="container-fluid p-0">
                <div className="my-footer">
                    Copyright @2021
                    <Button name ="Save" number="1"></Button>
                    <Button name ="Edit" number="2"></Button> 
                    <Button name ="Cancel" number="3"></Button>
                </div>
            </div>
        )
    }
// ReactDOM.render(Footer(), document.getElementById('root')) // one way to render the above code (51-62)
//  ReactDOM.render(<Footer/>, document.getElementById('root')) // another way to render the above code


////////////////
///////////////
// So two types of COMPONENTS are there:
//  1. Functional component - these type of components we can use again and again
//  2. Class-based component - When we want to save some data, we use these type of component, in functnl compn we cannot save data

// implementing class component:
    // lets say we want to make a TODO list:

    class TodoList extends React.Component {   // way to write class based components and here also the name of the class should begin with capital
        random(){
            return (
                <div>just an eg to check how class compn works</div>
            ) 
        }
    }

    ReactDOM.render(new TodoList().random(), document.getElementById('root')) // to render a class component: 
    /// a> make a class, eg like todolist 
    /// b> create an instance of it like in line no 84 while rendering 
    /// c> and then call the method which is returning the JSX inside


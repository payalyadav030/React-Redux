import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import TodoList from './components/todoList';
import Input from './components/input';
// import UserTodoInput from './components/userTodoInput';

function App() {
  return (
    <div>
        <div className="heading">
          <h3>Classic Todo Application</h3> 
        </div>
        <div className="container-div">
          <Input/>
          <TodoList/>
        </div>
      
      {/* <Input/> */}
    </div>
    
  );
}

export default App;

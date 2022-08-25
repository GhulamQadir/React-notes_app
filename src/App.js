import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/Todo/todo';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todo App</h1>
      <AddTodo />
    </div>
  );
}

export default App;

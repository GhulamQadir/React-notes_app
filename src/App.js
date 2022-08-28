import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/Add-Todo/add-todo';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Task App</h1>
      <AddTodo />
    </div>
  );
}

export default App;

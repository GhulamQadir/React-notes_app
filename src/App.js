import './App.css';
import AppRouter from './config/Router';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Notes App</h1>
      <AppRouter />
    </div>
  );
}

export default App;

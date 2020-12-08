import './App.css';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import TaskBoard from './components/taskboard';



function App() {
  return (
    <div>
      <Login />
      <Signup />
      <TaskBoard />
    </div>
  );
}

export default App;

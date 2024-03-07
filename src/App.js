import './App.css';
import AddTask from './components/AddTask';
import Navigation from './components/Navigation';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AddTask />
      <Todolist />
    </div>
  );
}

export default App;

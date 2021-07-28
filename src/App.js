import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import ToDoList from './ToDoList';
import TimerComponent from './TimerComponent';
function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent/>;
      <ClassComponent/> */}
      <ToDoList/>
       {/* <TimerComponent/>  */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

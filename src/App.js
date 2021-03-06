import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import './App.css';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import ToDoList from './ToDoList';
import TimerComponent from './TimerComponent';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <div className="container">
        <header className="row">
          <div className="col-sm-12 bg-info">
            <Header/>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/todolist">ToDoList</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/timer">Timer</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/class">ClassComponent</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/functional">Functional Component</a>
      </li>
     
    </ul>
    
  </div>
</nav>

          </div>

        </header>
        <main className="row">
          <div className="col-sm-12">
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/functional" component={FunctionalComponent}/>
              <Route excat path="/timer" component={TimerComponent}/>
              <Route exact path="/class" component={ClassComponent}/>
              <Route exact path="/todolist" component={ToDoList}/>

        </Switch>

          </div>

        </main>
        <footer className="row">
            <div className="col-sm-12 bg-warning ">
              <Footer/>


          </div>

        </footer>


      </div>


      <div className="App">
    </div>
    </Router>
    
  );
}

export default App;

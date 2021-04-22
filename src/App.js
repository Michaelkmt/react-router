import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from "./components/Home";
import About from './components/About';
import Messages from './components/Messages';
import NotFound from './components/NotFound';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
       </header>

       <div className='menu'>
         <ul>
         <li><Link to = '/'>Home</Link></li>
         <li><Link to = '/about'>About</Link></li>
         <li><Link to = '/messages'>Messages</Link></li>
      
         </ul>
             
        </div>
        <div className='App-intro'>
          <Switch>
          <Route path='/' exact strict component={Home} />
          <Route path='/about' exact strict component={About} />
          <Route path='/messages' component={Messages} />
          <Route component={NotFound} />
          <Redirect from='/home' to='/'/>
          </Switch>
          
        </div>
      </div>
    );
  }
}

export default App;

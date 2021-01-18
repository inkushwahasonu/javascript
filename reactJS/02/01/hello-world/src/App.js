
import './App.css';
import { Component } from 'react';
// import Greet from './components/Greet';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import {Hello} from './components/Hello';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Greet />
        <Welcome/>
        <Hello/>
      </div>
    );
  }
}

export default App;

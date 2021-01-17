
import './App.css';
import { Component } from 'react';
// import Greet from './components/Greet';
import { Greet } from './components/Greet';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Greet />
      </div>
    );
  }
}

export default App;

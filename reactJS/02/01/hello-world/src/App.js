
import './App.css';
import { Component } from 'react';
// import Greet from './components/Greet';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Greet />
        <Welcome/>
      </div>
    );
  }
}

export default App;

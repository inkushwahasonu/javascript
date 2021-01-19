import "./App.css";
import { Component } from "react";
// import Greet from './components/Greet';
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import { Hello } from "./components/Hello";
import Props from "./components/Props";
import State from "./components/State";
import Counter from "./components/Counter";
import Props2 from "./components/Props2";
import FunctionClick from "./components/FunctionClick";
import EventBind from './components/EventBind';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
        <Hello />
        <Props name="Amit Props" heroName="arsad" />
        <Props name="Rahul Props" heroName="Dayana" />
        <State name="state soma" />
        <Counter />
        <Props2 name="Amit Props" heroName="arsad" />
        <Props2 name="Ankit Props" heroName="carli" />
        <FunctionClick/>
        <EventBind/>
      </div>
    );
  }
}

export default App;

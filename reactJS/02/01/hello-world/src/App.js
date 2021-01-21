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
import ParentComponent from './components/parent/ParentComponent';
import ConditionalRendring from './components/ConditionalRendring';
import {NameList} from './components/map/NameList';
import StyleSheet from './components/css/StyleSheet';
import Inline from './components/css/Inline';
import Form from './components/Form';
// import LifecycleA from './components/mounting-lifecycle/LifecycleA';
import FragmentDemo from './components/fragment/FragmentDemo';
import Table from './components/fragment/Table';
// import ParentComp from './components/PureComponent/ParentComp';
import RefsDemo from './components/Refs/RefsDemo';
import FRParentInput from './components/Refs/ForwardingRefs/FRParentInput';

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
        <ParentComponent/>
        <ConditionalRendring />
        <NameList />
        <StyleSheet primary={true}/>
        <Inline />
        <Form />
        {/* <LifecycleA /> */}
        <FragmentDemo />
        <Table />
        {/* <ParentComp />  */}
        <RefsDemo />
        <FRParentInput />
      </div>
    );
  }
}

export default App;

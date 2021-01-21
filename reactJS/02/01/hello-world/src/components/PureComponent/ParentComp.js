import React from "react";
import RegularComp from './RegularComp';
import PureComp from './PureComp';

class ParentComp extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      name : 'sujata'
    }
  }
 componentDidMount(){
   setInterval(()=>{
     this.setState({
       name: 'VIswash'
     })
   },3000)
 }
  render() {
    console.log('******************Parent Component Render******************');
    return (
      <div>
        <hr />
        <p>Parent Component</p>
        <RegularComp name={this.state.name}></RegularComp>
        <PureComp name ={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;

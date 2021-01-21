import React from "react";
// import RegularComp from './RegularComp';
// import PureComp from './PureComp';
import MemoComp from './MemoComp';

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
   },2000)
 }
  render() {
    console.log('******************Parent Component Render******************');
    return (
      <div>
        <hr />
        <p>Parent Component</p>
        <MemoComp name={this.state.name}/>
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureComp name ={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp;

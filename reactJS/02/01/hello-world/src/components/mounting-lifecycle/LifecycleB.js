// Component Mounting Lifecycle Method

import React from "react";

class LifecycleB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sonu",
    };
    console.log('LifecycleB constructor')
  }
  static getDerivedStateFromProps(props, state){
   console.log('LifecycleB getDerivedStateFromProps');
   return null;
}

componentDidMount(){
  console.log('LifecycleB componentDidMount');
}
  render() {
    console.log('LifecycleB render');
    return <div> 
      
      <h1>Lifecycle B (child component)</h1>
    </div>;
  }
}
export default LifecycleB;

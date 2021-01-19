import React from "react";
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }


  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }


  render() {
    return (
      <div>
        <hr/>
        Parent & child Component...
        <ChildComponent greetHandler= {this.greetParent} />
      </div>
    );
  }
}
export default ParentComponent;


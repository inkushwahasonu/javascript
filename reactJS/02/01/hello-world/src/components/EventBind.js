// chenge your message after clicking the button

import React, { Component } from "react";
class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello Event Bind",
    };
    // this.clickHandler = this.clickHandler.bind(this);  // cunstructor approch
  }

  // clickHandler(){
  //   this.setState({
  //     message: 'GoodBye!'
  //   })
  //   // console.log(this);
  // }

  clickHandler = () => {
    this.setState({
      message: "GoodBye!",
    });
  };

  render() {
    return (
      <div>
        <hr />
        <p>EventBind</p>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>click here</button> */}
        <button onClick={() => this.clickHandler()}>Click here</button>   {/*for constructor approch*/}
        <button onClick={this.clickHandler}>Click Here</button>      {/*for arrow function approch*/}
      </div>
    );
  }
}
export default EventBind;

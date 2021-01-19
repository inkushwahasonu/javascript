

import React, {Component} from 'react';
class EventBind extends Component{
  constructor(props){
    super(props)

    this.state ={
      message: 'Hello Event Bind'
    }
  }

  clickHandler(){
    // this.setState({
    //   message2: 'GoodBye!'
    // })
    
  }

  render(){
    return(
      <div>
        <hr/>
        <p>EventBind</p>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>click here</button>
        <h3>{this.state.message2}</h3>
      </div>
    )
  }
}
export default EventBind;



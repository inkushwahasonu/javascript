import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: "",
      topic: "react",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange =(event)=>{
    this.setState ({
      topic : event.target.value,
    })
  }
    handleSubmit = (event) => {
      alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
      event.preventDefault();
    }

  render() {
    const { username,comment,topic} =this.state;
    return (
      <div>
        <hr />
        <p>form control</p>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserName</label>
            <input
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={comment}
              onChange={this.handleCommentChange}
            ></textarea>
          </div>
          <div>
            <select value = {topic} onChange= { this.handleTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

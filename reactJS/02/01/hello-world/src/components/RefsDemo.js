// import React, { Component } from "react";

// class RefsDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//   }
//   componentDidMount() {
//     this.inputRef.current.focus();
//     console.log(this.inputRef);
//   }
//   clickHandler =() =>{
//     alert(this.inputRef.current.value);
//   }

//   render() {
//     return (
//       <div>
//         <hr />
//         <p>Refs Component</p>
//         <input type="text" ref={this.inputRef} />
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     );
//   }
// }
// export default RefsDemo;

// -----OR-------second way, by callback refrence

// import React, { Component } from "react";

// class RefsDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//     this.cbRef = null;
//     this.setcbRef = (element) => {
//       this.cbref = element;
//     };
//   }
//   componentDidMount() {
//     this.inputRef.current.focus();
//     console.log(this.inputRef);
//   }
//   clickHandler = () => {
//     alert(this.inputRef.current.value);
//   };

//   render() {
//     return (
//       <div>
//         <hr />
//         <p>Refs Component</p>
//         <input type="text" ref={this.inputRef} />
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     );
//   }
// }
// export default RefsDemo;

// ---OR -- third way, by calback refs-------

// import React, { Component } from "react";

// class RefsDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//     this.cbRef = null;
//     this.setCbRef = (element) => {
//       this.cbRef = element;
//     };
//   }
//   componentDidMount() {
//     if (this.cbRef) {
//       this.cbRef.focus();
//     }
//     // this.inputRef.current.focus();
//     // console.log(this.inputRef);
//   }
//   clickHandler = () => {
//     alert(this.inputRef.current.value);
//   };

//   render() {
//     return (
//       <div>
//         <hr />
//         <p>Refs Component</p>
//         <input type="text" ref={this.inputRef} />
//         <input type="text" ref={this.setCbRef} />
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     );
//   }
// }
// export default RefsDemo;


// ----- fourth Approach --- for componentDidMount-------


import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    if(this.cbRef){
      this.cbRef.focus();
    }
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <hr />
        <p>Refs Component</p>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
export default RefsDemo;


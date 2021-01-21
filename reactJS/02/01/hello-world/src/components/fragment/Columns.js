import React from "react";

function Columns() {
  // const items = [];
  return (
    <>
      <td>Name</td>
      <td>Sourav</td>
    </>

    //  ---OR--- 
    // <React.Fragment>

    //   <td>Name</td>
    //   <td>Sourav</td>
    // </React.Fragment>

    //  ---OR---
    // <React.Fragment>
    //   {
    //     items.map( item => (
    //       <React.Fragment key ={item.id}>
    //         <h1>Title</h1>
    //         <p>{item.title}</p>
    //       </React.Fragment>
    //     ))
    //   }
    //   <td>Name</td>
    //   <td>Sourav</td>
    // </React.Fragment>
  );
}
export default Columns;

// --- on click event  -----


// const Home = () => {
//   const handleClick = (e) => {
//     console.log("hello, ninjas", e);
//   }

//   const handleClickAgain = (name, e)=> {
//     console.log('hello ' + name, e.target);
//   }

//   return (
//     <div className="home">
//       <h2>Home page</h2>
//       <button onClick ={handleClick}>Click me..</button>
//       <button onClick = {(e) =>{handleClickAgain('mario' , e)}}
//       >Click me again</button>
//     </div>
//    );
// }

// export default Home;

// ------------------------------------------------

// import { useState } from "react";
// const Home = () => {
//   // let name = 'mario';
//   const [name, setName] = useState("mario");
//   const [age, setAge]   = useState(25);

//   const handleClick = () => {
//     setName('luigiff');
//     setAge('30')
    
//   };
//   return (
//     <div className="home">
//       <h2>Home page</h2>
//       <h1>{name} is {age} years old.</h1>
//       <button onClick={handleClick}>click me</button>
//     </div>
//   );
// };

// export default Home;

// ----------------------------------------------------------------------


// ----Outputting Lists

// import { useState } from "react";



// const Home = () => {
//   const [blogs,setBlog] = useState([
//     { title : 'My new Website', body : 'lorem ipsum ...', author : 'Mario', id : 1},
//     { title:'Welcome party', body : 'lorem epsum...', author :'yushi', id:2},
//     {title :'Web dev top tips', body : 'lorem epsum...', author : 'tario', id : 3}
//   ]);
//   return ( 
//     <div className="home"> 
//     {blogs.map((blog) => (
//     <div className="blog-preview" key={blog.id}>
//       <h2>{blog.title}</h2>
//       <p>Written by {blog.author}</p>
//     </div>
//     ))}
//     </div>
//    );
// }
 
// export default Home;



// -------------------------------------------------------------------

// --- props
import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs,setBlog] = useState([
    { title : 'My new Website', body : 'lorem ipsum ...', author : 'Mario', id : 1},
    { title:'Welcome party', body : 'lorem epsum...', author :'yushi', id:2},
    {title :'Web dev top tips', body : 'lorem epsum...', author : 'tario', id : 3}
  ]);
  return ( 
    <div className="home">
      <BlogList blogs={blogs} title= "All Blogs"/>
    </div>
   );
}
 
export default Home;

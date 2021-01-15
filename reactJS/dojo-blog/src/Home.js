import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "My Website", body: "lorem ipsum ...", author: "mario", id: 1},
    {title: "Welcome party", body: "lorem epsum...", author: "yushi", id: 2 },
    {title: "Web tips", body: "lorem epsum...", author: "tario", id: 3}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('useEffect random');
    console.log(blogs);
  });

  return (
    <div className="home">
      {/* <BlogList blogs<BlogList blogs={blogs} title="All Blogs" />
      <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs" />={blogs} title="All Blogs" />
      <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs" /> */}
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;

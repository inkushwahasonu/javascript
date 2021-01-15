// ---- use of props



// const BlogList = (props) => {
//   const blogs = props.blogs;
//   console.log(props, blogs);
//   const title = props.title;

// ---- or

const BlogList = ({blogs, title})=>{
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      <div className="home">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

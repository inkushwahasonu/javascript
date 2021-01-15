// ---- use of props

// const BlogList = (props) => {
//   const blogs = props.blogs;
//   console.log(props, blogs);
//   const title = props.title;

// ---- or

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>

          {/*  to delete blog */}

          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

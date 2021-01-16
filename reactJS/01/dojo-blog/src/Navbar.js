import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog..</h1>
      <div className="links">
        {/* <a href="/">Home</a> */}
        <Link to="/">Home</Link>
        <Link
          to="/Create"
          style={{
            color: "white",
            backgroundColor: "blue",
            borderRadius: "8px",
          }}
        >
          New blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

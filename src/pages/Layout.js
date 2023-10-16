import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";


const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

// style={linkStyle} 

const Layout = () => {
  return (
    <div>
      <nav className= "WrapperHyperLinks">
        <li>
          <Link to="/" className="HyperLinks"> Home </Link>
        </li>
        <li>
          <Link to="/About" className="HyperLinks"> About </Link>
        </li>
        <li>
          <Link to="/Services" className="HyperLinks"> Services </Link>
        </li>
      </nav>
      <Outlet /> {/* this is where the data from the page is going to render */}
    </div>
  );
};

export default Layout;

/*
<Link to="/Blogs">
  <button>
    <p>Click Me!</p>
  </button>
</Link>
*/
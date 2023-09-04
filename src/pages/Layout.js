import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Blogs">
                    <button>
                        <p>Click Me!</p>
                    </button>
                </Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
        </ul>
      </nav>
      <Outlet /> {/* this is here the data from the page is going to render */}
    </div>
  );
};

export default Layout;

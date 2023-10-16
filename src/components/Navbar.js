import React from "react";
import "./Navbar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "../pages/About";
import Services from "../pages/Services";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import {Helmet} from "react-helmet";

class NavBar extends React.Component {
    render() {
        return  (
            <div >
                <div >
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Example Page</title>
                    </Helmet>
                </div>
                <Links/>
            </div>
        )
    }
}

/* <link rel="canonical" href="http://mysite.com/example" /> */

NavBar.defaultProps = {
    title: "Driver Company",
    keywords: "Driver taxi, Germany",
    description: "Get the latest news in web dev",
};

export default NavBar;

function Links(){
    return(
        <div >
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="About" element={<About />} />
                        <Route path="Services" element={<Services />} />
                    </Route>
                </Routes>
            </BrowserRouter >
        </div>
    )
}

// className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4"
//className="NavBarTest"

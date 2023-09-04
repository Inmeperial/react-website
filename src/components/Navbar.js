import React from "react";
import "./Navbar.css";
import { StyleSheet } from "react-native";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Layout from "../pages/Layout";

//"./components/Navbar.js"

/*
import { NavLink as Link } from "react-router-dom";

import logo from "../Images/logo.png";
import {
    FaMapMarkerAlt,
    FaMobileAlt,
    FaRegClock,
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

*/

class NavBar extends React.Component {
    render() {
        return  (
            <div>
                <nav className=" px-2 sm:px-4 py-5 ">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <Links/>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;


function Links(){
    return(
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
            <ul className="NavBarTest">
                <BrowserRouter >
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="Blogs" element={<Blogs />} />
                            <Route path="About" element={<About />} />
                        </Route>
                    </Routes>
                </BrowserRouter >
            </ul>
        </div>
    )
}

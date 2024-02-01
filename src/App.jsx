import React from "react";
import "./styles/App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectDetails";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Proyectos' element={<Projects />} />
        <Route path='/Nosotros' element={<AboutUs />} />
        <Route path='/Proyectos/:id' element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

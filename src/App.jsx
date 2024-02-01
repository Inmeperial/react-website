import React from "react";
import "./styles/App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/proyectos' element={<Projects />} />
        <Route path='/proyectos/:id' element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React, { Fragment } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Workshop from "./components/Workshop.jsx";
import Footer from "./components/Footer.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/workshop" element={<Workshop />}></Route>
          <Route path="/" element={<Navigate to="/home" />}></Route>
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;

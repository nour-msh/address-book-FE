import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import User from "./pages/User";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// import Nav from './component/Nav';


function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/contact" element={<Contact />} />

        </Routes>
      </Router>
   </>
  );
}

export default App;

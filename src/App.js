import './App.css';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import User from "./pages/User";
import Home from "./pages/Home";
import Nav from './component/Nav';


function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </Router>
   </>
  );
}

export default App;

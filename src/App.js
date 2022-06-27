import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import User from "./pages/User";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
 

      <div>

      <MapContainer center={[33.854721,35.862286 ]} zoom={12}scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
      </div>
   </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Component } from "react";

import Getstarted from "../pages/Getstarted";
import Home from "../pages/Home";
import About from "../pages/About";
import MapApp from "../maps/MapApp";
import Memories from "../memories/Memories";
class Main extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Getstarted />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/maps" element={<MapApp />} />
        <Route path="/memories" element={<Memories />} />
      </Routes>
    );
  }
}

export default Main;

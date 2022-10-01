import React from 'react';
import { Routes, Route } from "react-router-dom";
import Bio from "../pages/bio/Bio";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default MyRoutes;
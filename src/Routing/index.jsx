import React from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import PublicLayout from "../Layouts/Public-Layout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<PublicLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

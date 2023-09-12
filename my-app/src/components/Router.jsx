import React from "react";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "../pages/About/AboutPage";
import ContactPage from "../pages/Contact/ContactPage";
import StartPage from "../pages/Start/StartPage";

export default function Router() {
  return (
    <BrowserRouter>
      <div className="header">
        <div className="logo_Box">
          <a className="logo" href="/">
            PUBP.
          </a>
        </div>
        <nav>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
            Start
          </NavLink>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/about'>
            About
          </NavLink>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/contact'>
            Contact
          </NavLink>
        </nav>

      </div >
        <Routes>
          <Route exact path='/' element={<StartPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
  );
}
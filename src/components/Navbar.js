import React from "react";
// import { Outlet } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Outlet,

} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navcontainer">
      
      <nav>
        <ul className="navheader">
        <img className="portfolioimg" src="img/Giselleflower.png" alt='Giselle'/>
        <li>
          <h5><i>Giselle Guevara</i></h5>
            <a href="/Profile">Profile</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
         
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>

      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;

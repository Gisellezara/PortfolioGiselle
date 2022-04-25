import React from "react";
// import { Outlet } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Outlet,

} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      
      <nav className="navbar container">
      {/* <img className="portfolioimg" src="img/Giselleflower.png" alt='Giselle'/> */}
      <div>
         <ul className="navlist">
        <li><a href="/Profile" className="link">Profile</a></li>
          <li><a href="/Projects" className="link">Projects</a></li>
          <li><a href="/Contact" className="link" >Contact</a></li>
          
        </ul>
        </div>
      </nav>

      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;

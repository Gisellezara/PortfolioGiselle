import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Appcontainer = (props) => {
  return (
    <div className="container">
     <Navbar />
     <div className="content">
        {props.children}
        </div>
     <Footer />
    </div>
  )
  
};


export default Appcontainer;

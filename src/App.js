import React from "react";
import './App.css';
import Contact from "./components/Contact";

import Profile from "./components/Profile";
import Projects from "./components/Projects";
import{
  BrowserRouter as Router,
  Route,
  Routes,
}from "react-router-dom"



function App() {
  return (
    <Router>
   
     <div className="App">
    
    <Routes>
    <Route path="/" element={<Profile />}></Route>
    <Route path="/Profile" element={<Profile />}></Route>
    <Route path="/Projects" element={<Projects />}></Route>
    <Route path="/Contact" element={<Contact />}></Route>
   </Routes>
 
    </div>
    
  
      
    </Router>
  
  );
};

export default App;
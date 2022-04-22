import React from 'react'

import {
    BrowserRouter as Router,
    Outlet,
  
  } from "react-router-dom";
import Appcontainer from './Appcontainer';

  
const Profile = () => {
  return (
  <>
  <Appcontainer>
  <h1 >About Me</h1>
  <img className="profileimg" src="img/Giselleflower.png" alt='Giselle'/>
  <p className='profile-text'>I am a young, motivated individual who is 
    enthusiastic when learning new Software languages
     and can't wait to see how much I will grow within 
     the Road to Hire coding program. I have recently discovered
      my passion for coding and reach my full potential. Apart 
      from coding, I also enjoy reading and traveling.
      
      </p>
      <br />
      <div className='grid-container'>
      <div className='cards'>
        <img src='img/pinklogo.png' alt='Ecom-logo ' className='card-img'/>
        <h2 className='card-title'>Gateway:Jalisco</h2>
        </div>
        <div className='cards'>
        <img src='img/pinklogo.png' alt='Ecom-logo ' className='card-img'/>
        <h2 className='card-title'>Planet Progress</h2>
        </div>
        <div className='cards'>
        <img src='img/pinklogo.png' alt='Ecom-logo ' className='card-img'/>
        <h2 className='card-title'>Ecom:Gigi Designs</h2>
        </div>
        <div className='cards'>
        <img src='img/pinklogo.png' alt='Ecom-logo ' className='card-img'/>
        <h2 className='card-title'>Redesign: Penny Juice</h2>
       </div>
       
     </div>
     </Appcontainer>
  
  </>
  )
}

export default Profile;
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
<div className='homeback'>
  <h1 className='profile-text'>I'm Giselle Guevara Zarate</h1>
  <p className='profile-text'>Junior Sofware Developer</p>
  <p className='profile-text'>I am a young, motivated individual who is 
    enthusiastic when learning new Software languages
     and can't wait to see how much I will grow within 
     the Road to Hire coding program. I have recently discovered
      my passion for coding and reach my full potential. Apart 
      from coding, I also enjoy reading and traveling.
      
      </p>
  <img className="profileimagecenter" src="img/gigi.png" alt='Giselle'/>
</div>

  
  {/* <h1 className='about'>About Me</h1>
  <img className="profileimg" src="img/Giselleflower.png" alt='Giselle'/>
  
  <p className='profile-text'>I am a young, motivated individual who is 
    enthusiastic when learning new Software languages
     and can't wait to see how much I will grow within 
     the Road to Hire coding program. I have recently discovered
      my passion for coding and reach my full potential. Apart 
      from coding, I also enjoy reading and traveling.
      
      </p> */}
      <br />
     <h1 className='about'>Projects</h1>
      <div class="grid-Container">

            <div class="profileproject">
            <img src="img/mexico.png" alt="Mexico"/>
            <div class="cardcon">
            <h2>Jalisco</h2>
       
            <p>Gateway  </p>
            <button>View</button>
            </div>
        </div>
        <div class="profileproject">
            <img src="img/planetprog.png" alt="Planet Progress"/>
            <div class="cardcon">
            <h2>Planet Progress</h2>
           
            <p>Hackathon</p>
            <button>View</button>
            </div>
        </div>
        <div class="profileproject">
            <img src="img/pinklogo.png" alt="Gigi Designs"/>
            <div class="cardcon">
            <h2>Gigi Designs</h2>
           
            <p>Ecomers</p>
            <button>View</button>
            </div>
        </div>
        <div class="profileproject">
            <img src="img/PennyJuice.png" alt="PennyJuice"/>
            <div class="cardcon">
            <h2>Penny Juice</h2>
            
            <p>Redesign</p>
            <button>View</button>
            </div>
         
        </div>
        </div>
        
     </Appcontainer>
  
  </>
  )
}

export default Profile;
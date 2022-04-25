import React from "react";
import { BrowserRouter as Router, Outlet } from "react-router-dom";
import Appcontainer from "./Appcontainer";

const Projects = () => {
  return (
    <>
      <Appcontainer>
        <div className="back">
          {/* <!--sections with info--> */}
          <section>
            <div className="row">
              <div className="column">
                <img className="img-1" src="img/mexico.png" alt="Mexico" />
              </div>
              <div className="column">
                <h2 className="title">Gateway: Jalisco</h2>
                <p className="text">
                  I designed this project when I was in the RoadtoHire Gateway.
                  This project aimed to create a user interaction web page using
                  only HTML and CSS.
                </p>
                <div className="btncont">
                <a
                  class="btn"
                  href="https://replit.com/@GiselleGuevara1/final-mexico#index.html"
                  role="button"
                >
                  View GitHub
                </a>
                <a class="btn" href="" role="button">
                  View Website
                </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="column">
                <img
                  className="img2"
                  src="img/planetprog.png"
                  alt="Planet Progress"
                />
              </div>
              <div className="column">
                <h2 className="title">Hope Hacks: Planet Progress</h2>
                <p className="text">This Hackathon project was elaborated by three individuals, excluding me. We use API to get information on the air quality and how many RV charging stations are within a one-mile radius of the city you put in. I was responsible for the page’s design and how we wanted to display our information. I use gride containers to separate my sections, place each area where it needs to go and add a media query to make the page responsive.</p>
                <div className="btncont">
                <a
                  class="btn"
                  href="https://github.com/TonyLee44/HopeHacks"
                  role="button"
                >
                  View GitHub
                </a>
                <a
                  class="btn"
                  href="https://hope-hacks-final.herokuapp.com/"
                  role="button"
                >
                  View Website
                </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="row">
              <div className="column">
                <img
                  className="img3"
                  src="img/PennyJuice.png"
                  alt="PennyJuice"
                />
              </div>
              <div className="column">
                <h2 className="title"> Redesigned:Penny Juice</h2>
                <p className="text">The redesign project was a group project. Our goal was to create a replicate of the original page and make it better. With this page, I was in charge of the about portion there. My main focus was to create something new with the CSS so I added a parallax scrolling.</p>
                <div className="btncont">
                <a
                  class="btn"
                  href="https://github.com/tloaeza0/pennyjuice"
                  role="button"
                >
                  View GitHub
                </a>
                <a
                  class="btn"
                  href="https://avpenny.herokuapp.com/Home"
                  role="button"
                >
                  View Website
                </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="column">
                <img
                  className="img4"
                  src="img/pinklogo.png"
                  alt="Gigi Designs"
                />
              </div>
              <div className="column">
                <h2 className="title">Eccommerce: Gigi Designs </h2>
                <p className="text">I designed this project based on my collection of cups. Gigi Designs is a website where customers can go and buy custom-made cups or exclusive cups. I created this project on React and had to develop an MYSQL database that holds all of my product’s information. I then used Express to get my data from the database and render it to my produces page. I ended up using SASS for my CSS, making it easier to locate things.</p>
                <div className="btncont">
                <a class="btn" href="" role="button">
                  View GitHub
                </a>
                <a class="btn" href="" role="button">
                  View Website
                </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Appcontainer>
    </>
  );
};
export default Projects;

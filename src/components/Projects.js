import React from "react";
import { BrowserRouter as Router, Outlet } from "react-router-dom";
import Appcontainer from "./Appcontainer";

const Projects = () => {
  return (
    <>
    <Appcontainer>
      <div>
        {/* <!--sections with info--> */}
        <section>
          <div className="row">
            <div className="column">
              <img className="rail-1" src=" " alt="" />
            </div>
            <div className="column">
              <h2 className="RSB">project 1</h2>
              <p className="RSB_para"></p>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="column">
              <img className="rail" src="" alt="" />
            </div>
            <div className="column">
              <h2 className="RSB">project 2</h2>
              <p className="RSB_para"></p>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="column">
              <img className="rail-3" src=" " alt="IRS" />
            </div>
            <div className="column">
              <h2 className="RSB">project 3 </h2>
              <p className="ev_para"></p>
            </div>
          </div>
        </section>
      </div>
      </Appcontainer>
    </>
  );
};
export default Projects;

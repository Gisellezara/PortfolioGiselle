import React from "react";
import Appcontainer from "./Appcontainer";

const Contact = () => {
  return (
    <div>
      <Appcontainer>
      <div className="ctr">
        <form action="process.php" method="post">
          <h3 className="title">
            <i>Contact Me</i>
          </h3>
          <input type="text" name="firstname" placeholder="Full Name" />
          <br />
          <input type="email" name="Email" placeholder="Email" />
          <br />
          <input type="text" name="Comment" placeholder="Comment" />
          <br />
          <input type="Submit" value="Submit" />
        </form>
       
       
      </div>
      </Appcontainer>
    </div>
  )
  
};


export default Contact;

import React from "react";
import Appcontainer from "./Appcontainer";

const Contact = () => {
  return (
    <div className="">
      <Appcontainer>
      <div class="contact-form">
        <form>
          <h3 class="heading"> CONTACT ME </h3>
          <input name="name" 
          type="text" 
          class="input"
           placeholder="Name" />

          <input
            name="email"
            type="text"
            class="input"
            placeholder="Email"
        
          />
          


          <textarea
            name="text"
            class="input"
            placeholder="Comments or Questions"
          ></textarea>

          <input type="submit" value="SUBMIT" />
        </form>
    
      </div>

    
      {/* <div className="ctr">
        <form action="process.php" method="post">
          <h3 className="title">
            <i>Get in Touch</i>
          </h3>
          <input type="text" name="firstname" placeholder="Full Name" />
          <br />
          <input type="email" name="Email" placeholder="Email" />
          <br />
          <input type="text" name="Comment" placeholder="Comment" />
          <br />
          <input type="Submit" value="Submit" />
        </form>
       
       
      </div> */}
      </Appcontainer>
    </div>
  )
  
};


export default Contact;

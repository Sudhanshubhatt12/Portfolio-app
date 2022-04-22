import React from "react";
import "./contact.css";
import { MdCall,MdMail,MdLocationOn } from 'react-icons/md';

const Contact = () => {
  return <section id="contact">
    <h2>Get in touch</h2>
    <div className="container-cont">
      <div className="left">
        <h2>Contact Information</h2>
        <p>Fill up the form and I will get back to you <br /> as soon as possible.</p>
       <span className="cont-inf">
         <span className="one"> <MdCall/> 7895010463 </span>
         <span className="one"> <MdMail/> <a href="mailto:sudhanshubhatt161@gmail.com">sudhanshubhatt161@gmail.com</a> </span>
         <span className="one"> <MdLocationOn></MdLocationOn> Lane_1, Vishnupram, Mothrowala Dehradun. </span>
       </span>
      </div>
      <div className="right">
        <form action="#">
          <span>
            <input type="text" name="fname" placeholder="First name" />
            <input type="text" name="Lname" placeholder="Last name" />
          </span>
          <span>
            <input type="email" name="email" placeholder="Enter your email" />
            <input type="number" name="number" placeholder="Enter your mobile" />
          </span>
          <span className="textarea"> <textarea name="textarea" placeholder="Write your message"  rows="1"></textarea> </span>
          <button className="btn" type="submit">Send</button>
        </form>
      </div>
    </div>

  </section>;
};

export default Contact;

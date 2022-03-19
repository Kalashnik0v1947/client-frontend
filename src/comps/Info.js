import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Info = () => {
  return (
    <div>
      <div id="hours-info">
        <h1>Hours & Info</h1>
        <p>To make a reservation please create an account</p>
        <h2>Monday - Thursday</h2>
        <h3>Lunch</h3>
        <h4>12:00 pm - 4:00 pm</h4>
        <h3>Dinner</h3>
        <h4>6:00 pm - 12:00 am</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
          in iaculis nunc sed augue.
        </p>
        <p></p>
        <h2>Friday - Saturday</h2>
        <h3>Lunch</h3>
        <h4>12:00 pm - 4:00 pm</h4>
        <h3>Dinner</h3>
        <h4>6:00 pm - 2:00 am</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2>Sunday</h2>
        <h3>Brunch</h3>
        <h4>10:00 am - 4:00 pm</h4>
        <h3>Dinner</h3>
        <h4>6:00 pm - 2:00 am</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
          aenean pharetra magna ac.
        </p>
      </div>
      <div id="location">
        <h2>
          We are located northwest of the Black Land of Mordor and close to
          Barad-dûr.
        </h2>
        <h2>At the foothills of Mount Mawson</h2>
        <Link to="#">Phone Number: (305) - 555 - 5555</Link> <br></br> <br></br>
        <Link to="#">Email Address: sergestavern@sergellc.com</Link>
        <br></br>
      </div>
      <br></br>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131694.13362558573!2d73.44044915268111!3d-53.08767064090007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb301527d71285a79%3A0x1eede2d8ec04e7bf!2sMawson%20Peak!5e1!3m2!1sen!2sus!4v1646881941974!5m2!1sen!2sus"
        width="800"
        height="400"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Info;

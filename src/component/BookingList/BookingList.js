import React from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import image from "../../images/imageBg-01.png";
import "./BookingList.css";

const BookingList = () => {
  return (
    <div className="container-fluid row">
      <Sidebar></Sidebar>
      <h3 className="text-brand p-4">Booking List</h3>
      <div
        className="col-md-10"
        style={{ position: "absolute", right: "0", background: "#F4FDFB" }}
      >
        <div className="row">
        <div className="col-md-6">
          <div className="bookingList-style">
            <div className="row">
              <div className="col">
              <img src={image} alt="" />
              </div>
              <div className="col">
              
              </div>
            </div>
            <h3>Office Interior Design</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bookingList-style">
            <div className="row">
              <img src={image} alt="" />
              
            </div>
            <h3>Office Interior Design</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;

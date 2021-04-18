import React, { useEffect, useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import "./BookingList.css";
import AllBookings from "../AllBookings/AllBookings";
import { Row, Spinner } from "react-bootstrap";

const BookingList = () => {
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch(`https://mighty-eyrie-38405.herokuapp.com/orders`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setBooking(data);
        })
    },[])
  return (
    <div className="container-fluid row">
      <Sidebar></Sidebar>
      
      <div className="col-md-10" style={{ position: "absolute", right: "0", background: "#F4FDFB" }} >
      <h3 className="text-brand p-4">Booking List</h3>
      <div className="row">
        {
            booking.length === 0 ? <Row><Spinner animation="grow" /></Row> : booking.map(bookings => <AllBookings bookings={bookings} key={bookings._id}></AllBookings>)
        }
        </div>
      </div>
    </div>
  );
};

export default BookingList;

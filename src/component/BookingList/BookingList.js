import React, { useEffect, useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import "./BookingList.css";
import AllBookings from "../AllBookings/AllBookings";

const BookingList = () => {
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
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
            booking.map(bookings => <AllBookings bookings={bookings} key={bookings._id}></AllBookings>)
        }
        </div>
      </div>
    </div>
  );
};

export default BookingList;

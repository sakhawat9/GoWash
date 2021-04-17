import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import { UserContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripHorizontal,
  faSignOutAlt,
  faPlus,
  faUserPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  // const [isDoctor, setIsDoctor] = useState(false);

  // useEffect(() => {
  //     fetch(`http://localhost:5000/isDoctor`, {
  //         method: 'POST',
  //         headers: { 'content-type': 'application/json'},
  //         body: JSON.stringify({email: loggedInUser.email})
  //     })
  //     .then(res => res.json())
  //     .then(data => setIsDoctor(data))
  // }, [])

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled li-style">
      <h2 className="pb-4"><Link className="laundry" to="/">Laundry Service</Link></h2>
        <li>
          <Link to="/orderList" className="text-white">
            <FontAwesomeIcon icon={faList} /> <span>Order List</span>
          </Link>
        </li>
        {
          <div>
            <li>
              <Link to="/addService" className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/prescriptions" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                <span>Manage Services</span>
              </Link>
            </li>
            <li>
              <Link to="/booking" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                <span>Book</span>
              </Link>
            </li>
            <li>
              <Link to="/bookingList" className="text-white">
                <FontAwesomeIcon icon={faList} />{" "}
                <span>Booking List</span>
              </Link>
            </li>
            <li>
              <Link to="/review" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                <span>Review</span>
              </Link>
            </li>
          </div>
        }
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

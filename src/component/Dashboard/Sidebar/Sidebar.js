import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png'
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
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
      fetch(`http://localhost:5000/isAdmin`, {
          method: 'POST',
          headers: { 'content-type': 'application/json'},
          body: JSON.stringify({email: loggedInUser.email})
      })
      .then(res => res.json())
      .then(data => {
        console.log("Data", data);
        setIsAdmin(data)
      })
  }, [])
console.log(isAdmin);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled li-style">
      <Link className="laundry" to="/"><img src={logo} alt=""/></Link>
        <li>
          <Link to="/orderList" className="text-white">
            <FontAwesomeIcon icon={faList} /> <span>Order List</span>
          </Link>
        </li>
     
          
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
              <Link to="/manageService" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                <span>Manage Services</span>
              </Link>
            </li>
          { isAdmin && <div>
          <li>
            <Link to="/booking/:_id" className="text-white">
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
        </div>}
  
      </ul>
      <div>
        <Link to="/login" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} onClick={() => setLoggedInUser({})} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

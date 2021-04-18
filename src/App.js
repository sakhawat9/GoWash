import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home/Home";
import Login from "./component/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import AddService from "./component/AddService/AddService";
import Sidebar from "./component/Dashboard/Sidebar/Sidebar";
import Booking from "./component/Booking/Booking";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Review from "./component/Review/Review";
import BookingList from "./component/BookingList/BookingList";
import OrderList from "./component/OrderList/OrderList";
import MakeAdmin from "./component/MakeAdmin/MakeAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/addService">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/sidebar">
              <Sidebar />
            </PrivateRoute>
            <PrivateRoute path="/booking/:_id">
              <Booking />
            </PrivateRoute>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/bookingList">
              <BookingList />
            </Route>
            <Route path="/orderList">
              <OrderList />
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

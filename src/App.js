import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import AddService from './component/AddService/AddService';
import Sidebar from './component/Dashboard/Sidebar/Sidebar';
import Booking from './component/Booking/Booking';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
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
            <Route path="/sidebar">
            <Sidebar />
            </Route>
            <PrivateRoute path="/booking">
              <Booking />
            </PrivateRoute>
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
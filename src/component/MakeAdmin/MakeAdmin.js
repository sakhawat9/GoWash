import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const MakeAdmin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({})


    const handleBlur = (e) => {

        const newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)

    }

    const handleSubmit = () => {
            const formData = new FormData()
            formData.append('email', admin.email);

            fetch('https://mighty-eyrie-38405.herokuapp.com/admin', {
            method: "POST",
            body: formData, email: loggedInUser.email
            })
           
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
            alert("added admin successfully");
          })
          .catch(error => {
            console.log(error)
          })
      };
  return (
    <div className="container-fluid row">
      <Sidebar></Sidebar>
      <div className="pt-4 col-md-10" style={{ position: "absolute", right: "0", background: "#F4FDFB" }}>
        <div className="col-md-8 offset-2">
            <h3 className="text-brand pt-5">Make Admin</h3>
            <from  onClick={handleSubmit}>


                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onBlur={handleBlur} className="form-control" type="email" name="email" placeholder="jon@gamil.com" />
                </div>
                
                <button type="submit" className="btn-brand">Submit</button>

            </from>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;

import React from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const MakeAdmin = () => {
  return (
    <div className="container-fluid row">
      <Sidebar></Sidebar>
      <div className="pt-4 col-md-10" style={{ position: "absolute", right: "0", background: "#F4FDFB" }}>
        <div className="col-md-8 offset-2">
            <h3 className="text-brand pt-5">Make Admin</h3>
            <div className="row py-5" >
              <div className="col">
                <input className="form-control" type="text" name="name" id="" placeholder="jon@gamil.com" />
              </div>
                <button type="button" className=" btn-brand px-3 p-1"> Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;

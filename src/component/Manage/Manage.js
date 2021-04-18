import React from 'react';
import './Manage.css'

const Manage = ({service}) => {
    const {name, textarea, _id, image} = service;

    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            alert("deleted successfully");
          });
      };

    return (
        <div className="col-md-6 col-lg-4">
            <div className="p-3 mb-3 manage-style">
            <img src={`data:image/jpeg;base64,${image.img}`} />
                <h3 className="pt-3">{name}</h3>
                <p>{textarea}</p>
                <button className="btn btn-danger" onClick={() => deleteProduct(_id)}>Delete</button> <button className="btn btn-primary" >Edit</button>
            </div>
        </div>
    );
};

export default Manage;
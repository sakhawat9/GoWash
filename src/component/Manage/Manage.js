import React from 'react';
import './Manage.css'

const Manage = ({service}) => {
    const {name, textarea, _id, image, price} = service;

    const deleteProduct = (id) => {
        fetch(`https://mighty-eyrie-38405.herokuapp.com/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            alert("deleted successfully");
          });
      };
      const loadProduct = (id) => {
        console.log("id", id);
        fetch(`http://localhost:5000/update/${id}`)
        .then((res) => res.json())
        .then(data =>{
          const update = document.getElementById('update');

        })
      }

    return (
        <div className="col-md-6 col-lg-4">
            <div className="p-3 mb-3 manage-style">
            <img src={`data:image/jpeg;base64,${image.img}`} />
                <h3 className="pt-3">{name}</h3>
                <h3>${price}</h3>
                <p>{textarea}</p>
                <button className="btn btn-danger mr-3" onClick={() => deleteProduct(_id)}>Delete</button> 
                <button className="btn btn-primary" onClick={() => loadProduct(_id)}> Edit</button>
            </div>
            <div style={{display: 'none'}} className="from-style">
              <from>
                <input name="name" placeholder="Name" type="text"/>
              </from>
            </div>
        </div>
    );
};

export default Manage;
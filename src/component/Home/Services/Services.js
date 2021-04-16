import { Link } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'

const Services = ({service}) => {
    const {_id, name, price, textarea} = service;
    const history = useHistory()
    const handleServiceClick = () => {
        history.push(`/booking/${_id}`)
    }
    return (
        <div className="col-md-6 col-lg-4">
            <div className="p-3 mb-3 service-style">
            <img src={`data:image/jpeg;base64,${service.image.img}`} />
            <h3>{name}</h3>
            <h3>${price}</h3>
            <p>{textarea}</p>
            <button onClick={handleServiceClick} className="btn-brand my-4">LEARN MORE</button>
            </div>
        </div>
    );
};

export default Services;
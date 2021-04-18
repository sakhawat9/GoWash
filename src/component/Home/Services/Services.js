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
                <figure>
                <img src={`data:image/jpeg;base64,${service.image.img}`} />
                </figure>
                <h3 className="pt-3">{name}</h3>
                <h3>${price}</h3>
                <p>{textarea}</p>
                <button onClick={handleServiceClick} className="btn-brand my-4">BUY NOW</button>
            </div>
        </div>
    );
};

export default Services;
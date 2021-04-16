import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Services from '../Services/Services';


const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setServices(data);
        })
    }, [])
    return (
        <section className="py-5">
            <Container>
                <h1 className="text-center">What We Do Best</h1>
                <h4 className="text-center text-brand p-5">Our Services</h4>
                <div className="row">
                    {
                        services.map(service =><Services service={service} key={service._id}></Services>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Service;
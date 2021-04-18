import React from 'react';
import { Row } from 'react-bootstrap';
import './Hero.css'

const Hero = () => {
    return (
        <Row>
        <section className=" text-white hero-style d-flex align-items-center">
            
                <div className="col-md-5">
                <div className="hero">
                    <div className="">
                        <h2>Washing Clothes Was <br/> Never so Easy</h2>
                        <h5>YOU DON'T NEED TO DO ANYTHING</h5>
                        <button className="btn-brand">ORDER NOW</button>
                    </div>
                </div>
            </div>
        </section>
        </Row>
    );
};

export default Hero;
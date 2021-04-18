import React from 'react';
import signUp from '../../../images/smartphone.png';
import pickUp from '../../../images/man.png';
import cleaning from '../../../images/washing-machine.png';
import delivery from '../../../images/shirt.png';
import { Container } from 'react-bootstrap';
import './Process.css'


const Process = () => {
    return (
        <section className="text-center">
            <Container>
                <h1 className="pt-5">Clean Clothes Have Never Been This Easy!</h1>
                <h6 className="text-brand p-5">HOW OUR SERVICE WORKS</h6>
                <div className="row process-style">
                    <div className="col-md-6 col-lg-3">
                        <img src={signUp} alt=""/>
                        <h2>Sign Up</h2>
                        <p>All members receive bonuses and/or discounts. Sign up for more information.</p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <img src={pickUp} alt=""/>
                        <h2>Pick Up</h2>
                        <p>If you are in an urgent need of laundry, we can come right to you for a pick-up.</p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <img src={cleaning} alt=""/>
                        <h2>Cleaning</h2>
                        <p>We use premium materials, technologies and guarantee treatment with care.</p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <img src={delivery} alt=""/>
                        <h2>Delivery</h2>
                        <p>Free delivery for every order upon prior request within 24 hours after cleaning</p>
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default Process;
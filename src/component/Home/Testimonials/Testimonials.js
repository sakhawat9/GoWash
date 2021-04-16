import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../../../images/imageBg-01.jpg'

const Testimonials = () => {
    return (
        
        <section style={{ background: '#F7F7F6'}} className="py-5">
            <Container>
                <h3 className="text-center py-5">Testimonials</h3>
            <div className="row">
            <div className="col-md-4">
                <div className="row">
                    <img style={{width: '70px', height: '70px', borderRadius: '50%'}} src={image} alt=""/>
                    <div>
                    <h3>Miriam Barron</h3>
                    <p>CEO, Manpol</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            </div>
            <div className="col-md-4">
                <div className="row">
                    <img style={{width: '70px', height: '70px', borderRadius: '50%'}} src={image} alt=""/>
                    <div>
                    <h3>Miriam Barron</h3>
                    <p>CEO, Manpol</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            </div>
            <div className="col-md-4">
                <div className="row">
                    <img style={{width: '70px', height: '70px', borderRadius: '50%'}} src={image} alt=""/>
                    <div>
                    <h3>Miriam Barron</h3>
                    <p>CEO, Manpol</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            </div>
            </div>
            </Container>
        </section>
        
    );
};

export default Testimonials;
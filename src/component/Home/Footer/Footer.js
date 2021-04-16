// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-area mt-5 py-5 ">
            <Container>
                <footer className="row">
                    <div className="col-md-6 col-lg-3">
                        <img src={logo} alt=""/>
                        <p>Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Ab illo inventore veritatis et quasi architecto. Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h3>Blog Feed</h3>
                        <a href="#">M3 E36 Cabrio</a>
                        <p>JULY 7, 2022</p>
                        <br/>
                        <a href="#">Ordering a rinse is easy!</a>
                        <p>June 21 2022</p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h3>Services</h3>
                        <a href="#">Dry Clean Your Winter Coat</a><br/>
                        <a href="#">Dry Clean</a><br/>
                        <a href="#">Ironing Services</a><br/>
                        <a href="#">Laundry</a>Wash or Fold<br/>
                        <a href="#">Laundry Service London</a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h3>Contact Info</h3>
                        <h3 className="text-brand">+123456789</h3>
                        <p>123, New Lenox, Chicago IL 60606</p>
                        <a href="#">info@yoursitename.com</a><br/><br/>
                        <a href="#"><FontAwesomeIcon /></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                    
                </footer>
                <div className="text-center">
                    <p>Copyright © {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
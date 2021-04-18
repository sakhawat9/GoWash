import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (

      <section className=" text-white hero-style d-flex align-items-center">
        <Container className="hero">
          <Row>
            <div className="col-md-5">
              <h2 className="mb-4">
                Washing Clothes Was <br /> Never so Easy
              </h2>
              <h5 className="mb-4">YOU DON'T NEED TO DO ANYTHING</h5>
              <button className="btn-brand">ORDER NOW</button>
            </div>
          </Row>
        </Container>
      </section>

  );
};

export default Hero;

import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    }, [])
    return (
        
        <section style={{ background: '#F7F7F6'}} className="py-5">
            <Container>
                <h3 className="text-center py-5">Testimonials</h3>
            <div className="row">
            
            {
                review.length === 0 ? <Row><Spinner animation="grow" /></Row> : review.map(review => <Testimonial review={review} key={review._id}></Testimonial>)
            }
            </div>
            </Container>
        </section>
        
    );
};

export default Testimonials;
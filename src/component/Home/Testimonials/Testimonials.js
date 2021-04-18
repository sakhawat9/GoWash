import React, { useEffect, useState } from 'react';
import { Container,  Spinner } from 'react-bootstrap';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://mighty-eyrie-38405.herokuapp.com/review')
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
                review.length === 0 ? 
                <div className="text-center w-100">
                    <Spinner animation="grow" />
                </div> 
                :
                  review.map(review => <Testimonial review={review} key={review._id}></Testimonial>)
            }
            </div>
            </Container>
        </section>
        
    );
};

export default Testimonials;
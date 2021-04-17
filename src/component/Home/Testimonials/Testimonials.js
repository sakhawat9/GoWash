import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import image from '../../../images/imageBg-01.jpg'
import Testimonial from './Testimonial';

const Testimonials = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setReview(data)
        })
    }, [])
    return (
        
        <section style={{ background: '#F7F7F6'}} className="py-5">
            <Container>
                <h3 className="text-center py-5">Testimonials</h3>
            <div className="row">
            
            {
                review.map(review => <Testimonial review={review} key={review._id}></Testimonial>)
            }
            </div>
            </Container>
        </section>
        
    );
};

export default Testimonials;
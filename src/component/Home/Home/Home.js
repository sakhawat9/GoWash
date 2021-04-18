import React from 'react';
import ContactFrom from '../ContactFrom/ContactFrom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Process from '../Process/Process';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Process />
            <Service />
            <Testimonials />
            <ContactFrom />
            <Footer />
            
        </div>
    );
};

export default Home;
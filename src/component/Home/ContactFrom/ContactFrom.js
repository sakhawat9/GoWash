import React from 'react';

const ContactFrom = () => {
    return (
        <section style={{width: '500px'}} className="container text-center p-3">
            <h2 className="py-5">Have a Question?</h2>
            <h5 className="pb-5 text-brand">DROP A LINE</h5>
            <from >
                <input type="text" className="form-control" name="name" id="" placeholder="Your Name" />
                <br/>
                <input type="email" className="form-control" name="email" id="" placeholder="Your Email"/>
                <br/>
                <textarea name="textarea" className="form-control" id="" cols="30" rows="5" placeholder="Massage" />
                <br/>
                <input type="checkbox" name="checkbox" id=""/>
                <label htmlFor="checkbox">I agree that my submitted data is being collected and stored.</label>
                <br/>
                <button className=" btn-brand">SEND MASSAGE</button>
            </from>
        </section>
    );
};

export default ContactFrom;
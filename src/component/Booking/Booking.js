import React, { useContext, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import {loadStripe} from '@stripe/stripe-js';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';


const stripePromise = loadStripe('pk_test_51Ie9ZXBjQKjl2gnMRtnIKkQcSkKRYqFUkMbvF0tC2w5BIxmC9muLrYSGR9PJOCqnl7liWXY9j1dlMW0Is1xXqdZQ00bQLvMW3m');

const Booking = () => {
    const [bookingData, setBookingData] = useState({})
    const [loggedInUser] = useContext(UserContext);

    const handlePaymentSuccess = paymentId => {
        const bookingDetails = {
            ...loggedInUser,
            paymentId,
        }
    }
    return (
        <section className="container-fluid row">
           <Sidebar></Sidebar>
            <div className="pt-4 col-md-10" style={{position: "absolute", right: "0", background: "#F4FDFB"}}>
                <h3 className="text-brand p-4">Book</h3>
                <form style={{background: "#fff"}} className="m-4 p-3 col-md-6">
                    <input type="text" className="form-control" name="name" defaultValue={loggedInUser.userName} />
                    <br/>
                    <input type="email" className="form-control" name="email" defaultValue={loggedInUser.email} />
                   <br/>
                    <input type="text" className="form-control" name="address"   />
                    <br/>
                    <input type="radio" name="payment" id="creaditCard"/>
                    <label style={{paddingRight: "30px",}} htmlFor="creaditCard">Creadit Card</label>
                    <input type="radio" name="payment" id="paypal"/>
                    <label htmlFor="paypal">PayPal</label>
                    <ProcessPayment handlePayment={handlePaymentSuccess} />
                </form>
                
            </div>
        </section>
    );
};

export default Booking;
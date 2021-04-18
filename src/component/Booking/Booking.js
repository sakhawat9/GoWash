import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import {loadStripe} from '@stripe/stripe-js';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { useParams, useHistory } from 'react-router';


const stripePromise = loadStripe('pk_test_51Ie9ZXBjQKjl2gnMRtnIKkQcSkKRYqFUkMbvF0tC2w5BIxmC9muLrYSGR9PJOCqnl7liWXY9j1dlMW0Is1xXqdZQ00bQLvMW3m');

const Booking = () => {
    const { _id } = useParams();
    const [bookingData, setBookingData] = useState({})
    const [loggedInUser] = useContext(UserContext);

    const history = useHistory()
loggedInUser.isLoggedIn !== true && history.push(`/login`);

    useEffect(() => {
        fetch(`https://mighty-eyrie-38405.herokuapp.com/singleService/${_id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setBookingData(data[0])
        })
    }, [])

    const handlePaymentSuccess = payment => {
        const orderDetails = {
            ...loggedInUser,
            ...bookingData,
            payment
        }

        
        fetch('https://mighty-eyrie-38405.herokuapp.com/addBooking', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })
      .then(res => res.json())
      .then(data => {
          alert('Your order placed successfully')
      })
     
    }

    
    return (
        <section className="container-fluid row">
           <Sidebar></Sidebar>
            <div className="pt-4 col-md-10" style={{position: "absolute", right: "0", background: "#F4FDFB"}}>
                <h3 className="text-brand p-4">Book</h3>
                <form  style={{background: "#fff"}} className="m-4 p-3 col-md-6">
                    <input type="text" className="form-control" name="name" defaultValue={loggedInUser.userName} />
                    <br/>
                    <input type="email" className="form-control" name="email" defaultValue={loggedInUser.email} />
                   <br/>
                    <input type="text" className="form-control" name="address" defaultValue={bookingData.name}  />
                    <br/>
                    <input type="radio" name="payment" id="creaditCard"/>
                    <label style={{paddingRight: "30px",}} htmlFor="creaditCard">Creadit Card</label>
                    <input type="radio" name="payment" id="paypal"/>
                    <label htmlFor="paypal">PayPal</label>
                    
                </form>
                <div className="m-4 p-3 col-md-6">
                    <ProcessPayment handlePayment={handlePaymentSuccess} />
                </div>
                
                
            </div>
        </section>
    );
};

export default Booking;
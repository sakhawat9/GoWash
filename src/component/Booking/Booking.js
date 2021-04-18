import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import {loadStripe} from '@stripe/stripe-js';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { useParams } from 'react-router';


const stripePromise = loadStripe('pk_test_51Ie9ZXBjQKjl2gnMRtnIKkQcSkKRYqFUkMbvF0tC2w5BIxmC9muLrYSGR9PJOCqnl7liWXY9j1dlMW0Is1xXqdZQ00bQLvMW3m');

const Booking = () => {
    const { _id } = useParams();
    console.log(_id);
    const [bookingData, setBookingData] = useState({})
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/singleService/${_id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setBookingData(data[0])
        })
    }, [])
console.log(loggedInUser);
console.log(bookingData);

    const handlePaymentSuccess = paymentId => {
    //     const orderDetails = {
    //         ...loggedInUser,
    //         ...bookingData,
    //         paymentId
    //     }
        
    //     fetch('http://localhost:5000/addOrder', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(orderDetails)
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //       console.log(data);
    //       alert('Your order placed successfully')
    //   })
     
    }
    const handleSubmit = data => {
        console.log('bookingData', data);
    }
    
    return (
        <section className="container-fluid row">
           <Sidebar></Sidebar>
            <div className="pt-4 col-md-10" style={{position: "absolute", right: "0", background: "#F4FDFB"}}>
                <h3 className="text-brand p-4">Book</h3>
                <form onSubmit={handleSubmit} style={{background: "#fff"}} className="m-4 p-3 col-md-6">
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
                    <ProcessPayment handlePayment={handlePaymentSuccess} />
                </form>
                
            </div>
        </section>
    );
};

export default Booking;
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Order from '../Order/Order';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => {
            //  console.log(data);
            setOrders(data)
        })
    }, [])
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="pt-4 col-md-10" style={{position: "absolute", right: "0", background: "#F4FDFB"}}>
            <h3 className="text-brand p-4">Order List</h3>
            <Table striped bordered hover className="p-3 shadow">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Services</th>
                <th>Pay with</th>
                <th>status</th>
                </tr>
            </thead>
            
            {
              orders.length !== 0 && orders.map(order => <Order order={order} key={order.length}></Order>)
            }
            
        </Table>
            </div>
        </section>
    );
};

export default OrderList;
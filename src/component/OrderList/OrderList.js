import React from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const OrderList = () => {
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="pt-4 col-md-10" style={{position: "absolute", right: "0", background: "#F4FDFB"}}>
            <h3 className="text-brand p-4">Order List</h3>
            <Table striped bordered hover className="p-3 shadow">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Wight</th>
              <th>Amount</th>
              <th>Manage</th>
            </tr>
          </thead>
        
        </Table>
            </div>
        </section>
    );
};

export default OrderList;
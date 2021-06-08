import React from 'react';

const Order = ({order}) => {
    const {userName, email, name,  _id, status, payment} = order;
    const handleStatusChange = (id, st) => {
        fetch('https://mighty-eyrie-38405.herokuapp.com/updateOrderStatus', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, status: st})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <tbody>
            <tr>
                <td>{userName}</td>
                <td>{email}</td>
                <td>{name}</td>
                <td>{payment.brand}</td>
                <td>
                <select 
                className={status === "Pending" ? "btn btn-danger" : status === "Done" ? "btn btn-success" : "btn btn-info"}
                defaultValue={status}
                onChange={e => handleStatusChange(_id, e.target.value)}
                > 
                    <option className="bg-white text-muted" value="Pending">Pending</option>
                    <option className="bg-white text-muted" value="On-going">On-going</option>
                    <option className="bg-white text-muted" value="Done">Done</option>
                </select>
                </td>
            </tr>
        </tbody>
    );
};

export default Order;
import React from 'react';

const Order = ({order}) => {
    const {userName, email, name, payment} = order;
    return (
        <tbody>
            <tr>
                <td>{userName}</td>
                <td>{email}</td>
                <td>{name}</td>
                <td>{payment.brand}</td>
                <td></td>
            </tr>
        </tbody>
    );
};

export default Order;
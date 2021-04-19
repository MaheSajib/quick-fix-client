import React, { useState } from 'react';

const OrderList = () => {
    const [orders, setOrders] = useState([])
    fetch('http://localhost:5055/orderList')
        .then(res => res.json())
        .then(data => setOrders(data))
    return (
        <div>
            <h1>Order List</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => 
                        <tr>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.service}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;
import React, { useEffect, useState } from 'react';

const OrderList = () => {


    const [orders, setOrders] = useState([])
    
    useEffect(()=>{
        fetch('https://shielded-spire-18150.herokuapp.com/orderList')
        .then(res => res.json())
        .then(data => setOrders(data))

    }, [])

        const handleStatus = (event, id) => {
            const status = event.target.value;
            const url = `https://shielded-spire-18150.herokuapp.com/processStatus?status=${status}&id=${id}`;
            fetch(url , {
                method: 'PATCH'
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }

    return (
        <div>
            <h1>Order List</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.service}</td>
                                <td> <select onChange={(event) => handleStatus(event , order._id)} id="inputState" class="form-control">
                                    <option selected>{order.status}</option>
                                    <option>Pending</option>
                                    <option>On Going</option>
                                    <option>Done</option>
                                </select></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;
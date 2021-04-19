import React, { useState } from 'react';

const ManageServices = () => {
    const [manageService , setManageService] = useState([])
    fetch('https://shielded-spire-18150.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setManageService(data))
    return (
        <div>
            <h1>Manage Services</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageService.map(ms => 
                        <tr>
                            <td>{ms.name}</td>
                            <td>{ms.description}</td>
                            <td>{ms.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageServices;
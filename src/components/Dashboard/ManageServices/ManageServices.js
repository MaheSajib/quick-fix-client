import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [manageService , setManageService] = useState([])
    const [deleted, setDeleted] = useState('')

    useEffect(()=>{
        fetch('https://shielded-spire-18150.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setManageService(data))
    },[deleted])


    const handleDelete = (id) => {
        fetch(`https://shielded-spire-18150.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => setDeleted(id))
    }

    return (
        <div>
            <h1>Manage Services</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageService.map(ms => 
                        <tr>
                            <td>{ms.name}</td>
                            <td>{ms.description}</td>
                            <td>{ms.price}</td>
                            <td><button onClick={() => handleDelete(ms._id)} className="btn-danger"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageServices;
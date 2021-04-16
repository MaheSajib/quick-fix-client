import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div class="sidebar">
            <Link class="active" to="/dashboard/orderlist">Order List</Link>
            <Link to="/dashboard/addservice">Add Service</Link>
            <Link to="/dashboard/makeadmin">Make Admin</Link>
            <Link to="/dashboard/manageservices">Manage Services</Link>
        </div>
    );
};

export default Sidebar;
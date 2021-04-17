import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faPlus, faUserPlus, faBorderAll, faShoppingCart, faCommentDots} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div class="sidebar">
            <Link class="active" to="/dashboard"><h4><b>Quick-fix</b></h4></Link>
            <Link to="/dashboard/orderlist"><FontAwesomeIcon icon={faLock} /> <b>Order List</b></Link>
            <Link to="/dashboard/addservice"><FontAwesomeIcon icon={faPlus} /> <b>Add Service</b></Link>
            <Link to="/dashboard/makeadmin"><FontAwesomeIcon icon={faUserPlus}/> <b>Make Admin</b></Link>
            <Link to="/dashboard/manageservices"><FontAwesomeIcon icon={faBorderAll} /> <b>Manage Services</b></Link>
            <Link to="/dashboard/book"><FontAwesomeIcon icon={faShoppingCart} /> <b>Book</b></Link>
            <Link to="/dashboard/review"><FontAwesomeIcon icon={faCommentDots} /> <b>Review</b></Link>
        </div>
    );
};

export default Sidebar;
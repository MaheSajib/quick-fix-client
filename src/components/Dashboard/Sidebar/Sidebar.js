import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faPlus, faUserPlus, faBorderAll, faShoppingCart, faCommentDots} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5055/adminCheck?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            console.log(data.length)
            if(data.length === 0){
                setAdmin(false)
            }
            else{
                setAdmin(true)
            }
        })
    }, [loggedInUser.email])

    console.log(admin, loggedInUser.email)
    return (
        <div class="sidebar">
            <Link class="active" to="/"><h4><b>Quick-fix</b></h4></Link>
            <Link to="/dashboard/orderList"><FontAwesomeIcon icon={faLock} /> <b>Order List</b></Link>
            { 
               admin && <Link to="/dashboard/addService"><FontAwesomeIcon icon={faPlus} /> <b>Add Service</b></Link>
            }
            { 
               admin && <Link to="/dashboard/makeAdmin"><FontAwesomeIcon icon={faUserPlus}/> <b>Make Admin</b></Link>
            }
            { 
               admin && <Link to="/dashboard/manageServices"><FontAwesomeIcon icon={faBorderAll} /> <b>Manage Services</b></Link>
            }
            
            <Link to="/dashboard/book"><FontAwesomeIcon icon={faShoppingCart} /> <b>Order</b></Link>
            <Link to="/dashboard/review"><FontAwesomeIcon icon={faCommentDots} /> <b>Review</b></Link>
        </div>
    );
};

export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    return (
        <div className="service-card mx-3 my-3 " style={{width: '18rem'}}>
                <div className="card-body text-center">
                    <img className="w-25" src={service.imageURL} alt=""/>
                    <h5 className="card-title mt-5 mb-3"><b>{service.name}</b></h5>
                    <p className="card-text text-secondary">{service.description}</p>
                    <h4 className="card-text text-secondary">${service.price}</h4>
                    <button className="btn btn-success rounded-pill "><Link className="text-decoration-none text-dark" to="/dashboard/book">Read More</Link></button>
                </div>
        </div>
    );
};

export default ServiceDetail;
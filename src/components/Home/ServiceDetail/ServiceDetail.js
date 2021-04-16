import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    return (
        <div className="card mx-3 my-3 " style={{width: '18rem'}}>
                <div className="card-body text-center">
                    <h5 className="card-title mt-5 mb-3"><b>{service.name}</b></h5>
                    <p className="card-text text-secondary">{service.description}</p>
                    <button className="btn btn-success rounded-pill">Read More</button>
                </div>
        </div>
    );
};

export default ServiceDetail;
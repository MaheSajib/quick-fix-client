import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Service.css';

const Service = () => {

    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])

    return (
        <section className="container  services-container m-5">
            <div className="text-center">
                <h1 style={{ color: '#232323', fontSize: '60px' }}><b>What Problems Can <br /> Repair Fix?</b></h1>
            </div>
            <div className=" justify-content-center row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Service;
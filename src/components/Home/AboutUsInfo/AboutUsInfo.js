import React from 'react';
import './AboutUsInfo.css';
import repair from '../../../image/phone_1.png'

const AboutUsInfo = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center about-us-info">
            <div className="col-md-6 offset-md-1">
                <h1 style={{ color: '#fff', fontSize: '60px' }}>We Can Fix It Almost <br/> As Fast As You Can Break It.</h1>
                <p className="text-secondary">We do fast phone repair. In most cases, technicians will be able <br/> to repair your device in just minutes, we’ll normally get your <br/> phone in and out in 45 minutes or less.</p>
                <button style={{ height: '80px', width: '150px' }}  className="btn btn-success rounded-pill">About Us</button>
            </div>
            <div className="col-md-4">
                <img style={{ height: '400px' }} src={repair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default AboutUsInfo;
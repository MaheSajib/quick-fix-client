import React from 'react';
import service from '../../../image/phone_2.png'

const ServiceProvide = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center service-provide">
            <div className="col-md-6 offset-md-1">
                <img style={{ height: '500px' }} src={service} alt="" className="img-fluid" />
            </div>
            <div className="col-md-5 ">
                <h1 style={{ color: '#232323', fontSize: '60px' }}> <b>We Can Fix It! </b></h1>
                <p className="text-secondary">Our prices for iPhone repairs are competitive with anyone in the city. <br /> We repair cracked screens for all models of iPhones and repair broken <br /> buttons, speakers and cameras as well. Cracked screen on your new <br /> iPhone? We fix that.</p>
                <div>
                    <ol className="d-flex  align-items-center font-weight-bold py-3">
                        <div>
                            <li>Headphones Plug</li>
                            <br/>
                            <li>Charging Port</li>
                            <br/>
                            <li>Home Button</li>
                            <br/>
                            <li>Side Buttons</li>
                            <br/>
                            <li>iSight Camera</li>
                        </div>
                        <div className="float-right mx-5">
                            <li>Power Button</li>
                            <br/>
                            <li>Screen</li>
                            <br/>
                            <li>Battery</li>
                            <br/>
                            <li>Won′t Turn On</li>
                            <br/>
                            <li>Power Off</li>
                        </div>
                    </ol>
                </div>
            </div>

        </main>
    );
};

export default ServiceProvide;
import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Cracked Screen',
        description: 'Cracked screen replacement services are both fast and affordable.',
    },
    {
        name: 'Water Damage',
        description: 'We will perform a diagnostic to determine the extent of the damage.',
    },
    {
        name: 'Speaker Not Working',
        description: 'You may be in need of a speaker repair or replacement.',
    },
    {
        name: 'No Signal',
        description: 'When you are experiencing weak signal or no signal.',
    },
    {
        name: 'Broken Buttons',
        description: 'If buttons on your device are malfunctioning or broken.',
    },
    {
        name: 'Dead Battery',
        description: 'FixTeam performs professional battery replacements.',
    }
]


const Service = () => {
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
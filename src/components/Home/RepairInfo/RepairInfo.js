import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faMobile, faTablet, faLaptop, faDesktop } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        icon: faMobile,
        title: 'Mobile Phone Repair',
        background: 'primary'
    },
    {
        icon: faLaptop,
        title: 'Laptop Repair',
        background: 'dark'
    },
    {
        icon: faTablet,
        title: 'Tablet Repair',
        background: 'primary'
    },

    {
        icon: faDesktop,
        title: 'Computer Repair',
        background: 'dark'
    }
]

const RepairInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default RepairInfo;
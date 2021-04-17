import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-3  info-card">
            <div className={` text-center info-container `}>
                <div className="mb-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6 className="info-name">{info.title}</h6>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
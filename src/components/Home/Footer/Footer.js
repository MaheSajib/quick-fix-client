import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram,  faTwitter } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const quickLinks = [
        {name: "Repairs" , link: "/repairs"},
        {name: "Locations" , link: "/locations"},
        {name: "Added Services" , link: "/added-services"},
        {name: "Contacts" , link: "/contacts"},
        {name: "Blog" , link: "/blog"},
        {name: "About Us" , link: "/about-us"},
    ]
    const openTime = [
        {name: "Store Hours:" , link: "/time"},
        {name: "Monday - Friday: 9:00 a.m. to 8:00 p.m." , link: "/time"},
        {name: "Saturday & Sunday: 10:00 a.m. to 6:00 p.m" , link: "/time"},
       
    ]
    const information = [
        {name: "Blog" , link: "/blog"},
        {name: "Find A Store" , link: "/find-a-store"},
        {name: "Franchise Information" , link: "/franchise-information"},
        {name: "Locations" , link: "/locations"},
        {name: "CPR for Business" , link: "/crp-business"}
    ]
    const repairServices = [
        {name: "Smartphone" , link: "/smartphone"},
        {name: "Tablet" , link: "/tablet"},
        {name: "Laptop" , link: "/laptop"},
        {name: "Computer" , link: "/computer"},
        {name: "Watch" , link: "/watch"},
        {name: "Game Console" , link: "/game-console"}
    ]
    return (
        <footer className="footer-area clear-both">
        <div className="container pt-5">
            <div className="row py-5">
                <FooterCol key={1} menuTitle="Quick-fix" menuItems={openTime}> 
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a to="//twitter.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                        <li className="list-inline-item"><a to="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        <li className="list-inline-item"><a to="//facebook.com"><FontAwesomeIcon className="icon " icon={faFacebookF} /></a></li>
                    </ul>
                </FooterCol>
                <FooterCol key={2} menuTitle="Quick Links" menuItems={quickLinks}/>
                <FooterCol key={3} menuTitle="Repair Services" menuItems={repairServices}/>
                <FooterCol key={4} menuTitle="Information" menuItems={information}/>
            </div>
            <div className="copyRight text-white text-center">
                <p>Copyright Md. Mahe Alam {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
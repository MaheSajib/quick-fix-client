import React from 'react';
import AboutUsInfo from '../AboutUsInfo/AboutUsInfo';
import RepairInfo from '../RepairInfo/RepairInfo';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';
import ServiceProvide from '../ServiceProvide/ServiceProvide';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <RepairInfo></RepairInfo>
            <AboutUsInfo></AboutUsInfo>
            <Service></Service>
            <ServiceProvide></ServiceProvide>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Testimonial from '../Testimonial/Testimonial';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Testimonials = () => {

    const [testimonialData, setTestimonialData] =useState([]);

    useEffect(() => {
        fetch('https://shielded-spire-18150.herokuapp.com/testimonials')
        .then(res => res.json())
        .then(data => setTestimonialData(data))
    }, [])

    return (
        <div>
            <section className="testimonials my-5 ">
                <div className="container">
                    <div className="section-header">
                        <h1 style={{color: '#232323', fontSize:'50px'}} className="text-center"><b>Testimonial's</b></h1>
                    </div>
                    <Carousel>
                        {
                            testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                    </Carousel>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
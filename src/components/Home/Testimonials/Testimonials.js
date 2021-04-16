import React from 'react';
import './Testimonials.css';
import darrel  from '../../../image/darrel.png';
import karen from '../../../image/karen.png';
import megan  from '../../../image/megan.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote: ' ”I had my iPhone 6 screen replaced. Even though I arrived early at 9:30 am for my appointment, my phone was fixed in 20 minutes. Great communication, great service and for a reasonable price. Will definitely use again if the need arises.” ',
        name: 'Darrel Austin',
        img: darrel
    },
    {
        quote: ' “QuickFix’s technicians are very friendly and knowledgeable and I found the costs is not much different from other phone shops, overall I save my time and all the trouble to look for phone shop to bargain cost of repair” ',
        name: 'Karen Summers',
        img: karen
    },
    {
        quote: '“These guys fixed my iPhone so fast and it looks great! I even got the glass screen protector for a little cheaper since they were fixing my phone! Absolutely love the service!!! Definitely, recommend them!” ',
        name: 'Megan Steele',
        img: megan 
    }
]


const Testimonials = () => {
    return (
        <div>
            <section className="testimonials my-5 py-5">
                <div className="container">
                    <div className="section-header">
                        <h1 style={{color: '#232323', fontSize:'50px'}} className="text-center"><b>Testimonial's</b></h1>
                    </div>
                    <div className="card-deck mt-5">
                        {
                            testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
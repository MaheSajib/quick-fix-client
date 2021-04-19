import React from 'react';

const Testimonial = (props) => {
    console.log(props)
    const { quote, name, img } = props.testimonial;
    return (
        <div className="shadow-sm py-5">
            <div className="">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className=" text-center align-items-center">
                <h5  className="mb-3 card-name">{name}</h5>
                <img style={{height:'60px', width:'60px'}} className="mx-3" src={img} alt="" />
            </div>

        </div>
    );
};

export default Testimonial;
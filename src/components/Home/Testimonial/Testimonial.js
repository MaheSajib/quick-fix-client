import React from 'react';

const Testimonial = (props) => {
    console.log(props)
    const { quote, name, img } = props.testimonial;
    return (
        <div className="card shadow-sm ">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer text-center align-items-center">
                <h5  className="mb-3 card-name">{name}</h5>
                <img className="mx-3" src={img} width="60" alt="" />
                
            </div>

        </div>
    );
};

export default Testimonial;
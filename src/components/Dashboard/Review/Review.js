import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState(null); 

    const onSubmit = data => {
        console.log(data)
        const testimonialData ={
            name: data.name,
            designation: data.designation,
            quote: data.description,
            img: imageURL
        };
        const url = `https://shielded-spire-18150.herokuapp.com/addTestimonial`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(testimonialData)
        })
        .then(res => console.log('server side responce', res))
    };

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '70ba2cebd82dcad56d0ec6fbcd9134cf')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            console.log(response);
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }


    return (
        <div>
            <h1>Review</h1>
            <div style={{ backgroundColor: '#F5F5F5', height: '300px' }} className="container m-5 w-75 justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row ">
                        <div className="col">
                            <input type="text" className="form-control mt-3" placeholder="Your Name" {...register("name")} />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Company's Name Designation" {...register("designation")} />
                        </div>
                    </div>
                    <br />
                    <div className="">
                        <textarea className="form-control" placeholder="Description" {...register("description", { required: true })} />
                        <br/>
                        <input type="File" placeholder="Upload Image" onChange={handleImageUpload} />
                    </div>
                    <br />
                    <div className="">
                        <input type="submit" className="btn-success" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;
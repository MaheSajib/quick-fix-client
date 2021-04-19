import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const serviceData ={
            name: data.name,
            description: data.description,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://shielded-spire-18150.herokuapp.com/addService`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(serviceData)
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
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return (
        <div>
            <h1>Service</h1>
            <div style={{ backgroundColor: '#F5F5F5', height: '300px' }} className="container m-5 w-75 justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col">
                            <h5>Service Title</h5>
                            <input type="text" className="form-control" placeholder="Enter Title" {...register("name")} />
                        </div>
                        <div className="col">
                            <h5>Image</h5>
                            <input type="File" placeholder="Upload Image"  onChange={handleImageUpload}/>
                        </div>
                    </div>
                    <br />
                    <div className="col">
                        <h5>Description</h5>
                        <textarea className="form-control" placeholder="Enter Description" {...register("description", { required: true })} />
                    </div>
                    <br/>
                    <div className="col">
                        <h5>Price</h5>
                        <input className="form-control" placeholder="Enter Price" {...register("price", { required: true })} />
                    </div>
                    <br/>
                    <div className="text-right mx-5">
                        <input type="submit" className="btn-success"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;
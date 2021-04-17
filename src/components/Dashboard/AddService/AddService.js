import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <div>
            <h1>Service</h1>
            <div style={{ backgroundColor: '#F5F5F5', height: '300px' }} className="container m-5 w-75 justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col">
                            <h5>Service Title</h5>
                            <input type="text" className="form-control" placeholder="Enter Title" {...register("example")} />
                        </div>
                        <div className="col">
                            <h5>Image</h5>
                            <input type="File" placeholder="Upload Image" {...register("example")} />
                        </div>
                    </div>
                    <br />
                    <div className="col">
                        <h5>Description</h5>
                        <textarea className="form-control" placeholder="Enter Description" {...register("exampleRequired", { required: true })} />
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
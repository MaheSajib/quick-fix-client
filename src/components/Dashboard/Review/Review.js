import React from 'react';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <div>
            <h1>Review</h1>
            <div style={{ backgroundColor: '#F5F5F5', height: '300px' }} className="container m-5 w-75 justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row ">
                        <div className="col">
                            <input type="text" className="form-control mt-3" placeholder="Your Name" {...register("example")} />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Company's Name Designation" {...register("example")} />
                        </div>
                    </div>
                    <br />
                    <div className="">
                        <textarea className="form-control" placeholder="Description" {...register("exampleRequired", { required: true })} />
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
import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <div>
            <h1>Make Admin</h1>
            <div style={{ backgroundColor: '#F5F5F5', height: '300px' }} className="container m-5 w-75 justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row ">
                        <div>
                            <h5>Email</h5>
                            <div className="d-flex">
                                <input type="text" className="form-control px-5" placeholder="email@email.com" {...register("example")} />
                                <input type="submit" className="btn-success mx-2" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;
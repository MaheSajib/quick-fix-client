import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://shielded-spire-18150.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => console.log('server side responce', res))
    };

    return (
        <div>
            <h1>Make Admin</h1>
            <div style={{ backgroundColor: '#F5F5F5', height: '300px' }} className="container m-5 w-75 justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row ">
                        <div>
                            <h5>Email</h5>
                            <div className="d-flex">
                                <input type="text" className="form-control px-5" placeholder="email@email.com" {...register("email")} />
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
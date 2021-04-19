import React from 'react';
import { useForm } from "react-hook-form";
import ProcessPayment from '../../ProcessPayment/ProcessPayment';

const Book = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div>
            <h1>Order</h1>
            <div style={{ backgroundColor: '#F5F5F5', height: '300px' }} className="container m-5 w-75 justify-content-center">
                <ProcessPayment></ProcessPayment>
            </div>
        </div>
    );
};

export default Book;
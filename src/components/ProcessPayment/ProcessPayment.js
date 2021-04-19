import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeN3PHjsX45yCtXD7834prHJshnVEfeMEpOBDvWrBWp0pwnB7B94RSGYcW61A6ICNCQoGah7X0TpF9qN41bXdqo002NKRTrFz');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;
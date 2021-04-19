import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {

        const name = event.target.name.value;
        const email = event.target.email.value;
        const service = event.target.service.value;

        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            
            const orderData = {
                name,
                email,
                service
            }

            fetch('http://localhost:5055/addOrder', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(orderData)
            })
            .then(res => console.log('server side responce', res))
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row ">
                    <div className="col">
                        <input type="text" className="form-control mt-3" placeholder="Enter Your Name" name="name" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Enter Email" name="email" />
                    </div>
                </div>
                <br />
                <div className="">
                    <input type="text" className="form-control" placeholder="Enter service" name="service" />
                </div>
                <br />
                <CardElement />
                <br/>
                <button className="btn btn-success" type="submit" disabled={!stripe}>
                    Pay
            </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful.</p>
            }
        </div>
    );
};

export default SimpleCardForm;
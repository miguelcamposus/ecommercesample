import React from 'react'

import StripeCheckout from 'react-stripe-checkout';

const onToken =  token => {
    console.log(token);
    alert('Payment Sucessful');
}
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_RL53hlea1NtvD0v6Ym84laAn00Nw7SVubc';
    return(
        <StripeCheckout 
            label='Pay Now'
            name = 'Sample store'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;


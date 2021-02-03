import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/crown.svg';
 
const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IGAf7CFRlyjewBUTzM4inhtWoPMkq0Z8PxWkDG2Ar8yincPlf3pExGtcIeMs4M5a28jyo6DSB7hlYUVNDRauVlU00K38uBhKO'
const onToken = token => {
       console.log(token)
       alert('Payment Successful')
   }
    return (
      <StripeCheckout
        label='Pay Now'
        name='Crown Llc'
        billingAddress
        shippingAddress
        image={logo}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    )
  }

  export default StripeCheckoutButton;
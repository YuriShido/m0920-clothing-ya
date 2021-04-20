import React from 'core-js/library/fn/reflect/es7/metadata'
import StripeCheckout from '../../assets/shopping-bag.svg'
 
const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishablekey = process.env.REACT_APP_STRIPE_KEY

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful!')
    }

    return <ScripeCheckoyut
        label='Pay Now'
}
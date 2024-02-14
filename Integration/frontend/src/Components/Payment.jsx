// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

// const Payment = () => {
//   const [loading, setLoading] = useState(false);
  
//   const handleCheckout = async () => {
//     setLoading(true);
//     const stripe = await stripePromise;
//     const { error } = await stripe.redirectToCheckout({
//       lineItems: [{ price: 'price_xxx', quantity: 1 }], // Replace 'price_xxx' with your price ID
//       mode: 'payment',
//       successUrl: `${process.env.REACT_APP_DOMAIN}/success`,
//       cancelUrl: `${process.env.REACT_APP_DOMAIN}/checkout?payment_fail=true`,
//     });
//     if (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleCheckout} disabled={loading}>
//         {loading ? 'Loading...' : 'Checkout'}
//       </button>
//     </div>
//   );
// };

// const StripeCheckoutWrapper = () => (
//   <Elements stripe={stripePromise}>
//     <Payment />
//   </Elements>
// );

// export default Payment;

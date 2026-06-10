// 'use server';

// import Stripe from 'stripe';
// import { redirect } from 'next/navigation';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function createCheckoutSession(cartItems) {
//   const baseUrl = process.env.NODE_ENV === 'development'
//     ? 'http://localhost:3000'
//     : process.env.NEXT_PUBLIC_APP_URL;

//   const lineItems = cartItems.map((item) => ({
//     price_data: {
//       currency: 'cad',
//       product_data: {
//         name: item.name,
//       },
//       unit_amount: Math.round(item.price * 100),
//     },
//     quantity: item.quantity,
//   }));

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: lineItems,
//     mode: 'payment',

//     // Shipping Address (Canada only)
//     shipping_address_collection: {
//       allowed_countries: ['CA'],
//     },

//     // Delivery Instructions - Fixed format
//     custom_fields: [
//       {
//         key: 'delivery_instructions',
//         label: {
//           type: 'custom',
//           custom: 'Delivery Instructions (optional)',
//         },
//         type: 'text',
//       },
//     ],

//     // Delivery Fee
//     shipping_options: [
//       {
//         shipping_rate_data: {
//           type: 'fixed_amount',
//           fixed_amount: {
//             amount: 799,           // $7.99 CAD
//             currency: 'cad',
//           },
//           display_name: 'Delivery Fee',
//         },
//       },
//     ],

//     phone_number_collection: {
//       enabled: true,
//     },

//     success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
//     cancel_url: `${baseUrl}/cart`,
//   });

//   redirect(session.url);
// }

'use server';

import Stripe from 'stripe';
import { redirect } from 'next/navigation';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(cartItems) {
  // Improved baseUrl logic (more reliable on Vercel)
  // Improved baseUrl logic
  let baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  if (!baseUrl) {
    if (process.env.NODE_ENV === 'development') {
      baseUrl = 'http://localhost:3000';
    } else {
      // Vercel fallback
      baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : `https://${process.env.VERCEL_URL}`;
    }
  }
  if (!baseUrl) {
    throw new Error('Missing base URL configuration');
  }

  const lineItems = cartItems.map(item => ({
    price_data: {
      currency: 'cad',
      product_data: {
        name: item.name,
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',

    shipping_address_collection: {
      allowed_countries: ['CA'],
    },

    custom_fields: [
      {
        key: 'delivery_instructions',
        label: {
          type: 'custom',
          custom: 'Delivery Instructions (optional)',
        },
        type: 'text',
      },
    ],

    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 799,
            currency: 'cad',
          },
          display_name: 'Delivery Fee',
        },
      },
    ],

    phone_number_collection: {
      enabled: true,
    },

    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/cart`,
  });

  redirect(session.url);
}

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useCartStore } from '@/app/_store/cartStore';

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const clearCart = useCartStore((state) => state.clearCart);

  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }

    // Fetch session details from our own API route (safer than exposing secret key)
    fetch(`/api/get-session?session_id=${sessionId}`)
      .then(res => res.json())
      .then(data => {
        setSessionData(data);
        clearCart();
      })
      .catch(err => console.error("Failed to fetch session:", err))
      .finally(() => setLoading(false));
  }, [sessionId, clearCart]);

  if (loading) {
    return <div className="success-page"><h1>Processing your order...</h1></div>;
  }

  if (!sessionData) {
    return (
      <div className="success-page">
        <h1>Thank You!</h1>
        <p>Your order has been placed successfully.</p>
        <Link href="/products">Continue Shopping</Link>
      </div>
    );
  }

  const { customer_details, shipping_details, custom_fields } = sessionData;

  // Get delivery instructions
  const deliveryInstructions = custom_fields?.find(
    field => field.key === 'delivery_instructions'
  )?.value || 'No instructions provided';

  return (
    <div className="success-page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1>✅ Order Confirmed!</h1>
          <h2>Thank you for your purchase</h2>
          <p>Your delicious meal is on the way!</p>
        </div>

        <div className="order-details">
          <h3>Order Summary</h3>
          {sessionId && (
            <p><strong>Order Reference:</strong> {sessionId}</p>
          )}

       
          <div className="info-box">
            <h4>Delivery Address</h4>
            <p><strong>Name:</strong> {shipping_details?.name || customer_details?.name}</p>
            <p>{shipping_details?.address?.line1}</p>
            {shipping_details?.address?.line2 && <p>{shipping_details?.address?.line2}</p>}
            <p>
              {shipping_details?.address?.city}, {shipping_details?.address?.state} 
              {' '}{shipping_details?.address?.postal_code}
            </p>
            <p><strong>Country:</strong> {shipping_details?.address?.country}</p>
          </div>

          {/* Contact Info */}
          <div className="info-box">
            <h4>Contact Information</h4>
            <p><strong>Phone:</strong> {customer_details?.phone || 'Not provided'}</p>
            <p><strong>Email:</strong> {customer_details?.email}</p>
          </div>

         
          <div className="info-box">
            <h4>Delivery Instructions</h4>
            <p style={{ whiteSpace: 'pre-wrap' }}>
              {deliveryInstructions}
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link href="/products">
            <button className="continue-shopping-btn">
              Order Again
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
'use client';

// import './cart.css';
import './cartPage.css';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '../_store/cartStore';
import { createCheckoutSession } from '../actions/checkout';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalItems } =
    useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    await createCheckoutSession(cart);
  };
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className='cart-page'>
        <div className='container'>
          {cart.length === 0 ? (
            <>
              <div className='cart-header empty-cart'>
                {' '}
                <h1>Your Cart is Empty</h1>
                <p>Browse our categories and discover our best deals</p>
                <Link href='/products'>Continue Shopping</Link>
              </div>
            </>
          ) : (
            // Render cart items here
            <>
              <div className='cart-header'>
                <h1>Your Selection ({getTotalItems()})</h1>
                <p>Items curated for your indulgence</p>
              </div>

              <div className='cart-items-container'>
                <div className='cart-items'>
                  {cart.map(item => (
                    <div className='cart-item' key={item.id}>
                      <div className='cart-flex-item'>
                        <div className='cart-item-image'>
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={120}
                            height={120}
                          />
                        </div>

                        <div className='cart-name-quantity'>
                          <div className='cart-item-details'>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                          </div>
                          <div className='cart-item-quantity'>
                            <div className='cart-item-quantity-quantity'>
                              {' '}
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                              >
                                +
                              </button>
                            </div>

                            <div
                              className='remove'
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Image
                                src='/images/delete_icon.svg'
                                alt='Delete'
                                width={12}
                                height={12}
                              />
                              <button className='remove-btn'>Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='cart-item-total'>
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className='cart-summary'>
                  <div className='cart-summary-header'>
                    <h2>Order Sumary</h2>
                  </div>
                  <div className='cart-summary-total'>
                    <h2>Total</h2>
                    <h2 className='summary-total'>${total.toFixed(2)}</h2>
                  </div>
                  <div className='checkout-wrapper'>
                    <button
                      className='checkout-button'
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </button>

                    <button className='clear-cart-btn' onClick={clearCart}>
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

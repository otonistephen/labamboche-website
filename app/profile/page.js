'use client';
import { useState } from 'react';
import './profile.css';
import Image from 'next/image';
import { images } from '../_data/data';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <section className='profile' style={{ paddingTop: '10rem' }}>
      <div className='container'>
        <div className='profile-container'>
          <div className='profile-page-image'>
            <div className='image-wrapper'>
              <div className='profile-over-lay'></div>
              <Image
                src={images.profile_image}
                alt='login page image'
                width={500}
                height={750}
              />
              <div className='profile-image-content'>
                <h1>Join our circle</h1>

                <h2>La Bamboche</h2>
                <p>Experience the art of Canadian Pastry Making</p>
                <p>- baked with care -</p>
                <a href='#login'>
                  <i className='bx bx-chevrons-down' />
                </a>
              </div>
            </div>
          </div>
          <div className='login-form' id='login'>
            <div className='login-form-wrapper'>
              <div className='login-form-header'>
                <p>create your account</p>
                <p>Join our circle of fine pastry enthusiasts</p>
              </div>

              <div className='social-login'>
                <div className='google'>
                  <button>
                    <i className='bx bxl-google'></i>continue with google
                  </button>
                </div>
                <div className='facebook'>
                  <button>
                    <i className='bx bxl-facebook'></i>continue with facebook
                  </button>
                </div>
              </div>

              <div className='email-login'>
                <div className='email-login-wrapper'>
                  <div className='horizontal-line'>
                    <span className='hr'>
                      {' '}
                      <span className='hr-text'>or use your email</span>
                    </span>
                  </div>
                  <form className='signup-form'>
                    <div className='form-group'>
                      <label htmlFor='name'>Full Name</label>
                      <input
                        type='text'
                        id='name'
                        placeholder='JEAN DUPONT'
                        required
                      />
                    </div>

                    <div className='form-group'>
                      <label htmlFor='email'>Email Address</label>
                      <input
                        type='email'
                        id='email'
                        placeholder='HELLO@PATISSERIE.COM'
                        required
                      />
                    </div>

                    <div className='form-group'>
                      <label htmlFor='password'>Password</label>
                      <input
                        type='password'
                        id='password'
                        placeholder='••••••••'
                        required
                      />
                    </div>

                    <div className='terms'>
                      <input type='checkbox' id='terms' required />
                      <label htmlFor='terms'>
                        I agree to the Terms of Service & Privacy Policy
                      </label>
                    </div>

                    <button type='submit' className='submit-button'>
                      Create Account
                    </button>
                  </form>

                  <p className='login-link'>
                    Already a member? <a href='#'>Sign In</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

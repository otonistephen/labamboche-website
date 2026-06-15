import ContactForm from '../_components/ContactForm/ContactForm';
import './contact.css';

export const metadata = {
  title: 'Contact - La Bamboche',
  description:
    'Get in touch with La Bamboche for wholesale bakery orders and inquiries.',
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className='contact-section'>
        <div className='contact-container'>
          <div className='contact-header'>
            <h1>Contact Us</h1>
            <p>For wholesale bakery orders and B2B partnerships</p>
          </div>
          <div className='contact-wrapper'>
            <div className='contact-info'>
              <div className='info-card'>
                <h3>Get in Touch</h3>
                <p>
                  We're here to help with your wholesale bakery needs. Reach out
                  to us and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className='info-item'>
                <span className='info-label'>Email</span>
                <a href='mailto:orders@labamboche.com'>orders@labamboche.com</a>
              </div>
              <div className='info-item'>
                <span className='info-label'>Phone</span>
                <a href='tel:+1234567890'>+1 (234) 567-890</a>
              </div>
              <div className='info-item'>
                <span className='info-label'>Hours</span>
                <p>
                  Monday - Friday: 6:00 AM - 6:00 PM
                  <br />
                  Saturday: 7:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

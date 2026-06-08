import ReservationForm from "../_components/ReservationForm/ReservationForm";
import ReservationImage from "../_components/ReservationImage/ReservationImage";
import './reservation.css'


export default function Reservation() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className='reservation-section'>
        <div className="reservation-bg"></div>
        <div className='container'>
          <div className='reservation-header'>
            <span>a sweet escape</span>
            <h1>reserve your moment</h1>
            <p>
              Join us in our sun-drenched tea room for an afternoon of artisanal
              pastries and handcrafted infusions.
            </p>
          </div>

          <div className="reservation-content">
            <div className="grid">
              <ReservationForm/>
              <ReservationImage/>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}

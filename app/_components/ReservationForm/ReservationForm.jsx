'use client';

import { useState } from 'react';
import './ReservationForm.css';
import Image from 'next/image';
import { images } from '@/app/_data/data';

const TIMES = [
  '11:00 AM',
  '12:30 PM',
  '02:00 PM',
  '03:30 PM',
  '04:00 PM',
  '05:30 PM',
];
const PARTY_SIZES = ['1', '2', '3', '4', '5', '6+'];

function getCalendarDays() {
  const today = new Date();
  const days = [];
  const startOfWeek = new Date(today);
  const day = today.getDay();
  const diffToMon = day === 0 ? -6 : 1 - day;
  startOfWeek.setDate(today.getDate() + diffToMon);

  for (let i = 0; i < 7; i++) {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    days.push({
      label: d.getDate(),
      date: d,
      disabled: d < new Date(new Date().setHours(0, 0, 0, 0)),
    });
  }
  return days;
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ReservationForm() {
  const [partySize, setPartySize] = useState('2');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('02:00 PM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const calendarDays = getCalendarDays();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!selectedDate) {
      setErrorMsg('Please select a date.');
      return;
    }
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Please fill in your name and email.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          partySize,
          date: formatDate(selectedDate),
          time: selectedTime,
          specialRequests: specialRequests.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className='success-card'>
        <div className='success-icon'>
          <span className='material-symbols-outlined'>check_circle</span>
        </div>
        <div>
          <h2 className='success-title'>
            You&apos;re all set, {name.split(' ')[0]}!
          </h2>
          <p className='success-text'>
            Your reservation for{' '}
            <strong>
              {partySize} {Number(partySize) === 1 ? 'guest' : 'guests'}
            </strong>{' '}
            on <strong>{selectedDate ? formatDate(selectedDate) : ''}</strong>{' '}
            at <strong>{selectedTime}</strong> is confirmed.
          </p>
          <p className='success-email'>
            A confirmation email has been sent to <strong>{email}</strong>.
          </p>
        </div>
        <button
          className={styles.resetBtn}
          onClick={() => {
            setStatus('idle');
            setName('');
            setEmail('');
            setSpecialRequests('');
            setSelectedDate(null);
          }}
        >
          Make Another Reservation
        </button>
      </div>
    );
  }

  return (
    <div className='card'>
      <form className='form' onSubmit={handleSubmit}>
        {/* Party Size */}
        <div>
          <label className='section-label'>
            <span className='material-symbols-outlined'>
              <Image
                src={images.party_size}
                width={15}
                height={15}
                alt='party size icon'
              />
            </span>
            Party Size
          </label>
          <div className='party-size-group'>
            {PARTY_SIZES.map(size => (
              <button
                key={size}
                type='button'
                onClick={() => setPartySize(size)}
                className={`${'size-btn'} ${partySize === size ? 'size-btn-active' : ''}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <label className='section-label'>
            <span className='material-symbols-outlined'>
              <Image
                src={images.calendar}
                width={15}
                height={15}
                alt='calendar icon'
              />
            </span>
            Select Date
          </label>
          <div className='calendar-grid'>
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(d => (
              <div key={d} className='day-header'>
                {d}
              </div>
            ))}
            {calendarDays.map(({ label, date, disabled }) => {
              const isSelected =
                selectedDate?.toDateString() === date.toDateString();
              return disabled ? (
                <div key={label} className='day-disabled'>
                  {label}
                </div>
              ) : (
                <button
                  key={label}
                  type='button'
                  onClick={() => setSelectedDate(date)}
                  className={`${'day-btn'} ${isSelected ? 'day-btn-active' : ''}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          {!selectedDate && <p className='date-hint'>No date selected</p>}
          {selectedDate && (
            <p className='date-selected'>✓ {formatDate(selectedDate)}</p>
          )}
        </div>

        {/* Time Selection */}
        <div>
          <label className='section-label'>
            <span className='material-symbols-outlined'>
              <Image
                src={images.time_icon}
                width={15}
                height={15}
                alt='time icon'
              />
            </span>
            Preferred Time
          </label>
          <div className='time-grid'>
            {TIMES.map(time => (
              <button
                key={time}
                type='button'
                onClick={() => setSelectedTime(time)}
                className={`${'time-btn'} ${selectedTime === time ? 'time-btn-active' : ''}`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div className='contact-section'>
          <h3 className='contact-title'>Contact Details</h3>
          <div className='contact-grid'>
            <div className='field-group'>
              <label className='field-label'>Full Name</label>
              <input
                className='field-input'
                type='text'
                placeholder='Sophie Martin'
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className='field-group'>
              <label className='field-label'>Email Address</label>
              <input
                className='field-input'
                type='email'
                placeholder='sophie@example.com'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={`${'field-Group'} ${'contact-grid-full'}`}>
              <label className={'field-label'}>
                Special Requests (Optional)
              </label>
              <textarea
                className='field-textarea'
                placeholder='Dietary restrictions or special occasions...'
                rows={2}
                value={specialRequests}
                onChange={e => setSpecialRequests(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Error */}
        {(status === 'error' || errorMsg) && (
          <div className='error-box'>{errorMsg}</div>
        )}

        {/* Submit */}
        <button
          type='submit'
          disabled={status === 'loading'}
          className='submit-btn'
        >
          {status === 'loading' ? 'Confirming…' : 'Confirm Reservation'}
        </button>
      </form>
    </div>
  );
}

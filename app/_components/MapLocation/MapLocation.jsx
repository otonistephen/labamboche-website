'use client';
import './MapLocation.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useState, useEffect } from 'react';

import 'leaflet-defaulticon-compatibility';

export default function MapLocation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  // Leslieville location
  const leslievillePos = [43.66047, -79.34218];
  const leslievilleAddress = '892 Queen St E, Toronto, ON M4M 1J3, Canada';
  const leslievilleEncoded = encodeURIComponent(leslievilleAddress);
  const leslievilleDirections = `https://www.google.com/maps/dir/?api=1&destination=${leslievilleEncoded}`;
  //custom icon

  const customIcon = L.icon({
    iconUrl: '/images/logo.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });
  // North York location
  const northYorkPos = [43.73085, -79.41952]; // Precise coordinates for 1712 Avenue Rd
  const northYorkAddress = '1712 Avenue Rd, North York, ON M5M 3Y6, Canada';
  const northYorkEncoded = encodeURIComponent(northYorkAddress);
  const northYorkDirections = `https://www.google.com/maps/dir/?api=1&destination=${northYorkEncoded}`;

  return (
    <section className='location-map-section' id='locations'>
      <div className='container'>
        <h2 className='location-map-title'>Our Locations</h2>
        <div className='container-flex'>
          {/* Leslieville */}
          <div className='location-map-wrapper'>
            <h3 className='location-map-subtitle'>Leslieville</h3>
            <div className='location-map-container'>
              <MapContainer
                center={leslievillePos}
                zoom={16}
                style={{ height: '100%', width: '100%' }}
                dragging={!isMobile}
                touchZoom={!isMobile}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={leslievillePos} icon={customIcon}>
                  <Popup>
                    <strong>La Bamboche - Leslieville</strong>
                    <br />
                    892 Queen St E<br />
                    Toronto, ON M4M 1J3
                    <br />
                    Canada
                  </Popup>
                  {/* <Image src={images.logo} alt='logo' width={20} height={20} /> */}
                </Marker>
              </MapContainer>
            </div>
            <p className='location-map-address'>{leslievilleAddress}</p>
            <a
              href={leslievilleDirections}
              target='_blank'
              rel='noopener noreferrer'
              className='location-map-directions-btn'
            >
              Get Directions
            </a>
          </div>

          {/* North York */}
          <div className='location-map-wrapper'>
            <h3 className='location-map-subtitle'>North York</h3>
            <div className='location-map-container'>
              <MapContainer
                center={northYorkPos}
                zoom={16}
                style={{ height: '100%', width: '100%' }}
                dragging={!isMobile}
                touchZoom={!isMobile}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={northYorkPos} icon={customIcon}>
                  <Popup>
                    <strong>La Bamboche - North York</strong>
                    <br />
                    1712 Avenue Rd
                    <br />
                    North York, ON M5M 3Y6
                    <br />
                    Canada
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <p className='location-map-address'>{northYorkAddress}</p>
            <a
              href={northYorkDirections}
              target='_blank'
              rel='noopener noreferrer'
              className='location-map-directions-btn'
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

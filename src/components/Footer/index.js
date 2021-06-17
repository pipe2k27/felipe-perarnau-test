import React from 'react';
import Image from '../Image';
import './styles.css';

export default function Footer() {
  return (
    <div className="footer blue-bg" id="footer">
      <img
        src={process.env.PUBLIC_URL + '/images/movie-bay-light.png'}
        className="footer-logo"
        alt="movie bay"
      />
      <div className="footer-box">
        <p>Site created by Felipe Perarnau</p>
        <p>Buenos Aires, Argentina</p>
        <p>Tel / Whatsapp: +54 9 11 6822 0080</p>
      </div>
      <Image name={'backdrop-footer.jpeg'} className="footer-backdrop" />
    </div>
  );
}

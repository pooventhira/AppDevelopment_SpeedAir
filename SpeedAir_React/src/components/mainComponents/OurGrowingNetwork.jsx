import React from 'react';
import '../../assets/styles/mainStyles/OurGrowingNetwork.css';

const OurGrowingNetwork = () => {
  return (
    <section className="network-container">
      <h2 className="network-title">OUR GROWING NETWORK</h2>
      <div className="network-stats">
        <div className="network-item">
          <h3 className="network-number">18</h3>
          <p className="network-label">CITIES</p>
        </div>
        <div className="network-item">
          <h3 className="network-number">5000+</h3>
          <p className="network-label">ENTERPRISE CLIENTS</p>
        </div>
        <div className="network-item">
          <h3 className="network-number">500,000+</h3>
          <p className="network-label">DRIVER PARTNERS</p>
        </div>
        <div className="network-item">
          <h3 className="network-number">150,000+</h3>
          <p className="network-label">MONTHLY ENTERPRISE TRIP</p>
        </div>
      </div>
    </section>
  );
};

export default OurGrowingNetwork;

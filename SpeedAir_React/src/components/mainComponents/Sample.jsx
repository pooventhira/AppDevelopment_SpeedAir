import React, { useState } from 'react';
import '../../assets/styles/mainStyles/Sample.css';

const Sample = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="estimate-container">
      <div className="city-selector">
        <span onClick={togglePopup} className="city-name">
          City: Coimbatore
        </span>
      </div>
      <div className="services">
        <div className="service-item">
          <img src="/path-to-two-wheeler-icon.png" alt="Two Wheelers" />
          <p>Two Wheelers</p>
        </div>
        <div className="service-item">
          <img src="/path-to-movers-packers-icon.png" alt="Movers & Packers" />
          <p>Movers & Packers</p>
        </div>
        <div className="service-item">
          <img src="/path-to-trucks-icon.png" alt="Trucks" />
          <p>Trucks</p>
        </div>
        <div className="service-item">
          <img src="/path-to-all-india-icon.png" alt="All India" />
          <p>All India</p>
        </div>
        <div className="get-estimate">
          <button>Get an Estimate (takes ~2 mins)</button>
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Choose your city</h2>
            <div className="cities-grid">
              {/* Add the rest of the city images here */}
              <div className="city-item">Ahmedabad</div>
              <div className="city-item">Bangalore</div>
              <div className="city-item">Chandigarh</div>
              <div className="city-item">Chennai</div>
              <div className="city-item">Coimbatore</div>
              <div className="city-item">Delhi</div>
              <div className="city-item">Hyderabad</div>
              <div className="city-item">Indore</div>
              <div className="city-item">Jaipur</div>
              <div className="city-item">Kanpur</div>
              <div className="city-item">Kochi</div>
              <div className="city-item">Kolkata</div>
              <div className="city-item">Lucknow</div>
              <div className="city-item">Ludhiana</div>
              <div className="city-item">Mumbai</div>
              <div className="city-item">Nagpur</div>
              <div className="city-item">Nashik</div>
              <div className="city-item">Pune</div>
              <div className="city-item">Surat</div>
              <div className="city-item">Vadodara</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sample;
import React from 'react';
import '../../assets/styles/mainStyles/Registration.css';

function Registration() {
  return (
    <section className="registration">
      <div className="registration-container">
        <form className="registration-form">
          <h3 className="registration-title">To Know More</h3>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Company Name" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Company Address" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Contact" required />
          </div>
          <button type="submit" className="submit-button">Join now</button>
        </form>
      </div>
    </section>
  );
};

export default Registration;

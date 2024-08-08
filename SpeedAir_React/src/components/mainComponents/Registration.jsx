import React from 'react';
import '../../assets/styles/mainStyles/Registration.css';

function Registration() {
  return (
    <section className="registration">
      <div className="registration-container">
        <h1 className="registration-title">Welcome to your <span className="brand-name">Speed<span>Air</span></span> Registration</h1>
        <p className="registration-info">Previous customers of SpeedAir can <a href="#login">Sign in</a> immediately to SpeedAir. Please note that you may be asked for some further information to identify which region should serve you.</p>
        <form className="registration-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Enter company name" required />
          </div>
          <div className="form-group">
            <label>Business Email</label>
            <input type="email" placeholder="Enter business email address" required />
          </div>
          <div className="form-group">
            <label>Company Address</label>
            <input type="text" placeholder="Enter company address" required />
          </div>
          <div className="form-group">
            <label>Region</label>
            <input type="text" placeholder="Enter company region" required />
          </div>
          <div className="form-group">
            <label>Business contact number</label>
            <input type="tel" placeholder="000 Enter mobile number" required />
          </div>
          <div className="form-group">
            <label>Landline number</label>
            <input type="tel" placeholder="000 Enter landline number" />
          </div>
          <div className="form-group check-box">
            <p>
              <input type="checkbox" required /> I accept the registered <a href="#terms">user terms and cookie policy</a>
            </p>
          </div>
          <div className="form-group">
            <p>
              <input type="checkbox" /> I agree to receive logistics related news and marketing updates by email, phone,
              or similar means specified in <a href="#terms">our terms</a>.
            </p>
          </div>
          <p className="terms-info">
            By registering as a new user, you accept without restriction the user terms incorporating general
            user terms, registered user terms, and business notifications, and you will be granted access to our
            online business services.
          </p>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Registration;

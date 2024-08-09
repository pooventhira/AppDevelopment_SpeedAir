import React from 'react';
import '../../assets/styles/mainStyles/Registration.css';

function Registration() {
  return (
    <section className="registration">
      <div className="registration-container">
        <form className="registration-form">
          <h3 className="registration-title">Join Now</h3>
          <div className="form-group">
            {/* <label>Name</label> */}
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            {/* <label>Company Name</label> */}
            <input type="text" placeholder="Company Name" required />
          </div>
          <div className="form-group">
            {/* <label>Company Address</label> */}
            <input type="text" placeholder="Company Address" required />
          </div>
          <div className="form-group">
            {/* <label>Email</label> */}
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            {/* <label>Contact</label> */}
            <input type="text" placeholder="Contact" required />
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
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Registration;

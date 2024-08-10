import React from "react";
import "../../assets/styles/mainStyles/EstimateExtraHand.css";
import ExtraHandBox from "../../assets/images/mainImages/ExtraHandBox.png";
import ExtraHandRupee from "../../assets/images/mainImages/ExtraHandRupee.png";
import ExtraHandTime from "../../assets/images/mainImages/ExtraHandTime.png";

const EstimateExtraHand = () => {
  return (
    <section className="extra-hand">
      <h2 className="extra-hand-title">Need an Extra Hand?</h2>
      <p className="extra-hand-subtitle">
        Need more help in setting the house? Enhance your house shifting
        experience with Value Added Services
      </p>
      <div className="extra-hand-services">
        <div className="extra-hand-service-item">
          <div className="extra-hand-service-icon"><img src={ExtraHandTime} alt="" /></div>
          <h3>On-time shifting</h3>
          <p>Experience reliable packers and movers services</p>
        </div>
        <div className="extra-hand-service-item">
          <div className="extra-hand-service-icon"><img src={ExtraHandRupee} alt="" /></div>
          <h3>Reasonable prices</h3>
          <p>Seamless moving services that are budget-friendly</p>
        </div>
        <div className="extra-hand-service-item">
          <div className="extra-hand-service-icon"><img src={ExtraHandBox} alt="" /></div>
          <h3>Protective packing</h3>
          <p>Layered packaging to guarantee the safe transport of household item</p>
        </div>
      </div>
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch!</h2>
        <p className="contact-subtitle">If you have a question we are here for you</p>
        <div className="contact-details">
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <p className="text">022 6161 6666</p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-clock"></i>
            <p className="text">9 AM - 9 PM</p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <p className="text">couriersupport@theporter.in</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateExtraHand;

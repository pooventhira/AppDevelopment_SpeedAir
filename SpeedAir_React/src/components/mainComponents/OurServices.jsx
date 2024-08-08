import React from 'react';
import '../../assets/styles/mainStyles/OurServices.css';
import Payment from '../../assets/images/mainImages/WhySpeedAir_Payment.png';
import Accounting from '../../assets/images/mainImages/WhySpeedAir_Accounting.png';
import ShipmentControl from '../../assets/images/mainImages/WhySpeedAir_ShipmentControl.png';
import FastDelivery from '../../assets/images/mainImages/WhySpeedAir_FastDelivery.png';

const services = [
  {
    title: "Pay Per Use",
    description: "No fixed monthly contracts. Pay only for the time & distance you use.",
    imageUrl: Payment
  },
  {
    title: "Greater Control",
    description: "Get visibility of all your hub level logistics movement.",
    imageUrl: ShipmentControl
  },
  {
    title: "Hassle Free Accounting",
    description: "Get rid of order level payment & reimbursement. Pay centrally for Pan India usage.",
    imageUrl: Accounting
  },
  {
    title: "Fast Deliveries",
    description: "Fast delivery times and efficient handling of shipments, especially with time-sensitive products",
    imageUrl: FastDelivery
  }
];

const OurServices = () => {
  return (
    <section className="our-services">
      <h2>Why use SpeedAir for Enterprise ?</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image"><img src={service.imageUrl} alt={service.title} /></div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;

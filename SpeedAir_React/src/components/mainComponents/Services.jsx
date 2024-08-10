import React from "react";
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/mainStyles/Services.css';
import ServicesBike from "../../assets/images/mainImages/ServicesBike.png";
import ServicesPackage from "../../assets/images/mainImages/ServicesPackage.png";
import ServicesTruck from "../../assets/images/mainImages/ServicesTruck.png";
import ServicesIndia from "../../assets/images/mainImages/ServicesIndia.png";

const Services = () => {

  const history = useNavigate();
  const navigateToEstimate = () => {
    history('/Estimate');
  }

  return (
    <section className="services">
      <div className="services-location">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
        <span> city : </span>
        <select defaultValue={"Coimbatore"}>
          <option>Chennai</option>
          <option>Coimbatore</option>
          <option>Delhi</option>
          <option>Hyderabad</option>
          <option>Bengaluru</option>
          <option>Kochi</option>
        </select>
      </div>
      <div className="services-container">
        <div onClick={navigateToEstimate}>
          <img src={ServicesBike} alt=""></img>
          <p>Two Wheelers</p>
        </div>
        <div onClick={navigateToEstimate}>
          <img src={ServicesPackage} alt=""></img>
          <p>Movers & Packers</p>
        </div>
        <div onClick={navigateToEstimate}>
          <img src={ServicesTruck} alt=""></img>
          <p>Trucks</p>
        </div>
        <div onClick={navigateToEstimate}>
          <img src={ServicesIndia} alt=""></img>
          <p>All India</p>
        </div>
        <div className="services-button" onClick={navigateToEstimate}>
          <h3>Get An Services</h3>
          <p>(takes ~2 mins)</p>
          <span>&#10230;</span>
        </div>
      </div>
    </section>
  );
};

export default Services;

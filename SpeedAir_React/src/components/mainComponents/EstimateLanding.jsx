import React,{useState} from "react";
import "../../assets/styles/mainStyles/EstimateLanding.css";

const EstimateLanding = () => {

  const [selectedText, setSelectedText] = useState('Coimbatore');
  const estimateSelectChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedOptionText = event.target.options[selectedIndex].textContent;
    setSelectedText(selectedOptionText);
  };

  return (
    <section className="estimate-landing">
      <div className="estimate-landing-background"></div>
      <div className="estimate-landing-content">
        <h1 className="estimate-landing-title">Hassle-free Online Courier Services in {selectedText}</h1>
        <p className="estimate-landing-subtitle">SpeedAir Logistics Service is a platform to smoothen the process of sending packages and parcels across {selectedText}</p>
        <div className="estimate-landing-box">
          <div className="estimate-landing-location">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
            <span> city : </span>
            <select onChange={estimateSelectChange} defaultValue={"Coimbatore"}>
              <option>Chennai</option>
              <option>Coimbatore</option>
              <option>Delhi</option>
              <option>Hyderabad</option>
              <option>Bengaluru</option>
              <option>Kochi</option>
            </select>
          </div>
          <div className="estimate-landing-inputs">
            <div className="estimate-landing-input-container">
              <label>Pickup Location <span>*</span></label>
              <input type="text" placeholder="Sending from" required />
            </div>
            <div className="estimate-landing-input-container">
              <label>Drop Location <span>*</span></label>
              <input type="text" placeholder="Sending to" required />
            </div>
            <div className="estimate-landing-input-container">
              <label>Shifting Date <span>*</span></label>
              <input type="date" required/>
            </div>
            <div className="estimate-landing-input-container">
              <label>Contact Number <span>*</span></label>
              <input type="text" placeholder="Enter contact details" required />
            </div>
            <div className="estimate-landing-input-container">
              <label>Name <span>*</span></label>
              <input type="text" placeholder="Enter your name " required />
            </div>
            <div className="estimate-landing-check-price">
              <button>Send Request</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateLanding;

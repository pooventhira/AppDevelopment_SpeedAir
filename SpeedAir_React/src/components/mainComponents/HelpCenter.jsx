import React from 'react';
import '../../assets/styles/mainStyles/HelpCenter.css';
import CustomerSupport from '../../assets/images/mainImages/CustomerSupport.png';
import PackersMovers from '../../assets/images/mainImages/PackersMovers.png';
import EnterpriseService from '../../assets/images/mainImages/EnterpriseService.png';
import DriveWithSpeedAir from '../../assets/images/mainImages/DriveWithSpeedAir.png';

const HelpCenter = () => {
  return (
    <section className="help-center">
      <div className="heading">
        <h1>HELP CENTER</h1>
        <p>Need assistance? We're happy to help, reach us out through the appropriate channels below.</p>
      </div>
      <div className="help-sections">
        <div className="help-section">
          <div className="section-1">
            <img src={CustomerSupport} alt="Customer Support" />
          </div>
          <div className="section-2">
            <h2>CUSTOMER SUPPORT</h2>
            <p><a href="#byebye">Click here</a> to read our FAQs. For support with your bookings and other queries, email us at <a href="mail">help@speedair.in</a> or call us on <a href="tel">022 4410 4410</a></p>
          </div>
        </div>
        <div className="help-section">
          <div className="section-1">
            <img src={PackersMovers} alt="Packers and Movers"/>
          </div>
          <div className="section-2">
            <h2>PACKERS AND MOVERS</h2>
            <p>For queries and support regarding your house shifting booking, email us at <a href="mailto:packermover@theSpeedAir.in">packermover@theSpeedAir.in</a> or call us on <a href="tel:02262684444">022 6268 4444</a></p>
          </div>
        </div>
        <div className="help-section">
          <div className="section-1">
            <img src={EnterpriseService} alt="Enterprise Services" />
          </div>
          <div className="section-2">
            <h2>ENTERPRISE SERVICES</h2>
            <p>If you are an enterprise client and need trucks in bulk for your business, <a href="#byebye">Click here</a> or mail us at <a href="mailto:help@SpeedAir.in">help@SpeedAir.in</a></p>
          </div>
        </div>
        <div className="help-section">
          <div className="section-1">
            <img src={DriveWithSpeedAir} alt="Drive with SpeedAir"/>
          </div>
          <div className="section-2">
            <h2>DRIVE WITH SPEEDAIR</h2>
            <p>Are you a tempo truck owner? Increase your earnings by partnering with us. <a href="#byebye">Click here</a> or reach us out on <a href="tel:02244104410">022 4410 4410</a> (add your city code)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;

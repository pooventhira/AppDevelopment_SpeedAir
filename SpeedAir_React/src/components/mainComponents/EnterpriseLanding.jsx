import React from "react";
import '../../assets/styles/mainStyles/EnterpriseLanding.css';
import Registration from '../../components/mainComponents/Registration';

const EnterpriseLanding = () => {
  return (
    <section className="enterprise-landing">
      <div className="enterprise-landing-form">
        <Registration/>
      </div>
    </section>
  )
}

export default EnterpriseLanding;
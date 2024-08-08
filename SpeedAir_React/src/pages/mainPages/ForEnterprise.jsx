import React from "react";
import "./ForEnterprise.css";
import Header from "../../components/mainComponents/Header";
import Footer from "../../components/mainComponents/Footer";
import FrequentlyAskedQuestions from "../../components/mainComponents/FrequentlyAskedQuestions";
import OurServices from "../../components/mainComponents/OurServices";
import Testimonial from "../../components/mainComponents/Testimonial";
import OurClients from "../../components/mainComponents/OurClients";

const ForEnterprise = () => {
  return (
    <main className="for-enterprise">
      <Header/>
      <OurServices/>
      <Testimonial/>
      <OurClients/>
      <FrequentlyAskedQuestions/>
      <Footer/>
    </main>
  );
};

export default ForEnterprise;

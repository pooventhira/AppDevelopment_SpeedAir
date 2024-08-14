import React from "react";
import "./ForEnterprise.css";
import Header from "../../components/mainComponents/Header";
import Footer from "../../components/mainComponents/Footer";
import FrequentlyAskedQuestions from "../../components/mainComponents/FrequentlyAskedQuestions";
import OurServices from "../../components/mainComponents/OurServices";
import Testimonial from "../../components/mainComponents/Testimonial";
import OurClients from "../../components/mainComponents/OurClients";
import OurGrowingNetwork from "../../components/mainComponents/OurGrowingNetwork";
import EnterpriseLanding from "../../components/mainComponents/EnterpriseLanding";

const ForEnterprise = () => {
  return (
    <main className="for-enterprise">
      <Header/>
      <EnterpriseLanding/>
      <OurServices/>
      <OurGrowingNetwork/>
      <OurClients/>
      <Testimonial/>
      <FrequentlyAskedQuestions/>
      <Footer/>
    </main>
  );
};

export default ForEnterprise;

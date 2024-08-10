import React from "react";
import './Estimate.css';
import Header from "../../components/mainComponents/Header";
import Footer from "../../components/mainComponents/Footer";
import EstimateLanding from "../../components/mainComponents/EstimateLanding";
import EstimateExtraHand from "../../components/mainComponents/EstimateExtraHand";
import FrequentlyAskedQuestions from "../../components/mainComponents/FrequentlyAskedQuestions";
import Testimonial from "../../components/mainComponents/Testimonial";

const Estimate = () => {
  return (
    <main className="estimate">
      <Header/>
      <EstimateLanding/>
      <EstimateExtraHand/>
      <Testimonial/>
      <FrequentlyAskedQuestions/>
      <Footer/>
    </main>
  );
}

export default Estimate;

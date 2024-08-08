import React from "react";
import "./Home.css";
import Hero from "../../components/mainComponents/Hero";
import Services from "../../components/mainComponents/Services";
import Testimonial from "../../components/mainComponents/Testimonial";
import FrequentlyAskedQuestions from "../../components/mainComponents/FrequentlyAskedQuestions";
import Header from "../../components/mainComponents/Header";
import Footer from "../../components/mainComponents/Footer";

const Home = () => {
  return (
    <main className="home">
      <Header/>
      <Hero/>
      <Services/>
      <Testimonial/>
      <FrequentlyAskedQuestions/>
      <Footer/>
    </main>
  );
};

export default Home;

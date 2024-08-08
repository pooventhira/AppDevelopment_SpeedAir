import React from "react";
import "./Support.css"
import HelpCenter from "../../components/mainComponents/HelpCenter";
import Offices from "../../components/mainComponents/Offices";
import Header from "../../components/mainComponents/Header";
import Footer from "../../components/mainComponents/Footer";

const Support = () => {
  return (
    <main>
      <Header/>
      <HelpCenter/>
      <Offices/>
      <Footer/>
    </main>
  );
};

export default Support;

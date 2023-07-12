import React from "react";

import { Banner } from "../components/Banner";
import { CTA } from "../components/CTA";
import { Feature } from "../components/Feature";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Stats } from "../components/Stats";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";

const LandingPage = () => {
  return (
    <div className="w-screen">
      <Header />
      <Banner />
      <Services />
      <Feature />
      <Stats />
      <Contact />
      <CTA />
      {/* <Testimonials /> */}
      
      <Team />
      
     
      <Footer />
    </div>
  );
};

export default LandingPage;

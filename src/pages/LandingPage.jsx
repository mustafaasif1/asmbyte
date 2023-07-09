import React from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Testimonials } from "../components/Testimonials";
import { Banner } from "../components/Banner";

const LandingPage = () => {
  return (
    <div className="w-screen">
      <Header />
      <Banner />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;

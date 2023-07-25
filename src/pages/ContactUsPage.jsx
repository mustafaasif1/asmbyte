import React from "react";

import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
import { CTA } from "../components/CTA";
import { Feature } from "../components/Feature";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";

const ContactUs = () => {
  return (
    <div className="w-screen">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactUs;
import React from "react";

import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

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
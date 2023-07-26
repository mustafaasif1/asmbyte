import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const ValuesPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-screen">
      <Header />
      <div className="bg-white py-64">
        <h1 className="text-black">This is the Values Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default ValuesPage;
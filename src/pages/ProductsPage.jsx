import React from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const ProductsPage = () => {
  return (
    <div className="w-screen">
      <Header />
      <div className="bg-white py-64">
        <h1 className="text-black">This is the Products Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
import React from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const products = [
  {
    id: 1,
    name: "Product A",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/path/to/product-a-image.jpg",
  },
  {
    id: 2,
    name: "Product B",
    description: "Nulla a mi sagittis, elementum nisl vitae, ultrices nulla.",
    image: "/path/to/product-b-image.jpg",
  },
  // Add more products here
];

const ProductsPage = () => {
  return (
    <div className="w-screen">
      <Header />
      <div className="py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          Products
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-6">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-auto mx-auto mb-6"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div
              
                className="block text-center bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Learn More
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
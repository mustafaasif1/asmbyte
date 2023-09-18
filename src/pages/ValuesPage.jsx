import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const values = [
  {
    title: "Innovation",
    description:
      "We foster a culture of innovation, where creativity and new ideas thrive. We constantly seek new ways to solve problems and deliver cutting-edge solutions to our clients.",
  },
  {
    title: "Collaboration",
    description:
      "Collaboration is at the heart of everything we do. We work closely with our clients, understanding their needs, and collaborating with each other to achieve shared goals.",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in all aspects of our work. From the quality of our code to the user experience of our applications, we never settle for anything less than the best.",
  },
  {
    title: "Customer-Centric",
    description:
      "Our customers are at the center of everything we do. We listen to their needs, understand their challenges, and tailor our solutions to exceed their expectations.",
  },
  {
    title: "Continuous Learning",
    description:
      "Learning never stops at our company. We are committed to continuous improvement, staying up-to-date with the latest technologies, and expanding our knowledge to deliver exceptional results.",
  },
];

const ValuesPage = () => {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <div className="w-screen">
      <Header />
      <div className="py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          Our Values
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h2>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default ValuesPage;
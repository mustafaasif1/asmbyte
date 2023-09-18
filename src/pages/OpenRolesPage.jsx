import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const jobs = [
  {
    title: "Frontend Developer",
    description:
      "We are looking for a talented Frontend Developer to join our team and contribute to building cutting-edge web applications.",
  },
  {
    title: "Mobile App Developer",
    description:
      "Join our Mobile App Development team to create next-generation mobile applications for iOS and Android platforms.",
  },
  {
    title: "Data Scientist",
    description:
      "Are you passionate about data? Join our Data Science team and work on exciting projects using advanced analytics and machine learning.",
  },
];

const OpenRolesPage = () => {
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
            Open Roles
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{job.title}</h2>
                <p className="text-gray-600">{job.description}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OpenRolesPage;

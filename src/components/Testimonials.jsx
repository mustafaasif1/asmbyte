import React from "react";
import locate from "../assets/company-logo/locate-logo.png";
import hadi from "../assets/people/Hadi.jpg";

export const Testimonials = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-20 sm:py-26 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl ">
        <figure className="bg-gray-900 pt-10 rounded-md">
          <blockquote className="sm:px-12 px-6 pt-8 text-white text-center text-l sm:text-xl leading-8 text-gray-900 sm:leading-9">
            <p>
              “ASMByte has been an exceptional partner in our digital
              transformation journey. Their team's expertise and dedication have
              driven outstanding results for our business, and we look forward
              to continuing our collaboration for future success.”
            </p>
          </blockquote>
          <figcaption className="mt-10 pb-10">
            <img className="mx-auto h-10 w-10 rounded-full" src={hadi} alt="" />

            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-white">Abdul Hadi</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-100"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-white-600">CEO of Locate</div>
            </div>
            <img
              className="mt-4 mx-auto h-12 px-4"
              src={locate}
              alt=""
              height={50}
            />
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

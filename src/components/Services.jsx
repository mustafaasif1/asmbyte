import React from "react";

export const Services = () => {
  return (
    <section class="bg-white text-black pb-12">
      <div class="py-8 sm:py-12 lg:py-16 px-8 md:px-20 lg:px-48 justify-center">
        <div class="max-w-xl mx-auto py-8">
          <h2 class="text-3xl font-bold sm:text-4xl">Our Services</h2>

          <p class="mt-4 text-black">
            Join us on a transformative journey, where technology knows no
            bounds, and together, we'll shape the digital future you envision.
            Let ASMByte be your partner in progress, delivering excellence in
            every step of your digital evolution.
          </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-blue-700 p-4">
              <i className="h-5 w-5  fas fa-globe-americas text-gray-200"></i>
            </span>
            <div>
              <h2 class="text-lg font-bold">
                Cutting-Edge Web Applications: Elevate Your Online Presence
              </h2>

              <p class="mt-1 text-sm text-gray-800">
                Our web applications are crafted with precision, blending
                stunning design with seamless functionality. Whether you need a
                corporate website, e-commerce platform, or a custom solution,
                our team leverages the latest technologies to deliver a
                user-centric experience that captivates your audience and drives
                results.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-blue-700 p-4">
              <i className="h-5 w-5 fas fa-mobile-alt text-gray-200"></i>
            </span>

            <div>
              <h2 class="text-lg font-bold">
                Next-Generation Mobile Applications: Transforming the Way You
                Connect
              </h2>

              <p class="mt-1 text-sm text-gray-800">
                Step into the mobile-first world with our bespoke mobile
                applications. From iOS to Android and cross-platform solutions,
                we build apps that seamlessly integrate into users' lives,
                combining intuitive interfaces with powerful features. Let us
                help you create a lasting impression and stay ahead in the
                competitive app market.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-blue-700 p-4">
            <i className="h-5 w-5 fas fa-chart-line text-gray-200"></i>
            </span>

            <div>
              <h2 class="text-lg font-bold">
                Data-Driven Projects: Unleashing Insights for Success
              </h2>

              <p class="mt-1 text-sm text-gray-800">
                Our data science projects are driven by insights that fuel
                business growth. From predictive analytics to machine learning
                solutions, we transform raw data into actionable intelligence,
                enabling you to make informed decisions and drive innovation.
                Embrace the power of data and unlock the full potential of your
                organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

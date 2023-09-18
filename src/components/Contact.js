import React from "react";

export const Contact = () => {
  return (
    <section class="bg-white" id="contactus">
      <div class="mx-auto max-w-screen-xl px-4 py-16 md:py-32 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 p-6">
              Contact us
            </h2>

            <p class="max-w-xl lg:text-lg text-md text-gray-600 mx-auto">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>

            <div class="mt-8">
              <a
                href="mailto:max.mustermann@example.com?body=My custom mail body"
                class="text-2xl font-bold text-blue-700"
              >
                support@asmbyte.com
              </a>
            </div>
          </div>

          <div class="rounded-lg border-slate-500 bg-slate-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" class="space-y-4">
              <div>
                <label class="sr-only" for="name">
                  Name
                </label>
                <input
                  class="border w-full rounded-lg border-gray-300 p-3 text-sm bg-white text-black"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">
                    Email
                  </label>
                  <input
                    class="border w-full rounded-lg border-gray-300 p-3 text-sm bg-white text-black"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    class="border w-full rounded-lg border-gray-300 p-3 text-sm bg-white text-black"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">
                  Message
                </label>

                <textarea
                  class="border w-full rounded-lg border-gray-300 p-3 text-sm bg-white text-black"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

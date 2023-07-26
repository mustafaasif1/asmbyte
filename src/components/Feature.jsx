import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import people from "../assets/misc/people-laughing.jpg";

const features = [
  {
    name: "Fast and Reliable Deployment",
    description:
      "Deploy your applications faster and more reliably with our streamlined and efficient deployment process.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Protect your applications and user data with industry-standard SSL certificates for enhanced security.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Rest easy knowing that your valuable data is automatically backed up regularly to prevent data loss.",
    icon: ServerIcon,
  },
];

export const Feature = () => {
  return (
    <div className="overflow-hidden bg-gray-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-700">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are a leading software house with a focus on providing
                exceptional services for application development and project
                management. Here are some reasons why you should choose us:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-blue-700"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={people}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 dark:brightness-25" // Add dark:brightness-50 to apply the dark filter
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
};

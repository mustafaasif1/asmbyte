import afaq from "../assets/people/Afaq.jpg";
import mustafa from "../assets/people/Mustafa.jpg";
import sheraz from "../assets/people/Sheraz.jpg";

const people = [
  {
    name: "Mohammad Afaq",
    role: "Co-Founder / CEO",
    imageUrl: afaq,
    description:
      "With a passion for cutting-edge technology and a drive for innovation, Mohamamd Afaq stands at the forefront of revolutionizing the digital landscape. As an accomplished Electrical Engineer from Lahore University of Management Sciences (LUMS), Afaq has honed his expertise in Python, Machine Learning, Deep Learning, and Signal Processing, making him a formidable force in the world of data-driven solutions.",
  },
  {
    name: "Muhammad Mustafa Asif",
    role: "Co-Founder / CTO",
    imageUrl: mustafa,
    description:
      "Meet Mustafa Asif, a visionary Software Engineer with a stellar M.Sc. Informatics degree from Technical University of Munich. A leader with a passion for innovation, Mustafa's collaborative spirit and relentless pursuit of excellence set him apart in the world of software engineering. ",
  },
  {
    name: "Sheraz Hasan",
    role: "Co-Founder / CSO",
    imageUrl: sheraz,
    description:
      "With a passion for cutting-edge technology and a drive for innovation, Sheraz Hassan stands at the forefront of revolutionizing the digital landscape. As an accomplished Electrical Engineer from Lahore University of Management Sciences (LUMS), Sheraz has honed his expertise in Python, Machine Learning, Deep Learning, and Signal Processing, making him a formidable force in the world of data-driven solutions.",
  },
];

export const Team = () => {
  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are guided by a team of visionaries who lead with passion,
            expertise, and a relentless drive for innovation. Meet our
            exceptional leadership, architects of our mission to revolutionize
            the digital landscape and empower a limitless technological
            tomorrow.{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3 px-12 md:px-36"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex sm:flex-col items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-blue-700">
                    {person.role}
                  </p>
                  <p className="text-sm leading-6 text-gray-600">
                    {person.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

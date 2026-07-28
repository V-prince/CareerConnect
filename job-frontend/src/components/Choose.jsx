import {
  FaUserCheck,
  FaBriefcase,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBriefcase size={32} />,
    title: "Verified Jobs",
    description:
      "Browse thousands of genuine job and internship opportunities from trusted companies.",
  },
  {
    icon: <FaUserCheck size={32} />,
    title: "Easy Applications",
    description:
      "Apply to multiple jobs with just a few clicks using your saved profile and resume.",
  },
  {
    icon: <FaBolt size={32} />,
    title: "Fast Hiring",
    description:
      "Connect directly with recruiters and receive quicker responses from employers.",
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: "Trusted Platform",
    description:
      "We verify employers and listings to provide a safe and reliable hiring experience.",
  },
];

const Choose = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Helping You Build Your Career
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            CareerConnect provides everything you need to discover jobs,
            internships, and career opportunities from leading companies.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-20 bg-blue-600 rounded-3xl p-10 text-white">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold">15K+</h3>
              <p className="mt-2 text-blue-100">Jobs Posted</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="mt-2 text-blue-100">Companies</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">8K+</h3>
              <p className="mt-2 text-blue-100">Students Hired</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">98%</h3>
              <p className="mt-2 text-blue-100">Success Rate</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Choose;
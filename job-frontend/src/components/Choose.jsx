import {
  FaShieldAlt,
  FaPaperPlane,
  FaFileAlt,
  FaBell,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={24} />,
    title: "Verified Companies",
    description: "Only trusted companies posted here.",
    color: "border-indigo-200 bg-indigo-50 text-indigo-600",
  },
  {
    icon: <FaPaperPlane size={24} />,
    title: "Easy Apply",
    description: "Apply to jobs/internships in one click.",
    color: "border-green-200 bg-green-50 text-green-600",
  },
  {
    icon: <FaFileAlt size={24} />,
    title: "Resume Help",
    description: "Get tips to make your resume better.",
    color: "border-yellow-200 bg-yellow-50 text-yellow-600",
  },
  {
    icon: <FaBell size={24} />,
    title: "Job Alerts",
    description: "Get notified about latest opportunities.",
    color: "border-red-200 bg-red-50 text-red-600",
  },
];

const Choose = () => {
  return (
    <section className="bg-gray-100 py-4 md:py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white border border-zinc-200 shadow-md rounded-xl p-5 md:p-6 mt-5">
          <h2 className="text-lg md:text-xl font-bold text-zinc-800">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 md:mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col items-start justify-center p-5 rounded-xl border ${feature.color} hover:shadow-md transition`}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <span className="text-sm md:text-base font-bold text-zinc-800">
                  {feature.title}
                </span>
                <p className="text-sm text-zinc-600 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;

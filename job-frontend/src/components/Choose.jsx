import { FaShieldAlt, FaPaperPlane, FaFileAlt, FaBell } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={20} />,
    title: "Verified Companies",
    description: "Only trusted companies posted here.",
    tileBg: "bg-white border border-zinc-100",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    icon: <FaPaperPlane size={20} />,
    title: "Easy Apply",
    description: "Apply to jobs/internships in one click.",
    tileBg: "bg-white border border-zinc-100",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    icon: <FaFileAlt size={20} />,
    title: "Resume Help",
    description: "Get tips to make your resume better.",
    tileBg: "bg-white border border-zinc-100",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    icon: <FaBell size={20} />,
    title: "Job Alerts",
    description: "Get notified about latest opportunities.",
    tileBg: "bg-white border border-zinc-100",
    iconBg: "bg-blue-50 text-blue-600",
  },
];

const Choose = () => {
  return (
    <section className="bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-16">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-8 md:mb-10 text-center">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 md:gap-5 p-5 md:p-6 rounded-xl ${feature.tileBg} hover:shadow-md transition`}
            >
              <div
                className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center ${feature.iconBg}`}
              >
                {feature.icon}
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-sm md:text-base text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1 leading-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;

import {
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaUserTie,
  FaPaintBrush,
  FaGraduationCap,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaCode />,
    title: "Development",
    iconColor: "text-blue-600",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing",
    iconColor: "text-green-600",
  },
  {
    icon: <FaChartLine />,
    title: "Finance",
    iconColor: "text-orange-500",
  },
  {
    icon: <FaUserTie />,
    title: "Human Resources",
    iconColor: "text-purple-600",
  },
  {
    icon: <FaPaintBrush />,
    title: "Design",
    iconColor: "text-rose-500",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    iconColor: "text-blue-700",
  },
];

const Categories = () => {
  return (
    <section className="bg-zinc-50 py-10 md:py-12 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-6 md:mb-7 lg:mb-8">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-xl border border-zinc-200 bg-white hover:shadow-md hover:-translate-y-0.5 transition p-5 text-center cursor-pointer"
            >
              <div
                className={`mx-auto mb-3 flex items-center justify-center text-2xl md:text-3xl ${category.iconColor}`}
              >
                {category.icon}
              </div>

              <h3 className="font-semibold text-sm md:text-base text-slate-900">
                {category.title}
              </h3>
              <p className="text-blue-600 text-sm font-semibold mt-1">
                {category.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

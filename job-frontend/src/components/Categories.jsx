import {
  FaCode,
  FaBullhorn,
  FaPaintBrush,
  FaChartLine,
  FaUserTie,
  FaGraduationCap,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaCode />,
    title: "Development",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: <FaChartLine />,
    title: "Finance",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: <FaUserTie />,
    title: "Human Resources",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: <FaPaintBrush />,
    title: "Design",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    color: "bg-indigo-100 text-indigo-600",
  },
];

const Categories = () => {
  return (
    <section className="bg-gray-100 py-6 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-5 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-lg md:text-xl text-zinc-800">
              Popular Categories
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-zinc-200 p-5 hover:shadow-md transition cursor-pointer text-center"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 ${category.color}`}
                >
                  {category.icon}
                </div>

                <h3 className="font-semibold text-zinc-800 text-sm md:text-base">
                  {category.title}
                </h3>

                <p className="text-indigo-600 text-sm font-semibold mt-1">
                  {category.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;

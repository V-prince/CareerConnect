import {
  FaCode,
  FaBullhorn,
  FaPaintBrush,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaCode />,
    title: "Development",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <FaChartLine />,
    title: "Finance",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaUserTie />,
    title: "Human Resources",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: <FaPaintBrush />,
    title: "Design",
    color: "bg-purple-100 text-purple-600",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">



        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Categories
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Explore Popular Categories
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Browse thousands of opportunities across various industries and
            find the perfect role that matches your skills.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group cursor-pointer border border-gray-100 hover:-translate-y-2"
            >

              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 ${category.color}`}
              >
                {category.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {category.title}
              </h3>

              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700">
                Explore →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;
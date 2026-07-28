import {
  FaMapMarkerAlt,
  FaClock,
  FaBookmark,
} from "react-icons/fa";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    type: "Full Time",
    salary: "₹10 - 15 LPA",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Mumbai",
    type: "Internship",
    salary: "₹25,000/month",
    logo: "https://logos-world.net/wp-content/uploads/2020/07/Adobe-Logo.png",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Amazon",
    location: "Hyderabad",
    type: "Full Time",
    salary: "₹12 - 18 LPA",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Microsoft",
    location: "Pune",
    type: "Remote",
    salary: "₹8 - 12 LPA",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
  },
];

const LatestJobs = () => {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center mb-12">

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-wider">
              Latest Jobs
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Recent Job Openings
            </h2>

            <p className="text-gray-500 mt-3">
              Explore newly posted opportunities from top companies.
            </p>

          </div>

          <button className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            View All Jobs
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {jobs.map((job) => (

            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >

              <div className="flex justify-between items-start">

                <div className="flex gap-4">

                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-14 h-14 rounded-xl bg-gray-100 p-2"
                  />

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800">
                      {job.title}
                    </h3>

                    <p className="text-gray-500">
                      {job.company}
                    </p>

                  </div>

                </div>

                <button className="text-gray-400 hover:text-blue-600 transition">
                  <FaBookmark />
                </button>

              </div>

              <div className="flex flex-wrap gap-3 mt-6">

                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {job.type}
                </span>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  {job.salary}
                </span>

              </div>

              <div className="flex justify-between items-center mt-8">

                <div className="space-y-2">

                  <div className="flex items-center gap-2 text-gray-500">

                    <FaMapMarkerAlt />

                    <span>{job.location}</span>

                  </div>

                  <div className="flex items-center gap-2 text-gray-500">

                    <FaClock />

                    <span>Posted 2 days ago</span>

                  </div>

                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition">
                  Apply Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default LatestJobs;
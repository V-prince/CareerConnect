import { FaMapMarkerAlt } from "react-icons/fa";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Microsoft",
    location: "Bangalore",
    logo: "/images/microsoft.png",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "TCS",
    location: "Hyderabad",
    logo: "/images/google.png",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Infosys",
    location: "Pune",
    logo: "/images/zomato.png",
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    company: "Wipro",
    location: "Chennai",
    logo: "/images/Swiggy.png",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Amazon",
    location: "Bangalore",
    logo: "/images/delloit.png",
  },
];

const internships = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "Google",
    location: "Remote",
    logo: "/images/google.png",
  },
  {
    id: 2,
    title: "Marketing Intern",
    company: "Amazon",
    location: "Bangalore",
    logo: "/images/delloit.png",
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "IBM",
    location: "Remote",
    logo: "/images/microsoft.png",
  },
  {
    id: 4,
    title: "Technical Support Intern",
    company: "Dell",
    location: "Hyderabad",
    logo: "/images/zomato.png",
  },
  {
    id: 5,
    title: "Graphic Design Intern",
    company: "Adobe",
    location: "Pune",
    logo: "/images/Swiggy.png",
  },
];

const LatestJobs = () => {
  return (
    <section className="bg-gray-100 py-4 md:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-8">
          <div className="bg-white rounded-xl shadow-md p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-lg md:text-xl text-zinc-800">
                Latest Jobs
              </h2>

              <button className="text-indigo-600 font-medium hover:text-indigo-700 transition text-sm">
                View All
              </button>
            </div>

            {jobs.map((job, index) => (
              <div
                key={job.id}
                className={`flex flex-col gap-4 ${
                  index === jobs.length - 1 ? "border-none" : "border-b"
                } py-5 border-zinc-200`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-10 h-10 object-contain"
                    />

                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-zinc-800">
                        {job.title}
                      </h3>

                      <p className="text-sm text-zinc-500">
                        {job.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    <FaMapMarkerAlt />
                    <span>{job.location}</span>
                  </div>

                  <button className="text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-1.5 rounded-md text-sm font-semibold transition">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-md p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-lg md:text-xl text-zinc-800">
                Latest Internships
              </h2>

              <button className="text-indigo-600 font-medium hover:text-indigo-700 transition text-sm">
                View All
              </button>
            </div>

            {internships.map((intern, index) => (
              <div
                key={intern.id}
                className={`flex flex-col gap-4 ${
                  index === internships.length - 1 ? "border-none" : "border-b"
                } py-5 border-zinc-200`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <img
                      src={intern.logo}
                      alt={intern.company}
                      className="w-10 h-10 object-contain"
                    />

                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-zinc-800">
                        {intern.title}
                      </h3>

                      <p className="text-sm text-zinc-500">
                        {intern.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    <FaMapMarkerAlt />
                    <span>{intern.location}</span>
                  </div>

                  <button className="text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-1.5 rounded-md text-sm font-semibold transition">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;

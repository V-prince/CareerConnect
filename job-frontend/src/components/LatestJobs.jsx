import { FaMapMarkerAlt } from "react-icons/fa";
import { useJob } from "../store/JobContext";
import { Link } from "react-router-dom";

const CardRow = ({ item }) => (
  <Link to={`/job/${item._id}`} className="flex flex-col gap-3 border-b border-zinc-200 py-4 last:border-0 hover:bg-zinc-100 rounded-xl p-4">
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-4 min-w-0">
        <img
          src={item.company.logo}
          alt={item.companyName}
          className="w-12 h-12 object-contain flex-shrink-0"
        />
        <div className="min-w-0">
          <h3 className="font-semibold text-sm md:text-base text-slate-900 truncate">
            {item.jobTitle}
          </h3>
          <p className="text-sm text-slate-500 truncate">{item.company.companyName}</p>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-slate-500 text-xs md:text-sm">
        <FaMapMarkerAlt size={13} />
        <span>{item.location}</span>
      </div>

      <button className="inline-flex items-center justify-center px-3 md:px-4 py-1.5 text-xs md:text-sm font-semibold rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
        Apply Now
      </button>
    </div>
  </Link>
);

const ListCard = ({ title, items }) => (
  <div className="bg-white rounded-xl border border-zinc-200 p-5 md:p-6">
    <div className="flex items-center justify-between mb-4 md:mb-5">
      <h2 className="font-bold text-base md:text-lg lg:text-xl text-slate-900">
        {title}
      </h2>
      <Link to={'/jobs'} className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition">
        View All
      </Link>
    </div>

   <div className="flex flex-col">
      {items?.length > 0 ? (
        items.map((item) => (
          <CardRow key={item._id } item={item} />
        ))
      ) : (
        <div className="py-10 text-center text-sm text-slate-500">
          No Jobs Available
        </div>
      )}
    </div>
  </div>
);

const LatestJobs = () => {

  const { jobs } = useJob();

  const internships = jobs.filter((job)=>job.jobType === "Internship");

  const latestJobs = jobs.filter((job)=>job.jobType !== "Internship");
  
  return (
    <section className="bg-transparent py-10 md:py-7 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          
          <ListCard title="Latest Jobs" items={latestJobs} />
          <ListCard title="Latest Internships" items={internships} />
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;

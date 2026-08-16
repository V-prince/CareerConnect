const JobsCard = ({ job, onApply }) => {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5 md:p-6 hover:shadow-md transition">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-14 h-14 rounded-xl border border-zinc-200 bg-white flex items-center justify-center shrink-0 overflow-hidden">
          <img
            src={job.icon}
            alt={job.companey}
            className="w-10 h-10 object-contain"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-zinc-800">{job.title}</h2>

              <p className="text-sm text-zinc-600 mt-1">
                {job.companey} • {job.city}, {job.state}
              </p>
            </div>

            <span className="w-fit px-2.5 py-1 rounded-lg bg-green-50 text-green-600 text-xs font-medium">
              {job.status}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs">
              {job.jobType}
            </span>

            <span className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-600 text-xs">
              {job.experience}
            </span>

            <span className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-600 text-xs">
              {job.workMode}
            </span>

            <span className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-600 text-xs">
              {job.salaryLabel}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-5">
            <span className="text-xs text-zinc-400">Posted {job.date}</span>

            <button
              onClick={onApply}
              className="w-full sm:w-auto px-5 h-10 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;

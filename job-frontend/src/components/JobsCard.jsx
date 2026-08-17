import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
  FaBookmark,
  FaRegBookmark,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

const JobsCard = ({ job, onClick }) => {
  const [isSaved, setIsSaved] = useState(false);

  const jobId = job?.id || job?._id;

  const companyName = job?.company || job?.companey || "Company";

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    const alreadySaved = savedJobs.some(
      (savedJob) => String(savedJob?.id || savedJob?._id) === String(jobId),
    );

    setIsSaved(alreadySaved);
  }, [jobId]);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    if (isSaved) {
      const updatedJobs = savedJobs.filter(
        (savedJob) => String(savedJob?.id || savedJob?._id) !== String(jobId),
      );

      localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));

      setIsSaved(false);
    } else {
      const alreadySaved = savedJobs.some(
        (savedJob) => String(savedJob?.id || savedJob?._id) === String(jobId),
      );

      if (!alreadySaved) {
        localStorage.setItem("savedJobs", JSON.stringify([...savedJobs, job]));
      }

      setIsSaved(true);
    }
  };

  const skills = Array.isArray(job?.skills)
    ? job.skills
    : job?.skills
      ? String(job.skills)
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean)
      : [];

  return (
    <div
      onClick={onClick}
      className="relative bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition cursor-pointer"
    >
      <button
        type="button"
        onClick={handleSave}
        className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-lg flex items-center justify-center transition ${
          isSaved
            ? "bg-indigo-50 text-indigo-600"
            : "bg-white text-zinc-400 border border-zinc-200 hover:text-indigo-600"
        }`}
      >
        {isSaved ? <FaBookmark size={15} /> : <FaRegBookmark size={15} />}
      </button>

      <div className="flex items-start gap-4 pr-12">
        <div className="w-14 h-14 rounded-xl border border-zinc-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
          {job?.icon ? (
            <img
              src={job.icon}
              alt={companyName}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <FaBuilding className="text-indigo-500 text-xl" />
          )}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base md:text-lg font-bold text-zinc-900">
              {job?.title || "Job Title"}
            </h3>

            {job?.status === "Verified" && (
              <span className="inline-flex items-center gap-1 text-xs text-blue-600">
                <FaCheckCircle />
                Verified
              </span>
            )}
          </div>

          <p className="text-sm text-zinc-500 mt-1">{companyName}</p>

          <div className="flex items-center gap-1.5 mt-2 text-xs text-zinc-500">
            <FaMapMarkerAlt className="text-zinc-400" />

            <span>
              {job?.city || "Location"}
              {job?.state ? `, ${job.state}` : ""}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {job?.jobType && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-green-50 border border-green-100 text-green-600 text-xs font-medium">
            <FaBriefcase size={11} />
            {job.jobType}
          </span>
        )}

        {job?.experience && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium">
            <FaClock size={11} />
            {job.experience}
          </span>
        )}

        {job?.workMode && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-purple-50 border border-purple-100 text-purple-600 text-xs font-medium">
            {job.workMode}
          </span>
        )}

        {(job?.salaryLabel || job?.salary) && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-medium">
            <FaMoneyBillWave size={11} />
            {job.salaryLabel || `₹${job.salary} LPA`}
          </span>
        )}
      </div>

      <p className="text-sm text-zinc-600 leading-6 mt-4 line-clamp-2">
        {job?.description || "No job description has been provided."}
      </p>

      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.slice(0, 5).map((skill, index) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsCard;

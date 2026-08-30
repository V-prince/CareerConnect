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
import { GetSavedJobsData, JobSaveApI } from "../Services/candidateService";

const JobsCard = ({ job, onClick }) => {

  const [isSaved, setIsSaved] = useState(false);


  const jobId = job?.id || job?._id;

  const handleSave = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(prev => !prev);
    try {

      const data = await JobSaveApI(jobId);

      
      if (data.success) {
        setIsSaved(data.saved)
      }
      else {
        console.log(data.message);
      }

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const checkSaved = async () => {
      try {
        const data = await GetSavedJobsData();
        console.log(data)
        if (data.success) {
          const saved = data.jobs.some((item) => String(item.job._id) === String(jobId))
          setIsSaved(saved);
        }

      } catch (error) {
        console.log(error)
      }
    }
    if (jobId) {
      checkSaved()
    }
  }, [jobId])


  const formatSalary = (salary) => {
    if (!salary) return "";

    if (salary >= 100000) {
      const lpa = salary / 100000;
      return Number.isInteger(lpa) ? `${lpa} LPA` : `${lpa.toFixed(1)} LPA`;
    }

    return `₹${salary.toLocaleString("en-IN")}`;
  };

  return (
    <div
      onClick={onClick}
      className="relative bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition cursor-pointer"
    >
      <button
        type="button"
        onClick={handleSave}
        className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-lg flex items-center justify-center transition ${isSaved
          ? "bg-indigo-50 text-indigo-600"
          : "bg-white text-zinc-400 border border-zinc-200 hover:text-indigo-600"
          }`}
      >
        {isSaved ? <FaBookmark size={15} /> : <FaRegBookmark size={15} />}
      </button>

      <div className="flex items-start gap-4 pr-12">
        <div className="w-14 h-14 rounded-xl border border-zinc-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
          {job?.company?.logo ? (
            <img
              src={job?.company?.logo}
              alt={job?.company?.companyName}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <FaBuilding className="text-indigo-500 text-xl" />
          )}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base md:text-lg font-bold text-zinc-900">
              {job?.jobTitle || "Job Title"}
            </h3>

            {job?.status === "Verified" && (
              <span className="inline-flex items-center gap-1 text-xs text-blue-600">
                <FaCheckCircle />
                Verified
              </span>
            )}
          </div>

          <p className="text-sm text-zinc-500 mt-1">{job?.company?.companyName}</p>

          <div className="flex items-center gap-1.5 mt-2 text-xs text-zinc-500">
            <FaMapMarkerAlt className="text-zinc-400" />

            <span>
              {job?.location}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {job?.jobType && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-green-50 border border-green-100 text-green-600 text-xs font-medium">
            <FaBriefcase size={11} />
            {job?.jobType}
          </span>
        )}

        {job?.experienceLevel && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium">
            <FaClock size={11} />
            {job?.experienceLevel}
          </span>
        )}

        {job?.remote && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-purple-50 border border-purple-100 text-purple-600 text-xs font-medium">
            {job?.remote ? "remote" : "On-site"}
          </span>
        )}

        {(job?.salaryLabel || job?.maxSalary) && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-medium">
            <FaMoneyBillWave size={11} />
            {job.salaryLabel || `₹${formatSalary(job?.minSalary)} - ${formatSalary(job?.maxSalary)} `}
          </span>
        )}
      </div>
    </div>
  );
};

export default JobsCard;

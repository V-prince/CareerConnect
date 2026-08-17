import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBookmark,
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
  FaBuilding,
} from "react-icons/fa";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const jobId = job?.id || job?._id;

  const [isSaved, setIsSaved] = useState(false);

  /* =========================================================
     LOGIN CHECK
  ========================================================= */

  const isUserLoggedIn = () => {
    const token = localStorage.getItem("token");
    const authToken = localStorage.getItem("authToken");

    const user = localStorage.getItem("user");
    const loggedInUser = localStorage.getItem("loggedInUser");
    const currentUser = localStorage.getItem("currentUser");

    return !!(token || authToken || user || loggedInUser || currentUser);
  };

  /* =========================================================
     LOAD SAVED STATUS
  ========================================================= */

  useEffect(() => {
    if (!jobId) return;

    try {
      const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

      const saved = savedJobs.some(
        (savedJob) => String(savedJob.id || savedJob._id) === String(jobId),
      );

      setIsSaved(saved);
    } catch (error) {
      console.error("Error loading saved jobs:", error);
      setIsSaved(false);
    }
  }, [jobId]);

  /* =========================================================
     OPEN JOB DETAILS
  ========================================================= */

  const handleCardClick = () => {
    if (!jobId) return;

    navigate(`/jobs/${jobId}`);
  };

  /* =========================================================
     SAVE / UNSAVE JOB
  ========================================================= */

  const handleSave = (event) => {
    event.stopPropagation();

    if (!isUserLoggedIn()) {
      alert("Please login first to save this job.");
      return;
    }

    if (!jobId) return;

    try {
      const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

      const alreadySaved = savedJobs.some(
        (savedJob) => String(savedJob.id || savedJob._id) === String(jobId),
      );

      let updatedJobs;

      if (alreadySaved) {
        updatedJobs = savedJobs.filter(
          (savedJob) => String(savedJob.id || savedJob._id) !== String(jobId),
        );

        setIsSaved(false);
      } else {
        updatedJobs = [...savedJobs, job];

        setIsSaved(true);
      }

      localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  /* =========================================================
     DATA
  ========================================================= */

  const companyName = job?.company || job?.companey || "Company";

  const location = [job?.city, job?.state].filter(Boolean).join(", ");

  const salary =
    job?.salaryLabel ||
    (job?.salary ? `₹${job.salary} LPA` : "Salary not specified");

  /* =========================================================
     CARD
  ========================================================= */

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer"
    >
      {/* =====================================================
          SAVE BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={handleSave}
        aria-label={isSaved ? "Unsave job" : "Save job"}
        className={`absolute top-4 right-4 w-9 h-9 rounded-lg flex items-center justify-center transition ${
          isSaved
            ? "bg-blue-50 text-blue-600 hover:bg-blue-100"
            : "bg-zinc-50 text-zinc-400 hover:bg-blue-50 hover:text-blue-600"
        }`}
      >
        <FaBookmark className={`text-base ${isSaved ? "fill-current" : ""}`} />
      </button>

      {/* =====================================================
          COMPANY + JOB
      ===================================================== */}

      <div className="flex items-start gap-4 pr-10">
        {/* Company Logo */}

        <div className="w-14 h-14 rounded-xl border border-zinc-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
          {job?.icon ? (
            <img
              src={job.icon}
              alt={companyName}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <FaBuilding className="text-blue-500 text-xl" />
          )}
        </div>

        {/* Job Information */}

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-600 transition truncate">
            {job?.title || "Job Title"}
          </h3>

          <p className="text-sm text-zinc-500 mt-1 truncate">{companyName}</p>

          {location && (
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-2">
              <FaMapMarkerAlt className="text-zinc-400" />

              <span>{location}</span>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================
          TAGS
      ===================================================== */}

      <div className="flex flex-wrap gap-2 mt-4">
        {job?.jobType && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-100 text-green-600 text-xs font-medium">
            <FaBriefcase />
            {job.jobType}
          </span>
        )}

        {job?.experience && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium">
            <FaClock />
            {job.experience}
          </span>
        )}

        {job?.workMode && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-medium">
            {job.workMode}
          </span>
        )}
      </div>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      {job?.description && (
        <p className="text-sm text-zinc-600 leading-6 mt-4 line-clamp-2">
          {job.description}
        </p>
      )}

      {/* =====================================================
          BOTTOM INFO
      ===================================================== */}

      <div className="flex items-center justify-between gap-3 mt-5 pt-4 border-t border-zinc-100">
        <div className="flex items-center gap-1.5 text-sm text-zinc-600">
          <FaMoneyBillWave className="text-emerald-500" />

          <span className="font-medium">{salary}</span>
        </div>

        {job?.date && <span className="text-xs text-zinc-400">{job.date}</span>}
      </div>
    </div>
  );
};

export default JobCard;

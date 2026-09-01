import React from "react";
import { FaStar } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import dayjs from "dayjs";

const RecentApplications = ({ recentApplications, navigate }) => {
  const appStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "new":
        return "bg-green-50 text-green-700 border border-green-100";

      case "shortlisted":
        return "bg-blue-50 text-blue-700 border border-blue-100";

      case "interview":
        return "bg-purple-50 text-purple-700 border border-purple-100";

      case "pending":
        return "bg-yellow-50 text-yellow-700 border border-yellow-100";

      default:
        return "bg-zinc-50 text-zinc-600 border border-zinc-200";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 md:p-5">
      <div className="flex items-center justify-between mb-4 md:mb-5">
        <div>
          <h2 className="text-base md:text-lg font-bold text-zinc-800">
            Recent Applications
          </h2>

          <p className="text-xs md:text-sm text-zinc-500 mt-0.5">
            Latest candidates
          </p>
        </div>

        <button
          onClick={() => navigate("/employer/applicants")}
          className="flex items-center gap-1 text-xs md:text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition"
        >
          View All
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="space-y-2 md:space-y-2.5">
        {recentApplications?.slice(0,5).map((app) => (
          <div
            key={app._id}
            className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-zinc-50 transition cursor-pointer border border-transparent hover:border-zinc-100"
          >
            <div className="flex items-center gap-3 min-w-0">
              {app?.candidate?.photo ? (
                <img
                  src={app.candidate.photo}
                  alt={app?.candidate?.fullname || "Candidate"}
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                  {app?.candidate?.fullname?.split(" ").map((name) => name[0]).join("").toUppercase()}
                </div>
              )}


              <div className="min-w-0">
                <p className="text-sm md:text-[15px] font-semibold text-zinc-800 truncate flex items-center gap-1">
                  {app?.candidate?.fullname}
                </p>

                <p className="text-[11px] md:text-xs text-zinc-500 truncate">
                  {app?.job?.jobTitle}
                </p>

                <p className="text-[10px] md:text-[11px] text-zinc-400 mt-0.5">
                  {dayjs(app?.createdAt).format("MMM DD, YYYY")}
                </p>
              </div>
            </div>

            <span
              className={`inline-flex px-2.5 py-1 rounded-full text-[10px] md:text-[11px] font-semibold whitespace-nowrap ${appStatusColor(
                app?.status,
              )}`}
            >
              {app?.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentApplications;

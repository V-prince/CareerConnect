import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import dayjs from "dayjs"
import { ChevronRight, MoreVertical } from "lucide-react";

const RecentJobs = ({ recentJobs, navigate }) => {
  const statusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-50 text-green-700 border border-green-100";

      case "paused":
        return "bg-orange-50 text-orange-700 border border-orange-100";

      case "closed":
        return "bg-zinc-50 text-zinc-600 border border-zinc-200";

      default:
        return "bg-blue-50 text-blue-700";
    }
  };

  return (
    <div className="xl:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm">
      <div className="flex items-center justify-between p-4 md:p-5 border-b border-zinc-100">
        <div>
          <h2 className="text-base md:text-lg font-bold text-zinc-800">
            Recent Job Postings
          </h2>

          <p className="text-xs md:text-sm text-zinc-500 mt-0.5">
            Manage your recently posted jobs
          </p>
        </div>

        <button
          onClick={() => navigate("/employer/jobs")}
          className="flex items-center gap-1 text-xs md:text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition"
        >
          View All Jobs
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-100 bg-zinc-50/50">
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase text-zinc-500">
                Job Title
              </th>

              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase text-zinc-500">
                Applications
              </th>

              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase text-zinc-500">
                Status
              </th>

              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase text-zinc-500">
                Posted On
              </th>
            </tr>
          </thead>

          <tbody>
            {recentJobs?.map((job) => (
              <tr
                key={job._id}
                className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <FaBriefcase size={13} />
                    </div>

                    <div>
                      <p className="font-semibold text-sm md:text-[15px] text-zinc-800">
                        {job?.jobTitle}
                      </p>

                      <p className="text-[11px] md:text-xs text-zinc-500 mt-0.5 flex items-center gap-1">
                        {job?.jobType} •
                        <FaMapMarkerAlt size={9} />
                        {job?.location}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <FaUsers size={12} className="text-zinc-400" />

                    <span className="font-medium text-sm text-zinc-700">
                      {job?.applications || 0}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-[11px] font-semibold ${statusColor(
                      job?.status,
                    )}`}
                  >
                    {job?.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-xs md:text-sm text-zinc-500">
                  {dayjs(job?.createdAt).format("MMM DD,  YYYY")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentJobs;

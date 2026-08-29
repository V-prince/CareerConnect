import React from "react";
import { MapPin, Pencil, Eye, Trash2, BriefcaseBusiness } from "lucide-react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

const StatusBadge = ({ status }) => {
  const styles = {
    open: "bg-green-50 text-green-600",
    close: "bg-zinc-100 text-zinc-600",
    expired: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
        styles[status] || "bg-zinc-100 text-zinc-600"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "open"
            ? "bg-green-500"
            : status === "expired"
              ? "bg-red-500"
              : "bg-zinc-400"
        }`}
      />

      {status}
    </span>
  );
};

const EmpJobsTable = ({ currentJobs, onEdit, onView, onDelete }) => {
  dayjs.extend(relativeTime);
  return (
    <div className="bg-white border border-zinc-200 border-t-0 overflow-x-auto">
      <table className="w-full min-w-[1050px]">
        <thead>
          <tr className="border-b border-zinc-200">
            <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
              Job Title
            </th>

            <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
              Department
            </th>

            <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
              Location
            </th>

            <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
              Applications
            </th>

            <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
              Status
            </th>

            <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
              Posted On
            </th>

            <th className="text-center px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {currentJobs.length > 0 ? (
            currentJobs.map((job) => (
              <tr
                key={job._id}
                className="border-b border-zinc-100 hover:bg-zinc-50 transition"
              >
                <td className="px-5 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <BriefcaseBusiness size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-600">
                        {job.jobTitle}
                      </p>

                      <p className="text-xs text-zinc-500 mt-1">
                        {job.jobType} • {job.experienceLevel}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-5">
                  <p className="text-sm text-zinc-700">{job.department}</p>
                </td>

                <td className="px-5 py-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-zinc-500" />

                      <span className="text-sm text-zinc-700">
                        {job.location}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-500 ml-5">{job.mode}</p>
                  </div>
                </td>

                <td className="px-5 py-5">
                  <p className="text-sm font-medium text-zinc-700">
                    {job.applications || 0}
                  </p>
                </td>

                <td className="px-5 py-5">
                  <StatusBadge status={job.status} />
                </td>

                <td className="px-5 py-5">
                  <p className="text-sm text-zinc-700">{dayjs(job.createdAt).format("DD MMM YYYY")}</p>

                  <p className="text-xs text-zinc-500 mt-1">
                    {dayjs(job.createdAt).fromNow()} 
                  </p>
                </td>

                <td className="px-5 py-5">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => onEdit(job)}
                      title="Edit Job"
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 text-blue-600 hover:bg-blue-50 transition"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => onView(job)}
                      title="View Job"
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-100 transition"
                    >
                      <Eye size={17} />
                    </button>

                    <button
                      onClick={() => onDelete(job)}
                      title="Delete Job"
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 text-red-500 hover:bg-red-50 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="px-5 py-16 text-center">
                <p className="text-base font-semibold text-zinc-800">
                  No jobs found
                </p>

                <p className="text-sm text-zinc-500 mt-1">
                  Try changing your search or filters.
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmpJobsTable;

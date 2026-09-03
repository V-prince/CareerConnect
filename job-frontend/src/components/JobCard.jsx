import dayjs from "dayjs";
import { Calendar, ChevronRight, MapPin } from "lucide-react";
import React from "react";

export const JobCard = ({ setSelectDetails, job }) => {

  const statusClass = {
    new: "text-orange-600 bg-orange-100",
    pending: "text-yellow-700 bg-yellow-100",
    shortlisted: "text-green-700 bg-green-100",
    interview: "text-purple-700 bg-purple-100",
    rejected: "text-red-700 bg-red-100",
    hired: "text-emerald-700 bg-emerald-100",

  };



  return (
    <div
      onClick={() => setSelectDetails(job)}
      className="bg-white border border-zinc-200 rounded-xl hover:bg-zinc-50 transition cursor-pointer"
    >
      <div className="flex items-center justify-between  p-5">
        <div className="flex items-center gap-5">
          <img
            src={job?.job?.company?.logo}
            alt={job?.job?.company?.companyName}
            className="w-12 h-12 object-contain flex-shrink-0"
          />

          <div className="space-y-1">
            <h3 className="font-semibold text-base">{job?.job?.jobTitle}</h3>

            <p className="text-sm text-zinc-500">{job?.job?.company?.companyName}</p>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={15} />
              {job?.job?.location}
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Calendar size={15} />
              {dayjs(job?.job?.createdAt).format("DD MMM YYYY")}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold capitalize
                  ${statusClass[job?.status?.toLowerCase()] ||
              "text-zinc-600 bg-zinc-100"
              }`}
          >
            {job?.status}
          </span>

          <ChevronRight size={20} className="text-zinc-500" />
        </div>
      </div>
    </div>
  );
};

import { Calendar, ChevronRight, MapPin } from 'lucide-react'
import React from 'react'

export const JobCard = ({setSelectDetails,job}) => {
  return (
    <div

      onClick={() => setSelectDetails(job)}
      className="bg-white border border-zinc-200 rounded-xl hover:bg-zinc-50 transition cursor-pointer"
    >
      <div className="flex items-center justify-between  p-5">

        <div className="flex items-center gap-5">
          <img
            src={job.icon}
            alt={job.companey}
            className="w-12 h-12 object-contain flex-shrink-0"
          />

          <div className="space-y-1">
            <h3 className="font-semibold text-base">
              {job.title}
            </h3>

            <p className="text-sm text-zinc-500">
              {job.companey}
            </p>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={15} />
              {job.city}, {job.state}
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Calendar size={15} />
              {job.date}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${job.status.toLowerCase() === "under review"
                ? "bg-indigo-100 text-indigo-600"
                : job.status.toLowerCase() === "applied"
                  ? "bg-orange-100 text-orange-600"
                  : "bg-green-100 text-green-600"
              }`}
          >
            {job.status}
          </span>

          <ChevronRight
            size={20}
            className="text-zinc-500"
          />
        </div>

      </div>
    </div>
  )
}

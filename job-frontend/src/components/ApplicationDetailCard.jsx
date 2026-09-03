import React from 'react'
import { MapPin, X } from 'lucide-react'
import dayjs from 'dayjs'
export const ApplicationDetailCard = ({ selectDetails, setSelectDetails }) => {


  const formatSalary = (minSalary, maxSalary, salaryPeriod = "yearly") => {

    const format = (salary) => {
      if (salary >= 10000000) {
        return `${(salary / 10000000).toFixed(0)} Cr`;
      }

      if (salary >= 100000) {
        return `${(salary / 100000).toFixed(0)} L`;
      }

      if (salary >= 1000) {
        return `${(salary / 1000).toFixed(0)}K`;
      }

      return salary;
    };

    if (minSalary && maxSalary) {
      return `₹${format(minSalary)} - ₹${format(maxSalary)} / ${salaryPeriod}`;
    }

    if (minSalary) {
      return `₹${format(minSalary)}+ / ${salaryPeriod}`;
    }

    if (maxSalary) {
      return `Up to ₹${format(maxSalary)} / ${salaryPeriod}`;
    }

    return "Based on Performance";
  };



  const statusClass = {
    new: "text-orange-600 bg-orange-100",
    pending: "text-yellow-700 bg-yellow-100",
    shortlisted: "text-green-700 bg-green-100",
    interview: "text-purple-700 bg-purple-100",
    rejected: "text-red-700 bg-red-100",
    hired: "text-emerald-700 bg-emerald-100",

  };

  return (
    <div className={`flex-1 xl:w-[55%] transition-all duration-300 ${selectDetails
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-5 pointer-events-none"}`}>


      <div className="bg-white border border-zinc-200 rounded-xl p-6">

        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-xl font-semibold">
            Application Details
          </h2>

          <button onClick={() => setSelectDetails(null)} className='cursor-pointer'>
            <X size={20} />
          </button>
        </div>

        <div className="flex items-center gap-4 py-6 border-b">

          <img
            src={selectDetails?.job?.company?.logo}
            className="w-12 h-12 object-contain"
          />

          <div>
            <h3 className="font-semibold text-lg">
              {selectDetails?.job?.jobTitle}
            </h3>

            <p className="text-zinc-500">
              {selectDetails?.job?.company?.companyName}
            </p>

            <div className="flex items-center gap-2 text-sm text-zinc-500 mt-1">
              <MapPin size={15} />
              {selectDetails?.job?.company?.location}
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          <div>
            <p className="text-sm text-zinc-500">
              Job Type
            </p>

            <p className="font-medium">
              {selectDetails?.job?.jobType}
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Applied Date
            </p>

            <p className="font-medium">
              {dayjs(selectDetails?.createdAt).format("DD MMM YYYY")}
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Status
            </p>


            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold capitalize
                  ${statusClass[selectDetails?.status?.toLowerCase()] ||
                "text-zinc-600 bg-zinc-100"
                }`}
            >
              {selectDetails?.status}
            </span>

          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Salary
            </p>

            <p className="font-medium">
              {formatSalary(selectDetails?.job?.minSalary, selectDetails?.job?.maxSalary, selectDetails?.job?.salaryPeriod)}
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

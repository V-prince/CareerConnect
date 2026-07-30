import React from 'react'
import {MapPin, X } from 'lucide-react'
export const ApplicationDetailCard = ({selectDetails}) => {
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
            src={selectDetails.icon}
            className="w-12 h-12 object-contain"
          />

          <div>
            <h3 className="font-semibold text-lg">
              {selectDetails.title}
            </h3>

            <p className="text-zinc-500">
              {selectDetails.companey}
            </p>

            <div className="flex items-center gap-2 text-sm text-zinc-500 mt-1">
              <MapPin size={15} />
              {selectDetails.city}, {selectDetails.state}
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          <div>
            <p className="text-sm text-zinc-500">
              Job Type
            </p>

            <p className="font-medium">
              Internship
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Applied Date
            </p>

            <p className="font-medium">
              25 July 2026
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Status
            </p>

            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
              Under Review
            </span>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Salary
            </p>

            <p className="font-medium">
              ₹40,000 / month
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

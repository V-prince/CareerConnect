import React from "react";
import { MapPin, CalendarDays, Users, BriefcaseBusiness } from "lucide-react";

const EmpCompanyOverview = ({ company = {} }) => {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-5 md:p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-32 h-32 rounded-xl bg-zinc-900 flex items-center justify-center shrink-0">
          {company?.logo ? (
            <img
              src={company?.logo}
              alt={company?.companyName || "Company"}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <span className="text-white text-4xl font-bold">
              {company?.companyName?.charAt(0) || "T"}
            </span>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-2xl font-bold text-zinc-900">
              {company?.companyName || "Company Name"}
            </h2>
          </div>

          <p className="text-zinc-500 mt-2">
            {company?.industry || "Industry not added"}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm text-zinc-600">
            <div className="flex items-center gap-1.5">
              <MapPin size={16} />
              <span>{company?.location || "Location not added"}</span>
            </div>

            <span className="hidden md:block text-zinc-300">|</span>

            <div className="flex items-center gap-1.5">
              <CalendarDays size={16} />
              <span>Founded {company?.founded || "Not added"}</span>
            </div>

            <span className="hidden md:block text-zinc-300">|</span>

            <div className="flex items-center gap-1.5">
              <Users size={16} />
              <span>{company?.size || "Company size not added"}</span>
            </div>
          </div>

          {company?.website && (
            <a
              href={company?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              {company?.website}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpCompanyOverview;

import React from "react";

const EmpCompanyAbout = ({ company }) => {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-5 md:p-6">
      <h2 className="text-lg font-semibold text-zinc-900">About Company</h2>

      <p className="text-sm md:text-base text-zinc-600 leading-7 mt-6">
        {company?.about || "No company information provided."}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mt-7">
        <div>
          <p className="text-sm font-semibold text-zinc-900">Company Type</p>
          <p className="text-sm text-zinc-500 mt-1">
            {company?.companyType || "Not provided"}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-900">Industry</p>
          <p className="text-sm text-zinc-500 mt-1">
            {company?.industry || "Not provided"}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-900">
            Registration Number
          </p>
          <p className="text-sm text-zinc-500 mt-1">
            {company?.registrationNumber || "Not provided"}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-900">Phone</p>
          <p className="text-sm text-zinc-500 mt-1">
            {company?.phone || "Not provided"}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-900">Email</p>
          <p className="text-sm text-blue-600 mt-1">
            {company?.email || "Not provided"}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-900">Website</p>
          <p className="text-sm text-zinc-500 mt-1">
            {company?.website || "Not provided"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmpCompanyAbout;

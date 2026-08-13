import React from "react";

const EmpCompanyAbout = ({ company }) => {
  return (
    <section className="bg-white border border-zinc-200 rounded-xl p-5 md:p-6">
      <h2 className="text-lg font-semibold text-zinc-900">About Company</h2>

      <p className="text-sm md:text-base text-zinc-700 leading-7 mt-5">
        {company.about}
      </p>

      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mt-6">
        <div>
          <p className="text-sm font-semibold text-zinc-800">Company Type</p>

          <p className="text-sm text-zinc-500 mt-1.5">{company.companyType}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-800">Industry</p>

          <p className="text-sm text-zinc-500 mt-1.5">Information Technology</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-800">
            Registration Number
          </p>

          <p className="text-sm text-zinc-500 mt-1.5">
            {company.registrationNumber}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-800">Phone</p>

          <p className="text-sm text-zinc-500 mt-1.5">{company.phone}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-800">Email</p>

          <a
            href={`mailto:${company.email}`}
            className="inline-block text-sm text-blue-600 mt-1.5 hover:text-blue-700"
          >
            {company.email}
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-800">Website</p>

          <a
            href={company.website}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-sm text-zinc-500 mt-1.5 hover:text-blue-600"
          >
            {company.website}
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmpCompanyAbout;

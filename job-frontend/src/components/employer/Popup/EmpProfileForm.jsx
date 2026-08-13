import React from "react";

const industryOptions = [
  "Information Technology",
  "Software Development",
  "Technology • Software Development",
  "Fintech",
  "Education",
  "E-commerce",
  "Marketing & Advertising",
  "Finance",
];

const companyTypeOptions = ["Private Limited", "Public Limited"];

const companySizeOptions = [
  "1-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

const EmpProfileForm = ({ formData, errors, onChange }) => {
  const inputClass = (field) =>
    `w-full h-11 px-3.5 rounded-lg border bg-white text-sm text-zinc-700 outline-none transition ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-zinc-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    }`;

  const availableIndustryOptions =
    formData.industry && !industryOptions.includes(formData.industry)
      ? [formData.industry, ...industryOptions]
      : industryOptions;

  return (
    <>
      <div className="mb-7">
        <h3 className="text-base font-semibold text-zinc-900 mb-4">
          Basic Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Company Name *
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              placeholder="Enter company name"
              className={inputClass("name")}
            />

            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Industry *
            </label>

            <select
              name="industry"
              value={formData.industry}
              onChange={onChange}
              className={inputClass("industry")}
            >
              <option value="">Select industry</option>

              {availableIndustryOptions.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>

            {errors.industry && (
              <p className="text-xs text-red-500 mt-1">{errors.industry}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Company Type *
            </label>

            <select
              name="companyType"
              value={formData.companyType}
              onChange={onChange}
              className={inputClass("companyType")}
            >
              <option value="">Select company type</option>

              {companyTypeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            {errors.companyType && (
              <p className="text-xs text-red-500 mt-1">{errors.companyType}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Company Size *
            </label>

            <select
              name="employees"
              value={formData.employees}
              onChange={onChange}
              className={inputClass("employees")}
            >
              <option value="">Select company size</option>

              {companySizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            {errors.employees && (
              <p className="text-xs text-red-500 mt-1">{errors.employees}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Founded Year
            </label>

            <input
              type="number"
              name="founded"
              value={formData.founded}
              onChange={onChange}
              placeholder="e.g. 2020"
              min="1800"
              max="2100"
              className={inputClass("founded")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Registration Number
            </label>

            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={onChange}
              placeholder="Enter registration number"
              className={inputClass("registrationNumber")}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Headquarters / Location *
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={onChange}
              placeholder="e.g. Bengaluru, Karnataka, India"
              className={inputClass("location")}
            />

            {errors.location && (
              <p className="text-xs text-red-500 mt-1">{errors.location}</p>
            )}
          </div>
        </div>
      </div>
      <div className="mb-7">
        <h3 className="text-base font-semibold text-zinc-900 mb-4">
          Contact Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Phone
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onChange}
              placeholder="+91 98765 43210"
              className={inputClass("phone")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Company Email *
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="hr@company.com"
              className={inputClass("email")}
            />

            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Website
            </label>

            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={onChange}
              placeholder="https://example.com"
              className={inputClass("website")}
            />

            {errors.website && (
              <p className="text-xs text-red-500 mt-1">{errors.website}</p>
            )}
          </div>
        </div>
      </div>
      <div className="mb-7">
        <h3 className="text-base font-semibold text-zinc-900 mb-4">
          Company Information
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              About Company
            </label>

            <textarea
              name="about"
              value={formData.about}
              onChange={onChange}
              rows={4}
              placeholder="Tell candidates about your company..."
              className="w-full px-3.5 py-3 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-700 outline-none transition resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Specializations
            </label>

            <input
              type="text"
              name="specializations"
              value={formData.specializations}
              onChange={onChange}
              placeholder="Web Development, Mobile Apps, Cloud Solutions..."
              className={inputClass("specializations")}
            />

            <p className="text-xs text-zinc-500 mt-1">
              Separate specializations using commas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpProfileForm;

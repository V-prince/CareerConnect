import React from "react";
import { ChevronDown, ChevronRight, CalendarDays } from "lucide-react";

const EmpBasicForm = ({ formData, handleChange, handleNext, navigate }) => {
  return (
    <div className="p-5 md:p-7">
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-bold text-zinc-900">
          Basic Information
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Provide the basic details about the job.
        </p>
      </div>

      {/* JOB TITLE */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-zinc-800 mb-2">
          Job Title <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="e.g. Frontend Developer"
          className="w-full h-11 px-3.5 rounded-lg border border-zinc-300 text-sm text-zinc-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
        />
      </div>

      {/* JOB TYPE + EMPLOYMENT TYPE */}
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <SelectField
          label="Job Type"
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          required
          options={[
            "Full Time",
            "Part Time",
            "Internship",
            "Contract",
            "Freelance",
          ]}
          placeholder="Select job type"
        />

        <SelectField
          label="Employment Type"
          name="employmentType"
          value={formData.employmentType}
          onChange={handleChange}
          required
          options={["Permanent", "Temporary", "Contractual"]}
          placeholder="Select employment type"
        />
      </div>

      {/* EXPERIENCE + DEPARTMENT */}
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <SelectField
          label="Experience Level"
          name="experienceLevel"
          value={formData.experienceLevel}
          onChange={handleChange}
          required
          options={[
            "Fresher",
            "0-2 Years",
            "2-5 Years",
            "5-8 Years",
            "8+ Years",
          ]}
          placeholder="Select experience level"
        />

        <SelectField
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          options={[
            "Engineering",
            "Design",
            "Marketing",
            "Sales",
            "Human Resources",
            "Finance",
            "Operations",
          ]}
          placeholder="Select department"
        />
      </div>

      {/* LOCATION */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-zinc-800 mb-2">
          Job Location <span className="text-red-500">*</span>
        </label>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter city, state or remote"
            className="flex-1 w-full h-11 px-3.5 rounded-lg border border-zinc-300 text-sm text-zinc-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />

          <label className="flex items-center gap-2 text-sm text-zinc-700 whitespace-nowrap cursor-pointer">
            <input
              type="checkbox"
              name="remote"
              checked={formData.remote}
              onChange={handleChange}
              className="w-4 h-4 accent-blue-600"
            />
            Remote Position
          </label>
        </div>
      </div>

      {/* SALARY */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-zinc-800 mb-2">
          Salary Range{" "}
          <span className="font-normal text-zinc-400">(Optional)</span>
        </label>

        <div className="grid md:grid-cols-[1fr_auto_1fr_180px] items-center gap-3">
          <input
            type="number"
            name="minSalary"
            value={formData.minSalary}
            onChange={handleChange}
            placeholder="₹ Min"
            className="w-full h-11 px-3.5 rounded-lg border border-zinc-300 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <span className="hidden md:block text-zinc-400">to</span>

          <input
            type="number"
            name="maxSalary"
            value={formData.maxSalary}
            onChange={handleChange}
            placeholder="₹ Max"
            className="w-full h-11 px-3.5 rounded-lg border border-zinc-300 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <SelectField
            name="salaryPeriod"
            value={formData.salaryPeriod}
            onChange={handleChange}
            options={["Per Annum", "Per Month", "Per Week", "Per Hour"]}
            placeholder="Salary period"
            noLabel
          />
        </div>
      </div>

      {/* DEADLINE + OPENINGS */}
      <div className="grid md:grid-cols-2 gap-5 mb-7">
        <div>
          <label className="block text-sm font-semibold text-zinc-800 mb-2">
            Application Deadline{" "}
            <span className="font-normal text-zinc-400">(Optional)</span>
          </label>

          <div className="relative">
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full h-11 px-3.5 pr-10 rounded-lg border border-zinc-300 text-sm text-zinc-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <CalendarDays
              size={17}
              className="absolute right-3 top-3.5 text-zinc-400 pointer-events-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-800 mb-2">
            Number of Openings <span className="text-red-500">*</span>
          </label>

          <input
            type="number"
            min="1"
            name="openings"
            value={formData.openings}
            onChange={handleChange}
            placeholder="e.g. 2"
            className="w-full h-11 px-3.5 rounded-lg border border-zinc-300 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex items-center justify-between gap-3 pt-5 border-t border-zinc-100">
        <button
          type="button"
          onClick={() => navigate("/employer/jobs")}
          className="px-5 py-2.5 rounded-lg border border-zinc-300 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="flex items-center gap-2 px-5 md:px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
        >
          Next: Job Description
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
};

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
  noLabel = false,
}) => {
  return (
    <div>
      {!noLabel && label && (
        <label className="block text-sm font-semibold text-zinc-800 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="appearance-none w-full h-11 px-3.5 pr-10 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          {placeholder && <option value="">{placeholder}</option>}

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="absolute right-3 top-3.5 text-zinc-400 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default EmpBasicForm;

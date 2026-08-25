import React from "react";
import { ChevronRight } from "lucide-react";

const EmpDescForm = ({ formData, handleChange, setStep, handleNext }) => {
  return (
    <div className="p-5 md:p-7">
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-bold text-zinc-900">
          Job Description
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Describe the role, responsibilities, and what the candidate will be
          doing.
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-zinc-700 mb-2">
          Job Description <span className="text-red-500">*</span>
        </label>

        <textarea
          rows={8}
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          placeholder="Write a detailed description of the job..."
          className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
        />
      </div>

      <div className="mb-7">
        <label className="block text-sm font-semibold text-zinc-700 mb-2">
          Roles & Responsibilities <span className="text-red-500">*</span>
        </label>

        <textarea
          rows={8}
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleChange}
          placeholder={`Example:
• Develop and maintain web applications
• Work with the development team
• Write clean and reusable code
• Debug and fix application issues`}
          className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
        />
      </div>

      <div className="flex items-center justify-between gap-3 pt-5 border-t border-zinc-100">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="px-5 py-2.5 rounded-lg border border-zinc-300 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition"
        >
          Previous
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
        >
          Next: Requirements
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
};

export default EmpDescForm;

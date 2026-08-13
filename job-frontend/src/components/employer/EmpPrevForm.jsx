import React from "react";
import { CheckCircle2 } from "lucide-react";

const EmpPrevForm = ({ formData, setStep, handlePublish }) => {
  return (
    <div className="p-5 md:p-7">
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-bold text-zinc-900">
          Preview & Publish
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Review your job details before publishing.
        </p>
      </div>

      {/* BASIC INFORMATION */}
      <PreviewSection title="Basic Information">
        <PreviewRow label="Job Title" value={formData.jobTitle} />

        <PreviewRow label="Job Type" value={formData.jobType} />

        <PreviewRow label="Employment Type" value={formData.employmentType} />

        <PreviewRow label="Experience Level" value={formData.experienceLevel} />

        <PreviewRow
          label="Department"
          value={formData.department || "Not specified"}
        />

        <PreviewRow
          label="Location"
          value={
            formData.remote
              ? `${formData.location} (Remote)`
              : formData.location
          }
        />

        <PreviewRow
          label="Salary"
          value={
            formData.minSalary || formData.maxSalary
              ? `₹${formData.minSalary || "0"} - ₹${
                  formData.maxSalary || "0"
                } ${formData.salaryPeriod}`
              : "Not specified"
          }
        />

        <PreviewRow
          label="Application Deadline"
          value={formData.deadline || "Not specified"}
        />

        <PreviewRow label="Number of Openings" value={formData.openings} />
      </PreviewSection>

      {/* DESCRIPTION */}
      <PreviewSection title="Job Description">
        <p className="text-sm text-zinc-600 leading-7 whitespace-pre-line">
          {formData.jobDescription}
        </p>
      </PreviewSection>

      {/* RESPONSIBILITIES */}
      <PreviewSection title="Roles & Responsibilities">
        <p className="text-sm text-zinc-600 leading-7 whitespace-pre-line">
          {formData.responsibilities}
        </p>
      </PreviewSection>

      {/* SKILLS */}
      <PreviewSection title="Required Skills">
        <PreviewItems items={formData.skills} />
      </PreviewSection>

      {/* QUALIFICATIONS */}
      <PreviewSection title="Qualifications">
        <PreviewItems items={formData.qualifications} />
      </PreviewSection>

      {/* REQUIREMENTS */}
      <PreviewSection title="Job Requirements">
        <PreviewItems items={formData.requirements} />
      </PreviewSection>

      {/* ACTIONS */}
      <div className="flex items-center justify-between gap-3 pt-5 border-t border-zinc-100">
        <button
          type="button"
          onClick={() => setStep(3)}
          className="px-5 py-2.5 rounded-lg border border-zinc-300 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition"
        >
          Previous
        </button>

        <button
          type="button"
          onClick={handlePublish}
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition"
        >
          <CheckCircle2 size={17} />
          Publish Job
        </button>
      </div>
    </div>
  );
};

const PreviewSection = ({ title, children }) => {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-base font-bold text-zinc-900 mb-3">{title}</h3>

      <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
};

const PreviewRow = ({ label, value }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-zinc-200 last:border-0">
      <span className="text-xs font-semibold text-zinc-500 sm:w-40">
        {label}
      </span>

      <span className="text-sm text-zinc-800">{value}</span>
    </div>
  );
};

const PreviewItems = ({ items }) => {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="flex items-start gap-2 text-sm text-zinc-700"
        >
          <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default EmpPrevForm;

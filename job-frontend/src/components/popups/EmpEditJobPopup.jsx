import React, { useEffect, useState } from "react";
import { X, CheckCircle2, ChevronDown, CalendarDays } from "lucide-react";

const EmpEditJobPopup = ({ isOpen, job, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    employmentType: "",
    experience: "",
    department: "",
    location: "",
    remote: false,
    minSalary: "",
    maxSalary: "",
    salaryPeriod: "",
    deadline: "",
    openings: "",
    description: "",
    responsibilities: "",
    skills: [],
    qualifications: [],
    requirements: [],
  });

  useEffect(() => {
    if (job) {
      setFormData({
        title: job.title || "",
        type: job.jobType || "",
        employmentType: job.employmentType || "",
        experience: job.experience || "",
        department: job.department || "",
        location: job.location || "",
        remote: job.remote || false,

        minSalary: job.minSalary || "",
        maxSalary: job.maxSalary || "",
        salaryPeriod: job.salaryPeriod || "",

        deadline: job.deadline || "",
        openings: job.openings || "",

        description: job.description || "",
        responsibilities: job.responsibilities || "",

        skills: Array.isArray(job.skills) ? job.skills : [],
        qualifications: Array.isArray(job.qualifications)
          ? job.qualifications
          : [],
        requirements: Array.isArray(job.requirements) ? job.requirements : [],
      });
    }
  }, [job]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !job) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    onSave({
      ...job,

      title: formData.title,
      type: formData.type,
      jobType: formData.type,

      employmentType: formData.employmentType,

      experience: formData.experience,
      experienceLevel: formData.experience,

      department: formData.department,

      location: formData.location,
      remote: formData.remote,
      mode: formData.remote ? "Remote" : "On-site",

      minSalary: formData.minSalary,
      maxSalary: formData.maxSalary,
      salaryPeriod: formData.salaryPeriod,

      deadline: formData.deadline,
      openings: formData.openings,

      description: formData.description,
      jobDescription: formData.description,

      responsibilities: formData.responsibilities,
      skills: formData.skills,
      qualifications: formData.qualifications,
      requirements: formData.requirements,
    });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-zinc-200 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-zinc-200 bg-white shrink-0">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-zinc-900">
              Edit Job
            </h2>

            <p className="text-sm text-zinc-500 mt-1">
              Update the job information below.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 md:px-6 py-5">
          <div className="grid md:grid-cols-2 gap-5">
            <FormField
              label="Job Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter job title"
            />

            <SelectField
              label="Job Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
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
              options={["Permanent", "Temporary", "Contractual"]}
              placeholder="Select employment type"
            />

            <SelectField
              label="Experience Level"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
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

            <FormField
              label="Job Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter city, state or remote"
            />
          </div>

          <div className="mt-4">
            <label className="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
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

          <div className="mt-5">
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Salary Range
            </label>

            <div className="grid md:grid-cols-[1fr_auto_1fr_180px] items-center gap-3">
              <input
                type="number"
                name="minSalary"
                value={formData.minSalary}
                onChange={handleChange}
                placeholder="₹ Min"
                className="w-full h-10 px-3 rounded-lg border border-zinc-300 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <span className="hidden md:block text-zinc-400">to</span>

              <input
                type="number"
                name="maxSalary"
                value={formData.maxSalary}
                onChange={handleChange}
                placeholder="₹ Max"
                className="w-full h-10 px-3 rounded-lg border border-zinc-300 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">
                Application Deadline
              </label>

              <div className="relative">
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full h-10 px-3 pr-10 rounded-lg border border-zinc-300 text-sm text-zinc-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <CalendarDays
                  size={17}
                  className="absolute right-3 top-3 text-zinc-400 pointer-events-none"
                />
              </div>
            </div>

            <FormField
              label="Number of Openings"
              name="openings"
              value={formData.openings}
              onChange={handleChange}
              placeholder="e.g. 2"
              type="number"
            />
          </div>

          <TextAreaField
            label="Job Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the job..."
          />

          <TextAreaField
            label="Roles & Responsibilities"
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            placeholder="Enter responsibilities..."
          />

          <TagSection
            title="Required Skills"
            items={formData.skills}
            setItems={(items) =>
              setFormData((prev) => ({
                ...prev,
                skills: items,
              }))
            }
          />

          <TagSection
            title="Qualifications"
            items={formData.qualifications}
            setItems={(items) =>
              setFormData((prev) => ({
                ...prev,
                qualifications: items,
              }))
            }
          />

          <TagSection
            title="Job Requirements"
            items={formData.requirements}
            setItems={(items) =>
              setFormData((prev) => ({
                ...prev,
                requirements: items,
              }))
            }
          />
        </div>

        <div className="flex items-center justify-between gap-3 px-5 md:px-6 py-4 border-t border-zinc-200 bg-white shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-zinc-300 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
          >
            <CheckCircle2 size={17} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const FormField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-semibold text-zinc-700 mb-2">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-10 rounded-lg border border-zinc-300 px-3 text-sm text-zinc-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
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
  noLabel = false,
}) => {
  return (
    <div>
      {!noLabel && label && (
        <label className="block text-sm font-semibold text-zinc-700 mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="appearance-none w-full h-10 px-3 pr-9 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
          className="absolute right-3 top-3 text-zinc-400 pointer-events-none"
        />
      </div>
    </div>
  );
};

const TextAreaField = ({ label, name, value, onChange, placeholder }) => {
  return (
    <div className="mt-5">
      <label className="block text-sm font-semibold text-zinc-700 mb-2">
        {label}
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
        placeholder={placeholder}
        className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-y"
      />
    </div>
  );
};

const TagSection = ({ title, items, setItems }) => {
  const [input, setInput] = useState("");

  const addItem = () => {
    const value = input.trim();

    if (!value) return;

    setItems([...items, value]);
    setInput("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-5">
      <label className="block text-sm font-semibold text-zinc-700 mb-2">
        {title}
      </label>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addItem();
            }
          }}
          placeholder={`Add ${title.toLowerCase()}...`}
          className="flex-1 h-10 rounded-lg border border-zinc-300 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={addItem}
          className="px-4 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {items.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium"
            >
              {item}

              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-blue-400 hover:text-red-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmpEditJobPopup;

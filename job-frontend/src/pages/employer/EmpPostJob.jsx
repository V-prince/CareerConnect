import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  CalendarDays,
  BriefcaseBusiness,
  CheckCircle2,
  Plus,
  X,
  UsersRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EmpPostJob = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobType: "",
    employmentType: "",
    experienceLevel: "",
    department: "",
    location: "",
    remote: false,
    minSalary: "",
    maxSalary: "",
    salaryPeriod: "Per Annum",
    deadline: "",
    openings: "",

    jobDescription: "",
    responsibilities: "",

    skills: [],
    qualifications: [],
    requirements: [],
  });

  const [skillInput, setSkillInput] = useState("");
  const [qualificationInput, setQualificationInput] = useState("");
  const [requirementInput, setRequirementInput] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* ADD SKILL */

  const addSkill = () => {
    const value = skillInput.trim();

    if (!value) return;

    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, value],
    }));

    setSkillInput("");
  };

  /* ADD QUALIFICATION */

  const addQualification = () => {
    const value = qualificationInput.trim();

    if (!value) return;

    setFormData((prev) => ({
      ...prev,
      qualifications: [...prev.qualifications, value],
    }));

    setQualificationInput("");
  };

  /* ADD REQUIREMENT */

  const addRequirement = () => {
    const value = requirementInput.trim();

    if (!value) return;

    setFormData((prev) => ({
      ...prev,
      requirements: [...prev.requirements, value],
    }));

    setRequirementInput("");
  };

  /* REMOVE ITEM */

  const removeSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const removeQualification = (index) => {
    setFormData((prev) => ({
      ...prev,
      qualifications: prev.qualifications.filter((_, i) => i !== index),
    }));
  };

  const removeRequirement = (index) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index),
    }));
  };

  /* STEP 1 VALIDATION */

  const handleNextFromStep1 = () => {
    if (!formData.jobTitle.trim()) {
      alert("Please enter a job title.");
      return;
    }

    if (!formData.jobType) {
      alert("Please select a job type.");
      return;
    }

    if (!formData.employmentType) {
      alert("Please select an employment type.");
      return;
    }

    if (!formData.experienceLevel) {
      alert("Please select an experience level.");
      return;
    }

    if (!formData.location.trim()) {
      alert("Please enter a job location.");
      return;
    }

    if (!formData.openings) {
      alert("Please enter the number of openings.");
      return;
    }

    setStep(2);
  };

  /* STEP 2 VALIDATION*/

  const handleNextFromStep2 = () => {
    if (!formData.jobDescription.trim()) {
      alert("Please enter the job description.");
      return;
    }

    if (!formData.responsibilities.trim()) {
      alert("Please enter the roles and responsibilities.");
      return;
    }

    setStep(3);
  };

  /* STEP 3 VALIDATION */

  const handleNextFromStep3 = () => {
    if (formData.skills.length === 0) {
      alert("Please add at least one required skill.");
      return;
    }

    if (formData.qualifications.length === 0) {
      alert("Please add at least one qualification.");
      return;
    }

    if (formData.requirements.length === 0) {
      alert("Please add at least one job requirement.");
      return;
    }

    setStep(4);
  };

  /* PUBLISH */

  const handlePublish = () => {
    console.log("Job Data:", formData);

    alert("Job published successfully!");

    navigate("/employer/jobs");
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-end">
          {/* PROFILE */}

          <div
            onClick={() => navigate("/employer/profile")}
            className="flex items-center gap-2 md:gap-3 cursor-pointer rounded-xl px-2 py-1.5 hover:bg-zinc-50 transition"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
              T
            </div>

            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-semibold text-zinc-800">
                TechSolutions Inc.
              </p>

              <p className="text-[11px] text-zinc-500 mt-0.5">Employer</p>
            </div>

            <ChevronDown size={16} className="text-zinc-500 hidden sm:block" />
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
        {/* PAGE HEADER */}

        <div className="mb-7">
          <div className="flex items-center gap-2 text-xs md:text-sm mb-3">
            <button
              onClick={() => navigate("/employer/dashboard")}
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              Dashboard
            </button>

            <ChevronRight size={14} className="text-zinc-400" />

            <button
              onClick={() => navigate("/employer/jobs")}
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              Jobs
            </button>

            <ChevronRight size={14} className="text-zinc-400" />

            <span className="text-zinc-500">Post New Job</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-zinc-900">
            Post a New Job
          </h1>

          <p className="text-sm md:text-base text-zinc-500 mt-1">
            Fill in the details below to create a new job listing.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 md:p-5 mb-8 overflow-x-auto">
          <div className="min-w-[700px] flex items-start">
            {/* STEP 1 */}

            <StepItem
              number={1}
              title="Job Details"
              description="Basic information"
              currentStep={step}
              line={true}
              nextStep={2}
            />

            {/* STEP 2 */}

            <StepItem
              number={2}
              title="Job Description"
              description="Roles & responsibilities"
              currentStep={step}
              line={true}
              nextStep={3}
            />

            {/* STEP 3 */}

            <StepItem
              number={3}
              title="Requirements"
              description="Skills & experience"
              currentStep={step}
              line={true}
              nextStep={4}
            />

            {/* STEP 4 */}

            <StepItem
              number={4}
              title="Preview & Publish"
              description="Review and post"
              currentStep={step}
              line={false}
            />
          </div>
        </div>

        <div className="grid xl:grid-cols-[minmax(0,1fr)_300px] gap-6">
          {/* FORM */}

          <div className="bg-white border border-zinc-200 rounded-xl shadow-sm">
            {/* STEP 1 */}

            {step === 1 && (
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
                    <span className="font-normal text-zinc-400">
                      (Optional)
                    </span>
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
                      options={[
                        "Per Annum",
                        "Per Month",
                        "Per Week",
                        "Per Hour",
                      ]}
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
                      <span className="font-normal text-zinc-400">
                        (Optional)
                      </span>
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

                <div className="flex items-center justify-end pt-5 border-t border-zinc-100">
                  <button
                    onClick={handleNextFromStep1}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
                  >
                    Next: Job Description
                    <ChevronRight size={17} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}

            {step === 2 && (
              <div className="p-5 md:p-7">
                <div className="mb-6">
                  <h2 className="text-lg md:text-xl font-bold text-zinc-900">
                    Job Description
                  </h2>

                  <p className="text-sm text-zinc-500 mt-1">
                    Describe the role, responsibilities, and what the candidate
                    will be doing.
                  </p>
                </div>

                {/* JOB DESCRIPTION */}

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

                {/* RESPONSIBILITIES */}

                <div className="mb-7">
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">
                    Roles & Responsibilities{" "}
                    <span className="text-red-500">*</span>
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

                {/* ACTIONS */}

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
                    onClick={handleNextFromStep2}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
                  >
                    Next: Requirements
                    <ChevronRight size={17} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}

            {step === 3 && (
              <div className="p-5 md:p-7">
                <div className="mb-6">
                  <h2 className="text-lg md:text-xl font-bold text-zinc-900">
                    Requirements
                  </h2>

                  <p className="text-sm text-zinc-500 mt-1">
                    Add the skills, qualifications, and requirements needed for
                    this position.
                  </p>
                </div>

                {/* REQUIRED SKILLS */}

                <RequirementList
                  title="Required Skills"
                  description="Add the technical or professional skills candidates should have."
                  placeholder="e.g. React.js"
                  inputValue={skillInput}
                  setInputValue={setSkillInput}
                  items={formData.skills}
                  onAdd={addSkill}
                  onRemove={removeSkill}
                  required
                />

                {/* QUALIFICATIONS */}

                <RequirementList
                  title="Qualifications"
                  description="Add the educational qualifications or certifications required."
                  placeholder="e.g. Bachelor's degree in Computer Science"
                  inputValue={qualificationInput}
                  setInputValue={setQualificationInput}
                  items={formData.qualifications}
                  onAdd={addQualification}
                  onRemove={removeQualification}
                  required
                />

                {/* JOB REQUIREMENTS */}

                <RequirementList
                  title="Job Requirements"
                  description="Add other requirements candidates should meet."
                  placeholder="e.g. Good communication skills"
                  inputValue={requirementInput}
                  setInputValue={setRequirementInput}
                  items={formData.requirements}
                  onAdd={addRequirement}
                  onRemove={removeRequirement}
                  required
                />

                {/* ACTIONS */}

                <div className="flex items-center justify-between gap-3 pt-5 border-t border-zinc-100">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-lg border border-zinc-300 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition"
                  >
                    Previous
                  </button>

                  <button
                    type="button"
                    onClick={handleNextFromStep3}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
                  >
                    Next: Preview & Publish
                    <ChevronRight size={17} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 */}

            {step === 4 && (
              <div className="p-5 md:p-7">
                <div className="mb-6">
                  <h2 className="text-lg md:text-xl font-bold text-zinc-900">
                    Preview & Publish
                  </h2>

                  <p className="text-sm text-zinc-500 mt-1">
                    Review your job details before publishing.
                  </p>
                </div>

                {/* JOB BASIC INFO */}

                <PreviewSection title="Basic Information">
                  <PreviewRow label="Job Title" value={formData.jobTitle} />

                  <PreviewRow label="Job Type" value={formData.jobType} />

                  <PreviewRow
                    label="Employment Type"
                    value={formData.employmentType}
                  />

                  <PreviewRow
                    label="Experience Level"
                    value={formData.experienceLevel}
                  />

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

                  <PreviewRow
                    label="Number of Openings"
                    value={formData.openings}
                  />
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
            )}
          </div>

          {/* RIGHT INFORMATION */}

          <div className="space-y-5">
            {/* TIPS */}

            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-zinc-900">
                Tips for a Great Job Post
              </h3>

              <div className="mt-5 space-y-5">
                <TipItem
                  icon={<BriefcaseBusiness size={17} />}
                  title="Be Clear & Specific"
                  text="Use a clear job title and specific role description."
                />

                <TipItem
                  icon={<UsersRound size={17} />}
                  title="Highlight Benefits"
                  text="Mention perks and benefits to attract better candidates."
                />

                <TipItem
                  icon={<CheckCircle2 size={17} />}
                  title="Set Right Expectations"
                  text="Include required skills and experience levels."
                />

                <TipItem
                  icon={<CheckCircle2 size={17} />}
                  title="Review Before Posting"
                  text="Double-check all details before publishing."
                />
              </div>
            </div>

            {/* WHY POST */}

            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-zinc-900">Why Post a Job?</h3>

              <div className="mt-5 space-y-4">
                <BenefitItem text="Reach qualified candidates actively looking for jobs" />

                <BenefitItem text="Get applications from verified job seekers" />

                <BenefitItem text="Manage all applications in one place" />

                <BenefitItem text="Shortlist and hire the best talent faster" />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER NOTE */}

        <div className="flex items-center gap-2 mt-5 text-xs md:text-sm text-zinc-500">
          <CheckCircle2 size={16} className="text-zinc-500" />
          Your job information will be published after you click "Publish Job".
        </div>
      </main>
    </div>
  );
};

/* STEP ITEM */

const StepItem = ({ number, title, description, currentStep, line }) => {
  return (
    <div className="flex-1">
      <div className="flex items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
            currentStep >= number
              ? "bg-blue-600 text-white"
              : "bg-zinc-200 text-zinc-600"
          }`}
        >
          {number}
        </div>

        {line && (
          <div
            className={`h-0.5 flex-1 mx-3 ${
              currentStep > number ? "bg-blue-600" : "bg-zinc-200"
            }`}
          />
        )}
      </div>

      <div className="mt-2">
        <p className="text-sm font-semibold text-zinc-800">{title}</p>

        <p className="text-xs text-zinc-500 mt-0.5">{description}</p>
      </div>
    </div>
  );
};

/* SELECT FIELD */

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

/* REQUIREMENT LIST */

const RequirementList = ({
  title,
  description,
  placeholder,
  inputValue,
  setInputValue,
  items,
  onAdd,
  onRemove,
  required,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onAdd();
    }
  };

  return (
    <div className="mb-7">
      <label className="block text-sm font-semibold text-zinc-800 mb-1">
        {title} {required && <span className="text-red-500">*</span>}
      </label>

      <p className="text-xs text-zinc-500 mb-3">{description}</p>

      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 h-11 px-3.5 rounded-lg border border-zinc-300 text-sm text-zinc-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={onAdd}
          className="h-11 px-4 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-1.5"
        >
          <Plus size={17} />
          Add
        </button>
      </div>

      {/* ADDED ITEMS */}

      {items.length > 0 && (
        <div className="mt-3 space-y-2">
          {items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200"
            >
              <div className="flex items-start gap-2">
                <CheckCircle2
                  size={16}
                  className="text-blue-600 mt-0.5 shrink-0"
                />

                <span className="text-sm text-zinc-700">{item}</span>
              </div>

              <button
                type="button"
                onClick={() => onRemove(index)}
                className="p-1 rounded-md text-zinc-400 hover:text-red-500 hover:bg-red-50 transition"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* PREVIEW SECTION */

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

/* PREVIEW ROW */

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

/* PREVIEW ITEMS */

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

/* TIP ITEM */

const TipItem = ({ icon, title, text }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-zinc-800">{title}</p>

        <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

/*BENEFIT ITEM*/

const BenefitItem = ({ text }) => {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />

      <p className="text-sm text-zinc-600 leading-relaxed">{text}</p>
    </div>
  );
};

export default EmpPostJob;

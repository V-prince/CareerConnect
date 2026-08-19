import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  BriefcaseBusiness,
  CheckCircle2,
  UsersRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import EmpHeader from "../../components/employer/EmpHeader";
import EmpBasicForm from "../../components/employer/EmpBasicForm";
import EmpDescForm from "../../components/employer/EmpDescForm";
import EmpSkillForm from "../../components/employer/EmpSkillForm";
import EmpPrevForm from "../../components/employer/EmpPrevForm";

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
  const addSkill = () => {
    const value = skillInput.trim();

    if (!value) return;

    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, value],
    }));

    setSkillInput("");
  };

  const removeSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };
  const addQualification = () => {
    const value = qualificationInput.trim();

    if (!value) return;

    setFormData((prev) => ({
      ...prev,
      qualifications: [...prev.qualifications, value],
    }));

    setQualificationInput("");
  };

  const removeQualification = (index) => {
    setFormData((prev) => ({
      ...prev,
      qualifications: prev.qualifications.filter((_, i) => i !== index),
    }));
  };
  const addRequirement = () => {
    const value = requirementInput.trim();

    if (!value) return;

    setFormData((prev) => ({
      ...prev,
      requirements: [...prev.requirements, value],
    }));

    setRequirementInput("");
  };

  const removeRequirement = (index) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index),
    }));
  };
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
  const handlePublish = () => {
    console.log("Job Data:", formData);

    alert("Job published successfully!");

    navigate("/employer/jobs");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white mt-16">
      
      <main className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="mb-7">
          <div className="flex items-center gap-2 text-xs md:text-sm mb-3">
            <button
              onClick={() => navigate("/employer/dashboard")}
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              Dashboard
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
            <StepItem
              number={1}
              title="Job Details"
              description="Basic information"
              currentStep={step}
              line
            />

            <StepItem
              number={2}
              title="Job Description"
              description="Roles & responsibilities"
              currentStep={step}
              line
            />

            <StepItem
              number={3}
              title="Requirements"
              description="Skills & experience"
              currentStep={step}
              line
            />

            <StepItem
              number={4}
              title="Preview & Publish"
              description="Review and post"
              currentStep={step}
            />
          </div>
        </div>
        <div className="grid xl:grid-cols-[minmax(0,1fr)_300px] gap-6">
          <div className="bg-white border border-zinc-200 rounded-xl shadow-sm">
            {step === 1 && (
              <EmpBasicForm
                formData={formData}
                handleChange={handleChange}
                handleNext={handleNextFromStep1}
                navigate={navigate}
              />
            )}

            {step === 2 && (
              <EmpDescForm
                formData={formData}
                handleChange={handleChange}
                setStep={setStep}
                handleNext={handleNextFromStep2}
              />
            )}

            {step === 3 && (
              <EmpSkillForm
                formData={formData}
                setStep={setStep}
                skillInput={skillInput}
                setSkillInput={setSkillInput}
                qualificationInput={qualificationInput}
                setQualificationInput={setQualificationInput}
                requirementInput={requirementInput}
                setRequirementInput={setRequirementInput}
                addSkill={addSkill}
                addQualification={addQualification}
                addRequirement={addRequirement}
                removeSkill={removeSkill}
                removeQualification={removeQualification}
                removeRequirement={removeRequirement}
                handleNext={handleNextFromStep3}
              />
            )}

            {step === 4 && (
              <EmpPrevForm
                formData={formData}
                setStep={setStep}
                handlePublish={handlePublish}
              />
            )}
          </div>
          <div className="space-y-5">
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
        <div className="flex items-center gap-2 mt-5 text-xs md:text-sm text-zinc-500">
          <CheckCircle2 size={16} className="text-zinc-500" />
          Your job information will be published after you click "Publish Job".
        </div>
      </main>
    </div>
  );
};
const StepItem = ({ number, title, description, currentStep, line }) => {
  return (
    <div className="flex-1">
      <div className="flex items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${currentStep >= number
            ? "bg-blue-600 text-white"
            : "bg-zinc-200 text-zinc-600"
            }`}
        >
          {number}
        </div>

        {line && (
          <div
            className={`h-0.5 flex-1 mx-3 ${currentStep > number ? "bg-blue-600" : "bg-zinc-200"
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
const BenefitItem = ({ text }) => {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
      <p className="text-sm text-zinc-600 leading-relaxed">{text}</p>
    </div>
  );
};

export default EmpPostJob;

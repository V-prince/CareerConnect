import React from "react";
import { ChevronRight, Plus, X, CheckCircle2 } from "lucide-react";

const EmpSkillForm = ({
  formData,
  setStep,

  skillInput,
  setSkillInput,

  qualificationInput,
  setQualificationInput,

  requirementInput,
  setRequirementInput,

  addSkill,
  addQualification,
  addRequirement,

  removeSkill,
  removeQualification,
  removeRequirement,

  handleNext,
}) => {
  return (
    <div className="p-5 md:p-7">
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-bold text-zinc-900">
          Requirements
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Add the skills, qualifications, and requirements needed for this
          position.
        </p>
      </div>

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
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
        >
          Next: Preview & Publish
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
};

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

export default EmpSkillForm;

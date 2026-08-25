import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const JobFilterSidebar = ({
  jobTypes,
  setJobTypes,
  experience,
  setExperience,
  category,
  setCategory,
  jobTypeFilters,
  experienceFilters,
  categories,
  onReset,
}) => {
  const [jobTypeOpen, setJobTypeOpen] = useState(true);
  const [experienceOpen, setExperienceOpen] = useState(true);

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5 md:p-6 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg md:text-xl font-bold text-zinc-800">
            Filters
          </h2>

          <button
            onClick={onReset}
            className="text-xs md:text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Reset
          </button>
        </div>

        <div className="mb-6">
          <button
            onClick={() => setJobTypeOpen(!jobTypeOpen)}
            className="w-full flex items-center justify-between mb-3"
          >
            <h3 className="font-semibold text-zinc-800 text-sm md:text-base">
              Job Type
            </h3>

            {jobTypeOpen ? (
              <FaChevronUp size={14} className="text-zinc-500" />
            ) : (
              <FaChevronDown size={14} className="text-zinc-500" />
            )}
          </button>

          {jobTypeOpen && (
            <div className="space-y-2.5">
              {jobTypeFilters.map((item) => (
                <label
                  key={item.label}
                  className="flex items-center justify-between gap-3 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={jobTypes[item.label]}
                      onChange={() =>
                        setJobTypes({
                          ...jobTypes,
                          [item.label]: !jobTypes[item.label],
                        })
                      }
                      className="w-4 h-4 text-indigo-600 rounded border-zinc-300 focus:ring-indigo-500"
                    />

                    <span className="text-sm text-zinc-600 group-hover:text-zinc-800">
                      {item.label}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-md">
                    {item.count}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-zinc-100 pt-6 mb-6">
          <button
            onClick={() => setExperienceOpen(!experienceOpen)}
            className="w-full flex items-center justify-between mb-3"
          >
            <h3 className="font-semibold text-zinc-800 text-sm md:text-base">
              Experience Level
            </h3>

            {experienceOpen ? (
              <FaChevronUp size={14} className="text-zinc-500" />
            ) : (
              <FaChevronDown size={14} className="text-zinc-500" />
            )}
          </button>

          {experienceOpen && (
            <div className="space-y-2.5">
              {experienceFilters.map((item) => (
                <label
                  key={item.label}
                  className="flex items-center justify-between gap-3 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={experience[item.label]}
                      onChange={() =>
                        setExperience({
                          ...experience,
                          [item.label]: !experience[item.label],
                        })
                      }
                      className="w-4 h-4 text-indigo-600 rounded border-zinc-300 focus:ring-indigo-500"
                    />

                    <span className="text-sm text-zinc-600 group-hover:text-zinc-800">
                      {item.label}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-md">
                    {item.count}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-zinc-100 pt-6">
          <h3 className="font-semibold text-zinc-800 text-sm md:text-base mb-3">
            Category
          </h3>

          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-11 rounded-xl border border-zinc-200 px-4 pr-10 text-sm text-zinc-700 bg-white outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 appearance-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <FaChevronDown
              size={12}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilterSidebar;

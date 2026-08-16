import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import Select from "react-select";

const locationOptions = [
  { value: "", label: "All Locations" },
  { value: "bengaluru", label: "Bengaluru" },
  { value: "hyderabad", label: "Hyderabad" },
  { value: "pune", label: "Pune" },
  { value: "mysuru", label: "Mysuru" },
  { value: "gurugram", label: "Gurugram" },
  { value: "remote", label: "Remote" },
];

const JobSearchFilter = ({
  keyword,
  setKeyword,
  locationSelect,
  setLocationSelect,
  location,
  setLocation,
  sortBy,
  setSortBy,
  category,
  setCategory,
  jobTypes,
  setJobTypes,
  experience,
  setExperience,
  onSearch,
  onKeyDown,
  filteredJobsLength,
  firstIndex,
  lastIndex,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const anyJobTypeSelected = Object.values(jobTypes).some(Boolean);
  const anyExpSelected = Object.values(experience).some(Boolean);

  const removeJobType = (key) => {
    setJobTypes({
      ...jobTypes,
      [key]: false,
    });
  };

  const removeExperience = (key) => {
    setExperience({
      ...experience,
      [key]: false,
    });
  };

  return (
    <>
      {/* SEARCH */}
      <div className="bg-white border border-zinc-200 shadow-sm rounded-xl p-2.5 md:p-3 mb-6">
        <div className="grid md:grid-cols-12 gap-2 md:gap-2.5 items-stretch">
          <div className="md:col-span-5 flex items-center border border-zinc-200 rounded-xl px-3.5 bg-white">
            <FaSearch className="text-indigo-600 mr-2.5 shrink-0" size={13} />

            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Job title, keyword, company..."
              className="w-full min-w-0 h-10 outline-none bg-transparent text-xs md:text-sm text-slate-800"
            />
          </div>

          <div className="md:col-span-4 relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-indigo-600">
              <FaMapMarkerAlt size={13} />
            </div>

            <Select
              options={locationOptions}
              value={locationSelect}
              onChange={setLocationSelect}
              onKeyDown={onKeyDown}
              className="text-xs md:text-sm"
              placeholder="All Locations"
              styles={{
                control: (base) => ({
                  ...base,
                  height: 40,
                  minHeight: 40,
                  borderRadius: 12,
                  borderColor: "#e4e4e7",
                  boxShadow: "none",
                  paddingLeft: 24,
                  "&:hover": {
                    borderColor: "#e4e4e7",
                  },
                }),
                valueContainer: (base) => ({
                  ...base,
                  padding: "0 6px",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "#0f172a",
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "#9ca3af",
                }),
                indicatorSeparator: () => ({
                  display: "none",
                }),
                dropdownIndicator: (base) => ({
                  ...base,
                  padding: "0 8px 0 4px",
                  color: "#4f46e5",
                }),
              }}
            />
          </div>

          <div className="md:col-span-3">
            <button
              onClick={onSearch}
              className="w-full h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm font-semibold transition shadow-sm"
            >
              Search Jobs
            </button>
          </div>
        </div>
      </div>

      {/* LIST HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <p className="text-sm md:text-base text-zinc-600">
          Showing{" "}
          <span className="font-semibold text-zinc-800">
            {filteredJobsLength === 0
              ? 0
              : `${firstIndex + 1} – ${Math.min(
                  lastIndex,
                  filteredJobsLength,
                )}`}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-zinc-800">
            {filteredJobsLength}
          </span>{" "}
          jobs
        </p>

        <div className="flex items-center gap-2">
          <label className="text-sm text-zinc-600 hidden sm:inline">
            Sort by:
          </label>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-10 rounded-lg border border-zinc-200 px-3 pr-9 text-sm text-zinc-700 bg-white outline-none transition focus:border-indigo-500 appearance-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="salaryHigh">Salary (High to Low)</option>
              <option value="salaryLow">Salary (Low to High)</option>
            </select>

            <FaChevronDown
              size={11}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* ACTIVE FILTER TAGS */}
      {(anyJobTypeSelected ||
        anyExpSelected ||
        category !== "All Categories" ||
        location.trim() ||
        keyword.trim()) && (
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {anyJobTypeSelected &&
            Object.keys(jobTypes)
              .filter((key) => jobTypes[key])
              .map((key) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-lg text-xs font-medium"
                >
                  Job: {key}
                  <button onClick={() => removeJobType(key)}>×</button>
                </span>
              ))}

          {anyExpSelected &&
            Object.keys(experience)
              .filter((key) => experience[key])
              .map((key) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs font-medium"
                >
                  Exp: {key}
                  <button onClick={() => removeExperience(key)}>×</button>
                </span>
              ))}

          {category !== "All Categories" && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-100 rounded-lg text-xs font-medium">
              {category}

              <button onClick={() => setCategory("All Categories")}>×</button>
            </span>
          )}

          {keyword.trim() && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 border border-green-100 rounded-lg text-xs font-medium">
              "{keyword}"
            </span>
          )}

          {location.trim() && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-lg text-xs font-medium">
              Loc: {location}
              <button
                onClick={() => {
                  setLocation("");
                  setLocationSelect(locationOptions[0]);
                }}
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default JobSearchFilter;

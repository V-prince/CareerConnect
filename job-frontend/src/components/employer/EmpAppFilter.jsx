import React from "react";
import { ChevronDown, Search } from "lucide-react";

const SelectBox = ({ value, onChange, width = "xl:w-40", children }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`appearance-none w-full ${width} h-11 px-4 pr-9 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-700 outline-none focus:border-blue-500`}
      >
        {children}
      </select>

      <ChevronDown
        size={16}
        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400"
      />
    </div>
  );
};

const EmpAppFilter = ({
  search,
  onSearchChange,
  experienceFilter,
  onExperienceChange,
  locationFilter,
  onLocationChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="p-4 md:p-5 border-b border-zinc-200">
      <div className="flex flex-col xl:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={19}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            value={search}
            onChange={onSearchChange}
            placeholder="Search applicants by name, skills..."
            className="w-full h-11 pl-10 pr-4 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Experience */}
        <SelectBox value={experienceFilter} onChange={onExperienceChange}>
          <option>All Experience</option>
          <option>0-1 Years</option>
          <option>1-3 Years</option>
          <option>3-5 Years</option>
          <option>5+ Years</option>
        </SelectBox>

        {/* Location */}
        <SelectBox value={locationFilter} onChange={onLocationChange}>
          <option>All Location</option>
          <option>Bengaluru, KA</option>
          <option>Mumbai, MH</option>
          <option>Pune, MH</option>
          <option>Hyderabad, TS</option>
          <option>Ahmedabad, GJ</option>
          <option>Surat, GJ</option>
          <option>Delhi, DL</option>
          <option>Noida, UP</option>
          <option>Vadodara, GJ</option>
        </SelectBox>

        {/* Sort */}
        <SelectBox value={sortBy} onChange={onSortChange}>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Name A-Z">Name A-Z</option>
          <option value="Name Z-A">Name Z-A</option>
        </SelectBox>
      </div>
    </div>
  );
};

export default EmpAppFilter;

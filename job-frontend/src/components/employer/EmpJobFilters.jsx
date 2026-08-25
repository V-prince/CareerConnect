import React from "react";
import { ChevronDown, Search } from "lucide-react";

const EmpJobFilters = ({
  search,
  department,
  location,
  sortBy,
  departments,
  locations,
  onSearch,
  onDepartment,
  onLocation,
  onSort,
}) => {
  return (
    <div className="bg-white border border-zinc-200 border-t-0 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.7fr_1fr_1fr_1fr] gap-3">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            value={search}
            onChange={onSearch}
            placeholder="Search jobs by title, type or location..."
            className="w-full h-11 pl-10 pr-4 rounded-lg border border-zinc-300 text-sm text-zinc-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="relative">
          <select
            value={department}
            onChange={onDepartment}
            className="appearance-none w-full h-11 px-3.5 pr-10 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">All Departments</option>

            {departments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <ChevronDown
            size={17}
            className="absolute right-3 top-3.5 text-zinc-400 pointer-events-none"
          />
        </div>

        <div className="relative">
          <select
            value={location}
            onChange={onLocation}
            className="appearance-none w-full h-11 px-3.5 pr-10 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">All Locations</option>

            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <ChevronDown
            size={17}
            className="absolute right-3 top-3.5 text-zinc-400 pointer-events-none"
          />
        </div>

        <div className="relative">
          <select
            value={sortBy}
            onChange={onSort}
            className="appearance-none w-full h-11 px-3.5 pr-10 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="Newest">Sort by: Newest</option>
            <option value="Oldest">Sort by: Oldest</option>
            <option value="Applications">Sort by: Applications</option>
            <option value="Title">Sort by: Title</option>
          </select>

          <ChevronDown
            size={17}
            className="absolute right-3 top-3.5 text-zinc-400 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default EmpJobFilters;

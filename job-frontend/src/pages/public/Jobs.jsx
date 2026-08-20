import { useState, useEffect } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Select from "react-select";
import { JobCard } from "../../components/JobCard";
import { ApplicationDetailCard } from "../../components/ApplicationDetailCard";
import { useSearchParams } from "react-router-dom";

const locationOptions = [
  { value: "", label: "All Locations" },
  { value: "bengaluru", label: "Bengaluru" },
  { value: "hyderabad", label: "Hyderabad" },
  { value: "pune", label: "Pune" },
  { value: "mysuru", label: "Mysuru" },
  { value: "gurugram", label: "Gurugram" },
  { value: "remote", label: "Remote" },
];

const JobData = [
  {
    icon: "/images/google.png",
    title: "Software Engineer",
    companey: "Google",
    city: "Bengaluru",
    state: "Karnataka",
    status: "Verified",
    date: "2 days ago",
    salary: 15,
    salaryLabel: "₹12 – ₹18 LPA",
    jobType: "Full Time",
    experience: "2 – 4 Years",
    workMode: "Hybrid",
    category: "Software Engineering",
  },
  {
    icon: "/images/microsoft.png",
    title: "Product Manager",
    companey: "Microsoft",
    city: "Hyderabad",
    state: "Telangana",
    status: "Verified",
    date: "3 days ago",
    salary: 25,
    salaryLabel: "₹20 – ₹30 LPA",
    jobType: "Full Time",
    experience: "3 – 6 Years",
    workMode: "On-site",
    category: "Product Management",
  },
  {
    icon: "/images/Swiggy.png",
    title: "Frontend Developer",
    companey: "Swiggy",
    city: "Banglore",
    state: "Karnataka",
    status: "Verified",
    date: "1 day ago",
    salary: 10,
    salaryLabel: "₹8 – ₹12 LPA",
    jobType: "Full Time",
    experience: "1 – 3 Years",
    workMode: "Hybrid",
    category: "Software Engineering",
  },
  {
    icon: "/images/delloit.png",
    title: "Business Analyst",
    companey: "Deloitte",
    city: "Pune",
    state: "Maharashtra",
    status: "Verified",
    date: "5 days ago",
    salary: 8,
    salaryLabel: "₹6 – ₹10 LPA",
    jobType: "Full Time",
    experience: "0 – 2 Years",
    workMode: "On-site",
    category: "Operations",
  },
  {
    icon: "/images/logo.png",
    title: "System Engineer",
    companey: "Infosys",
    city: "Mysuru",
    state: "Karnataka",
    status: "Verified",
    date: "4 days ago",
    salary: 4.5,
    salaryLabel: "₹3.5 – ₹6 LPA",
    jobType: "Full Time",
    experience: "Fresher",
    workMode: "Hybrid",
    category: "Software Engineering",
  },
  {
    icon: "/images/zomato.png",
    title: "Marketing Executive",
    companey: "Zomato",
    city: "Gurugram",
    state: "Haryana",
    status: "Applied",
    date: "1 week ago",
    salary: 6,
    salaryLabel: "₹4 – ₹8 LPA",
    jobType: "Part Time",
    experience: "0 – 1 Year",
    workMode: "On-site",
    category: "Marketing",
  },
  {
    icon: "/images/google.png",
    title: "Web Development Intern",
    companey: "Google",
    city: "Remote",
    state: "India",
    status: "Under Review",
    date: "6 days ago",
    salary: 0.4,
    salaryLabel: "₹40,000 / month",
    jobType: "Internship",
    experience: "Fresher",
    workMode: "Remote",
    category: "Software Engineering",
  },
  {
    icon: "/images/microsoft.png",
    title: "Data Science Intern",
    companey: "Microsoft",
    city: "Remote",
    state: "India",
    status: "Shortlisted",
    date: "2 days ago",
    salary: 0.35,
    salaryLabel: "₹35,000 / month",
    jobType: "Internship",
    experience: "0 – 1 Year",
    workMode: "Remote",
    category: "Data Science",
  },
  {
    icon: "/images/Swiggy.png",
    title: "UX Designer",
    companey: "Swiggy",
    city: "Bengaluru",
    state: "Karnataka",
    status: "Verified",
    date: "2 days ago",
    salary: 14,
    salaryLabel: "₹10 – ₹18 LPA",
    jobType: "Remote",
    experience: "3 – 5 Years",
    workMode: "Remote",
    category: "Design",
  },
  {
    icon: "/images/delloit.png",
    title: "Senior Software Engineer",
    companey: "Deloitte",
    city: "Hyderabad",
    state: "Telangana",
    status: "Verified",
    date: "3 days ago",
    salary: 28,
    salaryLabel: "₹22 – ₹34 LPA",
    jobType: "Full Time",
    experience: "5+ Years",
    workMode: "Hybrid",
    category: "Software Engineering",
  },
];

const jobTypeFilters = [
  { label: "Full Time", count: 1250 },
  { label: "Part Time", count: 450 },
  { label: "Remote", count: 820 },
  { label: "Internship", count: 620 },
];

const experienceFilters = [
  { label: "Fresher", count: 510 },
  { label: "0 – 1 Year", count: 730 },
  { label: "1 – 3 Years", count: 980 },
  { label: "3 – 5 Years", count: 620 },
  { label: "5+ Years", count: 410 },
];

const categories = [
  "All Categories",
  "Software Engineering",
  "Product Management",
  "Design",
  "Marketing",
  "Data Science",
  "Operations",
  "Sales",
];

const Jobs = () => {
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");
  const [locationSelect, setLocationSelect] = useState(locationOptions[0]);
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [category, setCategory] = useState("All Categories");
  const [jobTypeOpen, setJobTypeOpen] = useState(true);
  const [experienceOpen, setExperienceOpen] = useState(true);
  const [selectDetails, setSelectDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [jobTypes, setJobTypes] = useState(
    jobTypeFilters.reduce((acc, jt) => ({ ...acc, [jt.label]: false }), {}),
  );

  const [experience, setExperience] = useState(
    experienceFilters.reduce((acc, ex) => ({ ...acc, [ex.label]: false }), {}),
  );

  const [filteredJobs, setFilteredJobs] = useState(JobData);
  const itemsPerPage = 5;


  const [searchParams, setSearchParams] = useSearchParams();


  const handleSearch = () => {
    setSearch(keyword);
    setLocation(locationSelect?.value || "");
    setKeyword("");
    setLocationSelect(locationOptions[0]);
    setCurrentPage(1);
    setSelectDetails(null);
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const applyFiltersAndSort = () => {
    let result = [...JobData];

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter((j) => {
        return (
          j.title.toLowerCase().includes(q) ||
          j.companey.toLowerCase().includes(q) ||
          j.city.toLowerCase().includes(q) ||
          j.state.toLowerCase().includes(q) ||
          j.category.toLowerCase().includes(q) ||
          j.jobType.toLowerCase().includes(q) ||
          j.experience.toLowerCase().includes(q)
        );
      });
    }

    if (location.trim()) {
      const q = location.toLowerCase().trim();
      result = result.filter(
        (j) =>
          j.city.toLowerCase().includes(q) ||
          j.state.toLowerCase().includes(q) ||
          j.workMode.toLowerCase() === q,
      );
    }

    const selectedJobTypes = Object.keys(jobTypes).filter((k) => jobTypes[k]);

    if (selectedJobTypes.length > 0) {
      result = result.filter((j) => selectedJobTypes.includes(j.jobType));
    }

    const selectedExp = Object.keys(experience).filter((k) => experience[k]);
    if (selectedExp.length > 0) {
      result = result.filter((j) => {
        return selectedExp.some((label) => {
          if (label === "Fresher") return j.experience === "Fresher";
          if (label === "0 – 1 Year")
            return ["0 – 1 Year", "0 – 2 Years", "Fresher"].includes(
              j.experience,
            );
          if (label === "1 – 3 Years")
            return ["1 – 3 Years", "0 – 2 Years", "2 – 4 Years"].includes(
              j.experience,
            );
          if (label === "3 – 5 Years")
            return ["3 – 5 Years", "2 – 4 Years", "3 – 6 Years"].includes(
              j.experience,
            );
          if (label === "5+ Years")
            return ["5+ Years", "3 – 6 Years"].includes(j.experience);
          return false;
        });
      });
    }

    if (category !== "All Categories") {
      result = result.filter((j) => j.category === category);
    }

    switch (sortBy) {
      case "newest":
        result.sort((a, b) => JobData.indexOf(a) - JobData.indexOf(b));
        break;
      case "oldest":
        result.sort((a, b) => JobData.indexOf(b) - JobData.indexOf(a));
        break;
      case "salaryHigh":
        result.sort((a, b) => b.salary - a.salary);
        break;
      case "salaryLow":
        result.sort((a, b) => a.salary - b.salary);
        break;
      default:
        break;
    }

    setFilteredJobs(result);
  };

  useEffect(() => {
    applyFiltersAndSort();
    setCurrentPage(1);
  }, [search, location, jobTypes, experience, category, sortBy]);

  const resetFilters = () => {
    setKeyword("");
    setSearch("");
    setLocationSelect(locationOptions[0]);
    setLocation("");
    setSortBy("newest");
    setCategory("All Categories");
    setJobTypes(
      jobTypeFilters.reduce((acc, jt) => ({ ...acc, [jt.label]: false }), {}),
    );
    setExperience(
      experienceFilters.reduce(
        (acc, ex) => ({ ...acc, [ex.label]: false }),
        {},
      ),
    );
    setSelectDetails(null);
    setCurrentPage(1);
    setSearchParams({})
  };

  useEffect(() => {
    const keyword = searchParams.get("keyword") || "";
    const location = searchParams.get("location") || "";

    setSearch(keyword);
    setLocation(location === "all" ? "" : location);
    

  }, [searchParams]);

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentJobs = filteredJobs.slice(firstIndex, lastIndex);

  const anyJobTypeSelected = Object.values(jobTypes).some(Boolean);
  const anyExpSelected = Object.values(experience).some(Boolean);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
      <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 py-8 md:py-10 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-800 leading-tight">
              Find Your Dream Job
            </h1>
            <p className="text-zinc-600 mt-2 text-sm md:text-base">
              Search from thousands of job opportunities
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50/50 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white border border-zinc-200 shadow-sm rounded-xl p-2.5 md:p-3 mb-6">
            <div className="grid md:grid-cols-12 gap-2 md:gap-2.5 items-stretch">
              <div className="md:col-span-5 flex items-center border border-zinc-200 rounded-xl px-3.5 bg-white">
                <FaSearch
                  className="text-indigo-600 mr-2.5 shrink-0"
                  size={13}
                />
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={handleKeydown}
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
                  onKeyDown={handleKeydown}
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
                    indicatorSeparator: () => ({ display: "none" }),
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
                  onClick={handleSearch}
                  className="w-full h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm font-semibold transition shadow-sm"
                >
                  Search Jobs
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5 md:p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg md:text-xl font-bold text-zinc-800">
                    Filters
                  </h2>
                  <button
                    onClick={resetFilters}
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

            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <p className="text-sm md:text-base text-zinc-600">
                  Showing{" "}
                  <span className="font-semibold text-zinc-800">
                    {filteredJobs.length === 0
                      ? 0
                      : `${firstIndex + 1} – ${Math.min(
                        lastIndex,
                        filteredJobs.length,
                      )}`}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-zinc-800">
                    {filteredJobs.length}
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

              {(anyJobTypeSelected ||
                anyExpSelected ||
                category !== "All Categories" ||
                search?.trim() ||
                location.trim()) && (
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    {anyJobTypeSelected &&
                      Object.keys(jobTypes)
                        .filter((k) => jobTypes[k])
                        .map((k) => (
                          <span
                            key={k}
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-lg text-xs font-medium"
                          >
                            Job: {k}
                            <button
                              onClick={() =>
                                setJobTypes({ ...jobTypes, [k]: false })
                              }
                              className="hover:text-indigo-900"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                    {anyExpSelected &&
                      Object.keys(experience)
                        .filter((k) => experience[k])
                        .map((k) => (
                          <span
                            key={k}
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs font-medium"
                          >
                            Exp: {k}
                            <button
                              onClick={() =>
                                setExperience({ ...experience, [k]: false })
                              }
                              className="hover:text-blue-900"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                    {category !== "All Categories" && (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-100 rounded-lg text-xs font-medium">
                        {category}
                        <button
                          onClick={() => setCategory("All Categories")}
                          className="hover:text-purple-900"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    {search.trim() && (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 border border-green-100 rounded-lg text-xs font-medium">
                        "{search}"
                        <button
                          onClick={() => {
                            setSearch("")
                            setSearchParams({})
                          }}
                          className="hover:text-green-900"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    {location.trim() && (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-lg text-xs font-medium">
                        Loc: {locationSelect?.label || location}
                        <button
                          onClick={() => {
                            setLocation("");
                            setLocationSelect(locationOptions[0]);
                          }}
                          className="hover:text-amber-900"
                        >
                          ×
                        </button>
                      </span>
                    )}
                  </div>
                )}

              {currentJobs.length === 0 ? (
                <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-10 md:p-14 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-50 text-zinc-400 flex items-center justify-center mb-4">
                    <FaSearch size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">
                    No jobs found
                  </h3>
                  <p className="text-sm text-zinc-500 mb-5 max-w-md mx-auto">
                    Try adjusting your search or filter criteria to find more
                    opportunities.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-6 h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div
                  className={`flex flex-col xl:flex-row gap-6 transition-all duration-300`}
                >
                  <div
                    className={`w-full ${!selectDetails ? "xl:w-full" : "xl:w-[45%]"
                      } transition-all duration-300 space-y-3`}
                  >
                    {currentJobs.map((job, index) => (
                      <JobCard
                        key={index}
                        setSelectDetails={setSelectDetails}
                        job={job}
                      />
                    ))}
                  </div>

                  {selectDetails && (
                    <ApplicationDetailCard
                      selectDetails={selectDetails}
                      setSelectDetails={setSelectDetails}
                    />
                  )}
                </div>
              )}

              {filteredJobs.length > 0 && totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-lg border transition flex items-center justify-center ${currentPage === 1
                      ? "cursor-not-allowed bg-zinc-50 border-zinc-200 text-zinc-400"
                      : "bg-white border-zinc-200 text-zinc-500 hover:border-indigo-200 hover:text-indigo-600"
                      }`}
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-10 h-10 rounded-lg border transition flex items-center justify-center text-sm font-medium ${currentPage === index + 1
                        ? "bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-200"
                        : "bg-white border-zinc-200 text-zinc-600 hover:border-indigo-200 hover:text-indigo-600"
                        }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-lg border transition flex items-center justify-center ${currentPage === totalPages
                      ? "cursor-not-allowed bg-zinc-50 border-zinc-200 text-zinc-400"
                      : "bg-white border-zinc-200 text-zinc-500 hover:border-indigo-200 hover:text-indigo-600"
                      }`}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;

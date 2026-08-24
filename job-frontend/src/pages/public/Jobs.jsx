import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import JobFilterSidebar from "../../components/JobFilterSidebar";
import JobSearchFilter from "../../components/JobSearchFilter";
import JobPagination from "../../components/JobPagination";
import JobsCard from "../../components/JobsCard";

const JobData = [
  {
    id: 1,
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
    description:
      "Build scalable software solutions and work with talented engineers to create impactful products.",
    requirements:
      "Bachelor's degree in Computer Science or related field;\n2-4 years of experience in software development;\nStrong understanding of data structures and algorithms;\nExcellent problem-solving skills.",
    skills: ["Java", "Python", "System Design", "Data Structures", "Cloud"],
    companyDescription:
      "Google's mission is to organize the world's information and make it universally accessible and useful.",
    companySize: "10,001+ employees",
    headquarters: "Mountain View, California, USA",
    website: "www.google.com",
  },

  {
    id: 2,
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
    description:
      "Lead product development and collaborate with cross-functional teams to build impactful products.",
    requirements:
      "Bachelor's degree in a relevant field;\n3-6 years of product management experience;\nStrong analytical and communication skills;\nExperience working with agile teams.",
    skills: ["Product Management", "Agile", "Analytics", "Strategy"],
    companyDescription:
      "Microsoft creates technology that empowers people and organizations to achieve more.",
    companySize: "10,001+ employees",
    headquarters: "Redmond, Washington, USA",
    website: "www.microsoft.com",
  },

  {
    id: 3,
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
    description:
      "Develop modern and responsive web applications using React and modern frontend technologies.",
    requirements:
      "Experience with React and JavaScript;\nStrong understanding of responsive design;\nKnowledge of REST APIs;\nGood problem-solving skills.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    companyDescription:
      "Swiggy is India's leading convenience platform connecting millions of consumers with restaurants and delivery partners.",
    companySize: "10,001+ employees",
    headquarters: "Bengaluru, India",
    website: "www.swiggy.com",
  },

  {
    id: 4,
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
    description:
      "Analyze business processes and provide data-driven recommendations to improve organizational performance.",
    requirements:
      "Bachelor's degree in business or related field;\nStrong analytical skills;\nKnowledge of Excel and SQL;\nGood communication skills.",
    skills: ["Business Analysis", "Excel", "SQL", "Analytics"],
    companyDescription:
      "Deloitte provides audit, consulting, tax and advisory services around the world.",
    companySize: "10,001+ employees",
    headquarters: "London, United Kingdom",
    website: "www.deloitte.com",
  },

  {
    id: 5,
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
    description:
      "Work with engineering teams to develop, maintain and support enterprise software solutions.",
    requirements:
      "Bachelor's degree in Computer Science or related field;\nBasic programming knowledge;\nUnderstanding of software development concepts;\nGood communication skills.",
    skills: ["Java", "Python", "SQL", "Git"],
    companyDescription:
      "Infosys is a global leader in next-generation digital services and consulting.",
    companySize: "10,001+ employees",
    headquarters: "Bengaluru, India",
    website: "www.infosys.com",
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
const createInitialState = (items) =>
  items.reduce((acc, item) => {
    acc[item.label] = false;
    return acc;
  }, {});

const Jobs = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");

  const [locationSelect, setLocationSelect] = useState({
    value: "",
    label: "All Locations",
  });

  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [category, setCategory] = useState("All Categories");

  const [jobTypes, setJobTypes] = useState(createInitialState(jobTypeFilters));

  const [experience, setExperience] = useState(
    createInitialState(experienceFilters),
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredJobs, setFilteredJobs] = useState(JobData);


  const [searchParams, setSearchParams] = useSearchParams();


  const handleSearch = () => {
    setSearch(keyword);

    setLocation(locationSelect?.value || "");

    setKeyword("");

    setLocationSelect({
      value: "",
      label: "All Locations",
    });

    setCurrentPage(1);
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

      result = result.filter((job) =>
        [
          job.title,
          job.companey,
          job.city,
          job.state,
          job.category,
          job.jobType,
          job.experience,
        ].some((value) =>
          String(value || "")
            .toLowerCase()
            .includes(q),
        ),
      );
    }
    if (location.trim()) {
      const q = location.toLowerCase().trim();

      result = result.filter(
        (job) =>
          job.city.toLowerCase().includes(q) ||
          job.state.toLowerCase().includes(q) ||
          job.workMode.toLowerCase() === q,
      );
    }
    const selectedJobTypes = Object.keys(jobTypes).filter(
      (key) => jobTypes[key],
    );

    const selectedJobTypes = Object.keys(jobTypes).filter((k) => jobTypes[k]);

    if (selectedJobTypes.length > 0) {
      result = result.filter((job) => selectedJobTypes.includes(job.jobType));
    }
    const selectedExperience = Object.keys(experience).filter(
      (key) => experience[key],
    );

    if (selectedExperience.length > 0) {
      result = result.filter((job) =>
        selectedExperience.some((label) => {
          if (label === "Fresher") {
            return job.experience === "Fresher";
          }

          if (label === "0 – 1 Year") {
            return ["0 – 1 Year", "0 – 2 Years", "Fresher"].includes(
              job.experience,
            );
          }

          if (label === "1 – 3 Years") {
            return ["1 – 3 Years", "0 – 2 Years", "2 – 4 Years"].includes(
              job.experience,
            );
          }

          if (label === "3 – 5 Years") {
            return ["3 – 5 Years", "2 – 4 Years", "3 – 6 Years"].includes(
              job.experience,
            );
          }

          if (label === "5+ Years") {
            return ["5+ Years", "3 – 6 Years"].includes(job.experience);
          }

          return false;
        }),
      );
    }
    if (category !== "All Categories") {
      result = result.filter((job) => job.category === category);
    }

    switch (sortBy) {
      case "newest":
        result.sort((a, b) => a.id - b.id);
        break;

      case "oldest":
        result.sort((a, b) => b.id - a.id);
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

    setLocationSelect({
      value: "",
      label: "All Locations",
    });

    setLocation("");
    setSortBy("newest");
    setCategory("All Categories");

    setJobTypes(createInitialState(jobTypeFilters));
    setExperience(createInitialState(experienceFilters));

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

  const handleJobClick = (job) => {
    navigate(`/jobs/${job.id}`, {
      state: { job },
    });
  };
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
      <section className="relative overflow-hidden border-b border-blue-200 bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-800">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] bg-blue-400/10 rounded-full blur-3xl" />

        <div className="absolute top-12 right-1/4 w-56 h-56 bg-indigo-300/10 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="py-14 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-cyan-100 text-xs md:text-sm font-semibold mb-5">
              <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
              Explore Your Next Opportunity
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200">
                Dream Job
              </span>
            </h1>

            <p className="max-w-2xl mx-auto mt-4 text-sm md:text-base lg:text-lg leading-7 text-blue-100">
              Discover opportunities that match your skills, passion, and career
              goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <JobSearchFilter
            keyword={keyword}
            setKeyword={setKeyword}
            search={search}
            setSearch={setSearch}
            locationSelect={locationSelect}
            setLocationSelect={setLocationSelect}
            location={location}
            setLocation={setLocation}
            sortBy={sortBy}
            setSortBy={setSortBy}
            category={category}
            setCategory={setCategory}
            jobTypes={jobTypes}
            setJobTypes={setJobTypes}
            experience={experience}
            setExperience={setExperience}
            jobTypeFilters={jobTypeFilters}
            experienceFilters={experienceFilters}
            categories={categories}
            onSearch={handleSearch}
            onKeyDown={handleKeydown}
            onReset={resetFilters}
            filteredJobsLength={filteredJobs.length}
            firstIndex={firstIndex}
            lastIndex={lastIndex}
          />
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            <JobFilterSidebar
              jobTypes={jobTypes}
              setJobTypes={setJobTypes}
              experience={experience}
              setExperience={setExperience}
              category={category}
              setCategory={setCategory}
              jobTypeFilters={jobTypeFilters}
              experienceFilters={experienceFilters}
              categories={categories}
              onReset={resetFilters}
            />
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
              <JobPagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;

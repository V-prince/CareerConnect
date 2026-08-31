import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import JobFilterSidebar from "../../components/JobFilterSidebar";
import JobSearchFilter from "../../components/JobSearchFilter";
import JobPagination from "../../components/JobPagination";
import JobsCard from "../../components/JobsCard";
import { useJob } from "../../store/JobContext";
import { GetPublicJobFilters } from "../../Services/publicService";

const categories = [
  "All Categories",
  "Engineering",
  "Design",
  "Marketing",
  "Human Resources",
  "Finance",
  "Sales",
];
const createInitialState = (items) =>
  items.reduce((acc, item) => {
    acc[item.label] = false;
    return acc;
  }, {});

const Jobs = () => {
  const navigate = useNavigate();


  const { jobs } = useJob();

  const [searchParams, setSearchParams] = useSearchParams();
  const [jobTypeFilters, setjobTypeFilters] = useState([]);
  const [experienceFilters, setexperienceFilters] = useState([]);

  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");

  const [locationSelect, setLocationSelect] = useState({
    value: "",
    label: "All Locations",
  });

  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [category, setCategory] = useState("All Categories");

  const [jobTypes, setJobTypes] = useState({});

  const [experience, setExperience] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const itemsPerPage = 5;
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
    let result = [...jobs];
    if (search.trim()) {
      const q = search.toLowerCase().trim();

      result = result.filter((job) =>
        [
          job?.jobTitle,
          job?.company?.companyName,
          job?.location,
          job?.category,
          job?.jobType,
          job?.experienceLevel,
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
          job?.location.toLowerCase().includes(q)
      );
    }
    const selectedJobTypes = Object.keys(jobTypes).filter(
      (key) => jobTypes[key],
    );

    if (selectedJobTypes.length > 0) {
      result = result.filter((job) => selectedJobTypes.includes(job?.jobType));
    }
    const selectedExperience = Object.keys(experience).filter(
      (key) => experience[key],
    );

    if (selectedExperience.length > 0) {
      result = result.filter((job) =>
        selectedExperience.includes(job?.experienceLevel)
      );
    }
    if (category !== "All Categories") {
      result = result.filter((job) => job?.department?.toLowerCase() === category?.toLowerCase());
    }

    switch (sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
        break;

      case "oldest":
        result.sort((a, b) => new Date(a?.createdAt) - new Date(b?.createdAt));
        break;

      case "salaryHigh":
        result.sort((a, b) => b?.maxSalary - a?.maxSalary);
        break;

      case "salaryLow":
        result.sort((a, b) => a?.maxSalary - b?.maxSalary);
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
    setSearchParams({});
  };

  useEffect(() => {
    const keyword = searchParams.get("keyword") || "";
    const location = searchParams.get("location") || "";

    setSearch(keyword);
    setLocation(location === "all" ? "" : location);
  }, [searchParams]);



  const getFilters = async () => {
    try {
      const data = await GetPublicJobFilters();

      if (!data.success) {
        return console.log("filters error:", data.message)
      }

      setjobTypeFilters(data?.jobTypes || [])
      setexperienceFilters(data?.ExperinceLevel || [])
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFilters()
  }, [])


  useEffect(() => {
    if (jobTypeFilters.length > 0) {
      setJobTypes(createInitialState(jobTypeFilters));
    }

    if (experienceFilters.length > 0) {
      setExperience(createInitialState(experienceFilters));
    }
  }, [jobTypeFilters, experienceFilters])

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentJobs = filteredJobs.slice(firstIndex, lastIndex);



  const handleJobClick = (job) => {
    navigate(`/job/${job._id}`);
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
                <div className="space-y-3">
                  {currentJobs.map((job) => (
                    <JobsCard
                      key={job._id}
                      job={job}
                      onClick={() => handleJobClick(job)}
                    />
                  ))}
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

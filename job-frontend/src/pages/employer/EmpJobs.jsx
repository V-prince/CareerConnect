import React, { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  MapPin,
  Pencil,
  Eye,
  Trash2,
  BriefcaseBusiness,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full Time",
    experience: "2-5 Years",
    department: "Engineering",
    location: "Bengaluru, KA",
    mode: "Remote",
    applications: 45,
    status: "Active",
    postedOn: "May 26, 2024",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Full Time",
    experience: "2-4 Years",
    department: "Design",
    location: "Mumbai, MH",
    mode: "Hybrid",
    applications: 32,
    status: "Active",
    postedOn: "May 24, 2024",
  },
  {
    id: 3,
    title: "Backend Developer",
    type: "Full Time",
    experience: "3-6 Years",
    department: "Engineering",
    location: "Hyderabad, TS",
    mode: "Remote",
    applications: 28,
    status: "Active",
    postedOn: "May 22, 2024",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    type: "Full Time",
    experience: "3-5 Years",
    department: "Engineering",
    location: "Pune, MH",
    mode: "On-site",
    applications: 19,
    status: "Active",
    postedOn: "May 21, 2024",
  },
  {
    id: 5,
    title: "Product Manager",
    type: "Full Time",
    experience: "4-8 Years",
    department: "Product",
    location: "Mumbai, MH",
    mode: "Hybrid",
    applications: 14,
    status: "Closed",
    postedOn: "May 19, 2024",
  },
  {
    id: 6,
    title: "Customer Support Executive",
    type: "Full Time",
    experience: "0-2 Years",
    department: "Support",
    location: "Delhi, DL",
    mode: "On-site",
    applications: 38,
    status: "Active",
    postedOn: "May 18, 2024",
  },
  {
    id: 7,
    title: "QA Engineer",
    type: "Full Time",
    experience: "2-4 Years",
    department: "Engineering",
    location: "Chennai, TN",
    mode: "Hybrid",
    applications: 22,
    status: "Closed",
    postedOn: "May 15, 2024",
  },
  {
    id: 8,
    title: "Data Analyst",
    type: "Full Time",
    experience: "1-3 Years",
    department: "Data",
    location: "Bengaluru, KA",
    mode: "Remote",
    applications: 16,
    status: "Closed",
    postedOn: "May 10, 2024",
  },
  {
    id: 9,
    title: "Marketing Executive",
    type: "Full Time",
    experience: "1-3 Years",
    department: "Marketing",
    location: "Ahmedabad, GJ",
    mode: "On-site",
    applications: 18,
    status: "Active",
    postedOn: "May 8, 2024",
  },
  {
    id: 10,
    title: "HR Executive",
    type: "Full Time",
    experience: "1-3 Years",
    department: "Human Resources",
    location: "Pune, MH",
    mode: "Hybrid",
    applications: 12,
    status: "Active",
    postedOn: "May 6, 2024",
  },
  {
    id: 11,
    title: "Mobile App Developer",
    type: "Full Time",
    experience: "2-5 Years",
    department: "Engineering",
    location: "Bengaluru, KA",
    mode: "Remote",
    applications: 24,
    status: "Active",
    postedOn: "May 4, 2024",
  },
  {
    id: 12,
    title: "Content Writer",
    type: "Part Time",
    experience: "0-2 Years",
    department: "Marketing",
    location: "Delhi, DL",
    mode: "Remote",
    applications: 11,
    status: "Expired",
    postedOn: "May 1, 2024",
  },
];

const EmpJobs = () => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState(jobsData);

  const [activeTab, setActiveTab] = useState("All Jobs");
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [jobsPerPage, setJobsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = ["All Jobs", "Active", "Closed", "Expired"];

  const departments = [...new Set(jobsData.map((job) => job.department))];

  const locations = [...new Set(jobsData.map((job) => job.location))];

  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    if (activeTab !== "All Jobs") {
      result = result.filter((job) => job.status === activeTab);
    }

    if (search.trim()) {
      const searchValue = search.toLowerCase();

      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(searchValue) ||
          job.type.toLowerCase().includes(searchValue) ||
          job.location.toLowerCase().includes(searchValue) ||
          job.department.toLowerCase().includes(searchValue),
      );
    }

    if (department) {
      result = result.filter((job) => job.department === department);
    }

    if (location) {
      result = result.filter((job) => job.location === location);
    }

    if (sortBy === "Newest") {
      result.sort((a, b) => b.id - a.id);
    }

    if (sortBy === "Oldest") {
      result.sort((a, b) => a.id - b.id);
    }

    if (sortBy === "Applications") {
      result.sort((a, b) => b.applications - a.applications);
    }

    if (sortBy === "Title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [jobs, activeTab, search, department, location, sortBy]);
  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / jobsPerPage));

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * jobsPerPage;

  const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleDepartment = (e) => {
    setDepartment(e.target.value);
    setCurrentPage(1);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  const handleJobsPerPage = (e) => {
    setJobsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleEdit = (job) => {
    navigate(`/employer/edit/job/${job.id}`);
  };

  const handleView = (job) => {
    navigate(`/employer/job/${job.id}`);
  };

  const handleDelete = (job) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${job.title}"?`,
    );

    if (!confirmDelete) return;

    setJobs((prev) => prev.filter((item) => item.id !== job.id));

    if (currentJobs.length === 1 && safeCurrentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-end">
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
        <div className="flex items-center gap-2 text-sm mb-4">
          <button
            onClick={() => navigate("/employer/dashboard")}
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            Dashboard
          </button>

          <ChevronRight size={15} className="text-zinc-400" />

          <span className="text-zinc-500">All Jobs</span>
        </div>

        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-zinc-900">
              Manage Jobs
            </h1>

            <p className="text-sm md:text-base text-zinc-500 mt-1">
              View, edit and manage all your job postings.
            </p>
          </div>

          <button
            onClick={() => navigate("/employer/post/job")}
            className="flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
          >
            <span className="text-lg leading-none">+</span>
            Post New Job
          </button>
        </div>

        <div className="bg-white border-b border-zinc-200 overflow-hidden">
          <div className="flex items-center gap-8">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              const count =
                tab === "All Jobs"
                  ? jobs.length
                  : jobs.filter((job) => job.status === tab).length;

              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`relative py-4 text-sm font-medium whitespace-nowrap transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {tab} ({count})
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-blue-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

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
                onChange={handleSearch}
                placeholder="Search jobs by title, type or location..."
                className="w-full h-11 pl-10 pr-4 rounded-lg border border-zinc-300 text-sm text-zinc-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div className="relative">
              <select
                value={department}
                onChange={handleDepartment}
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
                onChange={handleLocation}
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
                onChange={handleSort}
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

        <div className="bg-white border border-zinc-200 border-t-0 overflow-x-auto">
          <table className="w-full min-w-[1050px]">
            <thead>
              <tr className="border-b border-zinc-200">
                <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                  Job Title
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                  Department
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                  Location
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                  Applications
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                  Status
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                  Posted On
                </th>

                <th className="text-center px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {currentJobs.length > 0 ? (
                currentJobs.map((job) => (
                  <tr
                    key={job.id}
                    className="border-b border-zinc-100 hover:bg-zinc-50 transition"
                  >
                    <td className="px-5 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <BriefcaseBusiness size={19} />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-blue-600">
                            {job.title}
                          </p>

                          <p className="text-xs text-zinc-500 mt-1">
                            {job.type} • {job.experience}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-5">
                      <p className="text-sm text-zinc-700">{job.department}</p>
                    </td>

                    <td className="px-5 py-5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-zinc-500" />

                          <span className="text-sm text-zinc-700">
                            {job.location}
                          </span>
                        </div>

                        <p className="text-xs text-zinc-500 ml-5">{job.mode}</p>
                      </div>
                    </td>
                    <td className="px-5 py-5">
                      <p className="text-sm font-medium text-zinc-700">
                        {job.applications}
                      </p>
                    </td>
                    <td className="px-5 py-5">
                      <StatusBadge status={job.status} />
                    </td>
                    <td className="px-5 py-5">
                      <p className="text-sm text-zinc-700">{job.postedOn}</p>

                      <p className="text-xs text-zinc-500 mt-1">
                        {job.id === 1
                          ? "10 days ago"
                          : `${job.id + 9} days ago`}
                      </p>
                    </td>
                    <td className="px-5 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEdit(job)}
                          title="Edit Job"
                          className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 text-blue-600 hover:bg-blue-50 transition"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => handleView(job)}
                          title="View Job"
                          className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-100 transition"
                        >
                          <Eye size={17} />
                        </button>
                        <button
                          onClick={() => handleDelete(job)}
                          title="Delete Job"
                          className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 text-red-500 hover:bg-red-50 transition"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-5 py-16 text-center">
                    <p className="text-base font-semibold text-zinc-800">
                      No jobs found
                    </p>

                    <p className="text-sm text-zinc-500 mt-1">
                      Try changing your search or filters.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-zinc-200 border-t-0 px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            Showing {filteredJobs.length === 0 ? 0 : startIndex + 1} to{" "}
            {Math.min(startIndex + jobsPerPage, filteredJobs.length)} of{" "}
            {filteredJobs.length} jobs
          </p>
          <div className="flex items-center gap-2">
            <button
              disabled={safeCurrentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={17} />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium transition ${
                    safeCurrentPage === page
                      ? "bg-blue-600 text-white"
                      : "border border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            <button
              disabled={safeCurrentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={17} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-500">Jobs per page</span>

            <div className="relative">
              <select
                value={jobsPerPage}
                onChange={handleJobsPerPage}
                className="appearance-none w-20 h-9 px-3 pr-8 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-700 outline-none focus:border-blue-500"
              >
                <option value={5}>5</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
                <option value={12}>12</option>
              </select>

              <ChevronDown
                size={15}
                className="absolute right-2.5 top-3 text-zinc-400 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
const StatusBadge = ({ status }) => {
  const styles = {
    Active: "bg-green-50 text-green-600",
    Closed: "bg-zinc-100 text-zinc-600",
    Expired: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
        styles[status] || "bg-zinc-100 text-zinc-600"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "Active"
            ? "bg-green-500"
            : status === "Expired"
              ? "bg-red-500"
              : "bg-zinc-400"
        }`}
      />

      {status}
    </span>
  );
};

export default EmpJobs;

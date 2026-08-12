import React, { useMemo, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import EmpJobFilters from "../../components/employer/EmpJobFilters";
import EmpJobsTable from "../../components/employer/EmpJobsTable";
import EmpJobsPagination from "../../components/employer/EmpJobsPagination";
import EmpHeader from "../../components/employer/EmpHeader";

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
      <EmpHeader />
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
        <EmpJobFilters
          search={search}
          department={department}
          location={location}
          sortBy={sortBy}
          departments={departments}
          locations={locations}
          onSearch={handleSearch}
          onDepartment={handleDepartment}
          onLocation={handleLocation}
          onSort={handleSort}
        />
        <EmpJobsTable
          currentJobs={currentJobs}
          onEdit={handleEdit}
          onView={handleView}
          onDelete={handleDelete}
        />
        <EmpJobsPagination
          filteredJobsLength={filteredJobs.length}
          startIndex={startIndex}
          jobsPerPage={jobsPerPage}
          safeCurrentPage={safeCurrentPage}
          totalPages={totalPages}
          onPrevious={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          onNext={() =>
            setCurrentPage((prev) => Math.min(totalPages, prev + 1))
          }
          onPageChange={(page) => setCurrentPage(page)}
          onJobsPerPage={handleJobsPerPage}
        />
      </main>
    </div>
  );
};

export default EmpJobs;

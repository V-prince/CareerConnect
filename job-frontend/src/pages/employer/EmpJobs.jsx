import React, { useEffect, useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import EmpJobFilters from "../../components/employer/EmpJobFilters";
import EmpJobsTable from "../../components/employer/EmpJobsTable";
import EmpJobsPagination from "../../components/employer/EmpJobsPagination";
import EmpEditJobPopup from "../../components/popups/EmpEditJobPopup";
import { GetJobData } from "../../Services/companeyService";
import toast from "react-hot-toast";



const EmpJobs = () => {
  const navigate = useNavigate();
  const routeLocation = useLocation();

  const [jobs, setJobs] = useState([]);

  console.log("j", jobs)

  const [activeTab, setActiveTab] = useState("All Jobs");
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [jobsPerPage, setJobsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const [editingJob, setEditingJob] = useState(null);

  const tabs = ["All Jobs", "Open", "Closed", "Expired"];
  const departments = useMemo(
    () => [...new Set(jobs.map((job) => job.department).filter(Boolean))],
    [jobs],
  );

  const locations = useMemo(
    () => [...new Set(jobs.map((job) => job.location).filter(Boolean))],
    [jobs],
  );

  // useEffect(() => {
  //   const newJob = routeLocation.state?.newJob;

  //   if (!newJob) return;

  //   setJobs((prev) => {
  //     const exists = prev.some((job) => String(job.id) === String(newJob.id));

  //     if (exists) {
  //       return prev;
  //     }

  //     return [newJob, ...prev];
  //   });

  //   navigate(routeLocation.pathname, {
  //     replace: true,
  //     state: {},
  //   });
  // }, [routeLocation, navigate]);

  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    console.log("res", result)
    if (activeTab !== "All Jobs") {
      result = result.filter((job) => job.status === activeTab.toLowerCase());
    }

    if (search.trim()) {
      const searchValue = search.toLowerCase().trim();

      result = result.filter((job) => {
        const searchableText = [
          job.jobTitle,
          job.jobType,
          job.location,
          job.department,
          job.jobDescription,
          job.experienceLevel,
          ...(job.skills || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(searchValue);
      });
    }
    if (department) {
      result = result.filter((job) => job.department === department);
    }

    if (location) {
      result = result.filter((job) => job.location === location);
    }

    if (sortBy === "Newest") {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (sortBy === "Oldest") {
      result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    if (sortBy === "Applications") {
      result.sort((a, b) => (b.applications || 0) - (a.applications || 0));
    }

    if (sortBy === "Title") {
      result.sort((a, b) =>
        String(a.jobTitle || "").localeCompare(String(b.jobTitle || "")),
      );
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
    setEditingJob(job);
  };

  const handleSaveEdit = (updatedJob) => {
    console.log("data", updatedJob)
    // setJobs((prev) =>
    //   prev.map((job) =>
    //     String(job._id) === String(updatedJob._id)
    //       ? {
    //         ...job,
    //         ...updatedJob,
    //       }
    //       : job,
    //   ),
    // );

    setEditingJob(null);
  };

  const handleView = (job) => {
    navigate(`/employer/job/${job._id}`)
  };

  const handleDelete = (job) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${job.title}"?`,
    );

    if (!confirmDelete) return;

    setJobs((prev) =>
      prev.filter((item) => String(item.id) !== String(job.id)),
    );

    if (currentJobs.length === 1 && safeCurrentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };


  const getData = async () => {
    try {

      const data = await GetJobData();

      if (!data.success) {
        return toast.error(data.message)
      }

      setJobs(data.jobs)

    } catch (error) {
      console.log("emp job err:", error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="min-h-screen  mt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
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
              const isActive = activeTab.toLowerCase() === tab.toLowerCase();

              const count =
                tab === "All Jobs"
                  ? jobs.length
                  : tab === "Expired"
                    ? jobs.filter((job) => new Date(job.deadline) < new Date()).length
                    : jobs.filter((job) => job.status === tab.toLowerCase()).length;

              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`relative py-4 text-sm font-medium whitespace-nowrap transition ${isActive
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

        <EmpEditJobPopup
          job={editingJob}
          isOpen={!!editingJob}
          onClose={() => setEditingJob(null)}
          onSave={handleSaveEdit}
        />
      </main>
    </div>
  );
};

export default EmpJobs;

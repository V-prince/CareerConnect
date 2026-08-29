import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import EmpAppTab from "../../components/employer/EmpAppTab";
import EmpAppFilter from "../../components/employer/EmpAppFilter";
import EmpAppTable from "../../components/employer/EmpAppTable";
import EmpAppPage from "../../components/employer/EmpAppPage";

export const initialApplicantsData = [
  {
    id: 1,
    name: "Arjun Raj",
    email: "arjun.raj@email.com",
    experience: "2.3 Yrs",
    experienceValue: 2.3,
    location: "Bengaluru, KA",
    country: "India",
    appliedOn: "May 28, 2024",
    appliedDate: new Date("2024-05-28"),
    status: "New",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    jobAppliedFor: "Frontend Developer",
    avatar: "AR",
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@email.com",
    experience: "3.1 Yrs",
    experienceValue: 3.1,
    location: "Mumbai, MH",
    country: "India",
    appliedOn: "May 28, 2024",
    appliedDate: new Date("2024-05-28"),
    status: "Shortlisted",
    skills: ["React", "Redux", "TypeScript", "Tailwind"],
    jobAppliedFor: "Full Stack Developer",
    avatar: "SK",
  },
  {
    id: 3,
    name: "Rohan Singh",
    email: "rohan.singh@email.com",
    experience: "2.7 Yrs",
    experienceValue: 2.7,
    location: "Pune, MH",
    country: "India",
    appliedOn: "May 27, 2024",
    appliedDate: new Date("2024-05-27"),
    status: "Interview",
    skills: ["JavaScript", "React", "Node.js", "SQL"],
    jobAppliedFor: "Backend Developer",
    avatar: "RS",
  },
  {
    id: 4,
    name: "Priya Mehta",
    email: "priya.mehta@email.com",
    experience: "1.8 Yrs",
    experienceValue: 1.8,
    location: "Hyderabad, TS",
    country: "India",
    appliedOn: "May 27, 2024",
    appliedDate: new Date("2024-05-27"),
    status: "Offered",
    skills: ["React", "Next.js", "JavaScript", "Firebase"],
    jobAppliedFor: "React Developer",
    avatar: "PM",
  },
  {
    id: 5,
    name: "Karan Patel",
    email: "karan.patel@email.com",
    experience: "1.5 Yrs",
    experienceValue: 1.5,
    location: "Ahmedabad, GJ",
    country: "India",
    appliedOn: "May 26, 2024",
    appliedDate: new Date("2024-05-26"),
    status: "Rejected",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    jobAppliedFor: "Frontend Developer",
    avatar: "KP",
  },
  {
    id: 6,
    name: "Aman Shah",
    email: "aman.shah@email.com",
    experience: "4.2 Yrs",
    experienceValue: 4.2,
    location: "Surat, GJ",
    country: "India",
    appliedOn: "May 25, 2024",
    appliedDate: new Date("2024-05-25"),
    status: "New",
    skills: ["React", "Node.js", "MongoDB"],
    jobAppliedFor: "MERN Stack Developer",
    avatar: "AS",
  },
  {
    id: 7,
    name: "Neha Sharma",
    email: "neha.sharma@email.com",
    experience: "2.9 Yrs",
    experienceValue: 2.9,
    location: "Delhi, DL",
    country: "India",
    appliedOn: "May 24, 2024",
    appliedDate: new Date("2024-05-24"),
    status: "Shortlisted",
    skills: ["Vue.js", "JavaScript", "CSS"],
    jobAppliedFor: "Frontend Developer",
    avatar: "NS",
  },
  {
    id: 8,
    name: "Rahul Verma",
    email: "rahul.verma@email.com",
    experience: "3.8 Yrs",
    experienceValue: 3.8,
    location: "Noida, UP",
    country: "India",
    appliedOn: "May 23, 2024",
    appliedDate: new Date("2024-05-23"),
    status: "Interview",
    skills: ["Java", "Spring Boot", "MySQL"],
    jobAppliedFor: "Java Developer",
    avatar: "RV",
  },
];

const statusNames = [
  "New",
  "Shortlisted",
  "Interview",
  "Offered",
  "Hired",
  "Rejected",
];

const EmpApplicants = () => {
  const navigate = useNavigate();

  const [applicants, setApplicants] = useState(initialApplicantsData);
  const statusTabs = useMemo(() => {
    const counts = applicants.reduce((acc, applicant) => {
      acc[applicant.status] = (acc[applicant.status] || 0) + 1;
      return acc;
    }, {});

    return [
      {
        label: "All",
        value: "All",
        count: applicants.length,
      },
      ...statusNames.map((status) => ({
        label: status,
        value: status,
        count: counts[status] || 0,
      })),
    ];
  }, [applicants]);

  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("All Experience");
  const [locationFilter, setLocationFilter] = useState("All Location");
  const [sortBy, setSortBy] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [openStatusId, setOpenStatusId] = useState(null);
  const [statusDropUp, setStatusDropUp] = useState(false);

  const applicantsPerPage = 5;

  const filteredApplicants = useMemo(() => {
    let result = [...applicants];

    if (activeTab !== "All") {
      result = result.filter((applicant) => applicant.status === activeTab);
    }

    if (search.trim()) {
      const value = search.toLowerCase();

      result = result.filter((applicant) => {
        return (
          applicant.name.toLowerCase().includes(value) ||
          applicant.email.toLowerCase().includes(value) ||
          applicant.jobAppliedFor.toLowerCase().includes(value) ||
          applicant.skills.some((skill) => skill.toLowerCase().includes(value))
        );
      });
    }

    if (experienceFilter !== "All Experience") {
      result = result.filter((applicant) => {
        if (experienceFilter === "0-1 Years") {
          return applicant.experienceValue <= 1;
        }

        if (experienceFilter === "1-3 Years") {
          return (
            applicant.experienceValue > 1 && applicant.experienceValue <= 3
          );
        }

        if (experienceFilter === "3-5 Years") {
          return (
            applicant.experienceValue > 3 && applicant.experienceValue <= 5
          );
        }

        if (experienceFilter === "5+ Years") {
          return applicant.experienceValue > 5;
        }

        return true;
      });
    }

    if (locationFilter !== "All Location") {
      result = result.filter(
        (applicant) => applicant.location === locationFilter,
      );
    }

    if (sortBy === "Newest") {
      result.sort((a, b) => b.appliedDate.getTime() - a.appliedDate.getTime());
    }

    if (sortBy === "Oldest") {
      result.sort((a, b) => a.appliedDate.getTime() - b.appliedDate.getTime());
    }

    if (sortBy === "Name A-Z") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "Name Z-A") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [applicants, activeTab, search, experienceFilter, locationFilter, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredApplicants.length / applicantsPerPage),
  );

  const startIndex = (currentPage - 1) * applicantsPerPage;

  const currentApplicants = filteredApplicants.slice(
    startIndex,
    startIndex + applicantsPerPage,
  );

  const handleStatusChange = (id, newStatus) => {
    setApplicants((prev) =>
      prev.map((applicant) =>
        applicant.id === id ? { ...applicant, status: newStatus } : applicant,
      ),
    );

    setOpenStatusId(null);
  };

  const handleStatusOpen = (id) => {
    setOpenStatusId((prev) => {
      if (prev === id) {
        return null;
      }

      const index = currentApplicants.findIndex(
        (applicant) => applicant.id === id,
      );

      setStatusDropUp(index >= currentApplicants.length - 2);

      return id;
    });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setOpenStatusId(null);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleExperienceChange = (e) => {
    setExperienceFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setOpenStatusId(null);
    }
  };

  const handleViewProfile = (applicant) => {
    navigate(`/employer/applicants/${applicant.id}`);
  };

  return (
    <div className="min-h-screen  mt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <main className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex items-center gap-2 text-sm mb-7">
          <button
            onClick={() => navigate("/employer/dashboard")}
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            Dashboard
          </button>

          <ChevronRight size={16} className="text-zinc-400" />

          <span className="text-zinc-800 font-medium">Applications</span>
        </div>

        <div className="flex items-center gap-3 mb-7">
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-900">
            Applicants
          </h1>
        </div>

        <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
          <EmpAppTab
            tabs={statusTabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          <EmpAppFilter
            search={search}
            onSearchChange={handleSearchChange}
            experienceFilter={experienceFilter}
            onExperienceChange={handleExperienceChange}
            locationFilter={locationFilter}
            onLocationChange={handleLocationChange}
            sortBy={sortBy}
            onSortChange={handleSortChange}
          />

          <EmpAppTable
            applicants={currentApplicants}
            openStatusId={openStatusId}
            statusDropUp={statusDropUp}
            onStatusOpen={handleStatusOpen}
            onStatusChange={handleStatusChange}
            onViewProfile={handleViewProfile}
          />

          <EmpAppPage
            currentPage={currentPage}
            totalPages={totalPages}
            startIndex={startIndex}
            totalApplicants={filteredApplicants.length}
            applicantsPerPage={applicantsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </div>
  );
};

export default EmpApplicants;

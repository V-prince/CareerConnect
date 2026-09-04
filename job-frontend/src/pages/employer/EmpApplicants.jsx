import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import EmpAppTab from "../../components/employer/EmpAppTab";
import EmpAppFilter from "../../components/employer/EmpAppFilter";
import EmpAppTable from "../../components/employer/EmpAppTable";
import EmpAppPage from "../../components/employer/EmpAppPage";
import { GetApplicationData, UpdateApplicationStatusAPI } from "../../Services/companeyService";
import toast from "react-hot-toast";
import { useAuth } from "../../store/UserContext";
import { GetAdminAppAndJOBDataApI } from "../../Services/adminService";



const statusNames = [
  "new",
  "pending",
  "shortlisted",
  "interview",
  "offered",
  "hired",
  "rejected",

];

const EmpApplicants = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const [applicants, setApplicants] = useState([]);
  const statusTabs = useMemo(() => {
    const counts = applicants?.reduce((acc, applicant) => {
      const status = applicant?.status?.toLowerCase();
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});

    return [
      {
        label: "All",
        value: "All",
        count: applicants.length,
      },
      ...statusNames.map((status) => ({
        label: status.charAt(0).toUpperCase() + status.slice(1),
        value: status,
        count: counts[status] || 0,
      })),
    ];
  }, [applicants]);

  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

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
          applicant?.candidate?.fullname?.toLowerCase().includes(value) ||
          applicant?.candidate?.email?.toLowerCase().includes(value) ||
          applicant?.job?.jobTitle?.toLowerCase().includes(value) ||
          applicant?.status?.toLowerCase().includes(value) ||
          applicant?.candidate?.skills?.some((skill) => skill.toLowerCase().includes(value))
        )
      });
    }

    
    if (locationFilter !== "All Location") {
      result = result.filter(
        (applicant) => applicant?.candidate?.location === locationFilter,
      );
    }

    if (sortBy === "Newest") {
      result.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
    }

    if (sortBy === "Oldest") {
      result.sort((a, b) => new Date(a?.createdAt) - new Date(b?.createdAt));
    }

    if (sortBy === "Name A-Z") {
      result.sort((a, b) => a?.candidate?.fullname.localeCompare(b?.candidate?.fullname));
    }

    if (sortBy === "Name Z-A") {
      result.sort((a, b) => b?.candidate?.fullname.localeCompare(b?.candidate?.fullname));
    }

    return result;
  }, [applicants, activeTab, search, locationFilter, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredApplicants.length / applicantsPerPage),
  );

  const startIndex = (currentPage - 1) * applicantsPerPage;

  const currentApplicants = filteredApplicants.slice(
    startIndex,
    startIndex + applicantsPerPage,
  );

  const handleStatusChange = async (id, newStatus) => {
    try {
      const data = await UpdateApplicationStatusAPI(id, newStatus)

      if (!data?.success) {
        return toast.error(data?.message);
      }

      setApplicants((prev) =>
        prev.map((applicant) =>
          applicant._id === id ? { ...applicant, status: newStatus } : applicant,
        ),
      );

      setOpenStatusId(null);
      toast.success("Application status updated");
    } catch (error) {
      console.log("update status err:", error)
    }

  };

  const handleStatusOpen = (id) => {
    setOpenStatusId((prev) => {
      if (prev === id) {
        return null;
      }

      const index = currentApplicants.findIndex(
        (applicant) => applicant._id === id,
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
    if (user.role === "employer") {
      navigate(`/employer/applicants/${applicant?.candidate?._id}`);
    }
    else if (user.role === "admin") {
      navigate(`/admin/applicants/${applicant?.candidate?._id}`);
    }
  };

  const locationOptions = useMemo(() => {
    const locations = new Set(applicants.map((applicant) => applicant?.candidate?.location).filter(Boolean));
    return [...Array.from(locations)];
  }, [applicants]);

  const getempApplicentData = async () => {
    try {

      if (user.role === "employer") {
        const data = await GetApplicationData()

        if (!data?.success) {
          return toast.error(data?.message)
        }

        setApplicants(data?.applications)
      }
      else if (user.role === "admin") {
        const data = await GetAdminAppAndJOBDataApI();

        if (!data.success) {
          return toast.error(data.message)
        }

        setApplicants(data?.applications)
      }
    } catch (err) {
      console.log("emp applicant err:", err)
    }
  }


  useEffect(() => {
    getempApplicentData()
  }, [])

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
            locationOptions={locationOptions}
            search={search}
            onSearchChange={handleSearchChange}
            locationFilter={locationFilter}
            onLocationChange={handleLocationChange}
            sortBy={sortBy}
            onSortChange={handleSortChange}
          />

          <EmpAppTable
            applicants={currentApplicants}
            openStatusId={openStatusId}
            user={user}
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

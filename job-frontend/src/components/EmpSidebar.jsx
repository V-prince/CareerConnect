import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  ClipboardList,
  Building2,
  Settings,
  Plus,
  ChevronDown,
} from "lucide-react";
import logo from "../../public/images/logo.png";

export const EmpSidebar = ({ isOpen, SetIsOpen }) => {
  const [jobsOpen, setJobsOpen] = useState(true);
  const [applicationsOpen, setApplicationsOpen] = useState(true);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-blue-50 text-blue-600"
        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
    }`;

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      {/* Logo */}
      <div className="h-32 border-b border-slate-200 flex items-center px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="JobSpark Logo"
            className="w-10 h-10 object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-xl font-bold text-slate-900">
              Job<span className="text-blue-600">Spark</span>
            </h1>

            <p className="text-[10px] text-slate-500 font-medium">
              Employer Portal
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        {/* Dashboard */}
        <NavLink to="/employer/dashboard" className={linkClass}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        {/* Jobs */}
        <div className="mt-2">
          <button
            onClick={() => setJobsOpen(!jobsOpen)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition"
          >
            <div className="flex items-center gap-3">
              <BriefcaseBusiness size={20} />
              <span>Jobs</span>
            </div>

            <ChevronDown
              size={17}
              className={`transition-transform duration-200 ${
                jobsOpen ? "rotate-0" : "-rotate-90"
              }`}
            />
          </button>

          {jobsOpen && (
            <div className="ml-11 mt-1 space-y-1">
              <NavLink
                to="/employer/jobs"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm transition ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-medium"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`
                }
              >
                All Jobs
              </NavLink>

              <NavLink
                to="/employer/jobs/post"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-medium"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`
                }
              >
                <Plus size={16} />
                Post New Job
              </NavLink>
            </div>
          )}
        </div>

        {/* Applications */}
        <div className="mt-2">
          <button
            onClick={() => setApplicationsOpen(!applicationsOpen)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition"
          >
            <div className="flex items-center gap-3">
              <ClipboardList size={20} />
              <span>Applications</span>
            </div>

            <ChevronDown
              size={17}
              className={`transition-transform duration-200 ${
                applicationsOpen ? "rotate-0" : "-rotate-90"
              }`}
            />
          </button>

          {applicationsOpen && (
            <div className="ml-11 mt-1 space-y-1">
              <NavLink
                to="/employer/applications"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm transition ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-medium"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`
                }
              >
                All Applications
              </NavLink>
            </div>
          )}
        </div>

        {/* Company Profile */}
        <NavLink to="/employer/company-profile" className={linkClass}>
          <Building2 size={20} />
          <span>Company Profile</span>
        </NavLink>

        {/* Settings */}
        <NavLink to="/employer/settings" className={linkClass}>
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </nav>
    </aside>
  );
};

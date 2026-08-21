import {
  BookmarkCheck,
  FileText,
  LayoutDashboard,
  Settings,
  User,
  UsersRound,
  X,
  BriefcaseBusiness,
  ClipboardList,
  Building2,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../store/UserContext";

export const Sidebar = ({ isOpen, SetIsOpen }) => {
  const [showJobs, setShowJobs] = useState(false);

  const { user } = useAuth();

  const sideData = [
    {
      icon: <LayoutDashboard />,
      title: "Dashboard",
      to: "/user/dashboard",
    },
    {
      icon: <User />,
      title: "Profile",
      to: "/user/profile",
    },
    {
      icon: <FileText />,
      title: "Applications",
      to: "/user/applications",
    },
    {
      icon: <BookmarkCheck />,
      title: "Saved Jobs",
      to: "/user/save/jobs",
    },
    {
      icon: <Settings />,
      title: "Settings",
      to: "/settings",
    },
  ];

  const AdminSideData = [
    {
      icon: <LayoutDashboard />,
      title: "Dashboard",
      to: "/admin/dashboard",
    },
    {
      icon: <UsersRound />,
      title: "Users",
      to: "/admin/manage/users",
    },
    {
      icon: <Settings />,
      title: "Settings",
      to: "/settings",
    },
  ];

  const EmployerSideData = [
    {
      icon: <LayoutDashboard />,
      title: "Dashboard",
      to: "/employer/dashboard",
    },
    {
      icon: <BriefcaseBusiness />,
      title: "Jobs",
      to: "/employer/jobs",
    },
    {
      icon: <ClipboardList />,
      title: "Applications",
      to: "/employer/applications",
    },
    {
      icon: <User />,
      title: "Profile",
      to: "/user/profile",
    },
    {
      icon: <Building2 />,
      title: "Company Profile",
      to: "/employer/company/profile",
    },
    {
      icon: <Settings />,
      title: "Settings",
      to: "/settings",
    },
  ];

  return (
    <section
      className={`fixed top-0 left-0 w-72 h-screen
      border-r border-zinc-200 bg-white
      transition-all duration-300 z-40
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0`}
    >
      <div
        onClick={() => SetIsOpen(false)}
        className="lg:hidden flex items-center justify-end p-3"
      >
        <X size={24} />
      </div>

      <div className="flex flex-col">
        <Link to={"/"}>
          <img
            src="/images/logo.png"
            alt="JobSpark"
            className="w-50 mx-auto py-6"
          />
        </Link>

        <div className="px-3 space-y-2">
          {user.role === "admin"
            ? AdminSideData.map((item, index) => (
              <NavLink
                to={item.to}
                key={index}
                className={({ isActive }) =>
                  `w-full flex items-center gap-6 px-10 py-3 rounded-xl border transition-all duration-300 ${isActive
                    ? "bg-blue-800 text-white border-blue-800"
                    : "text-gray-700 border-transparent hover:bg-blue-800 hover:text-white hover:border-blue-800"
                  }`
                }
              >
                {item.icon}

                <span className="text-xl hover:text-white font-medium">
                  {item.title}
                </span>
              </NavLink>
            ))
            : user.role === "employer"
              ? EmployerSideData.map((item, index) =>
                item.title === "Jobs" ? (
                  <div key={index}>
                    {/* JOBS */}
                    <button
                      onClick={() => setShowJobs(!showJobs)}
                      className="w-full flex items-center gap-6 px-10 py-3 rounded-xl border border-transparent transition-all duration-300 text-gray-700 hover:bg-blue-800 hover:text-white hover:border-blue-800"
                    >
                      {item.icon}

                      <span className="text-xl hover:text-white font-medium flex-1 text-left">
                        {item.title}
                      </span>

                      {showJobs ? (
                        <ChevronDown size={18} />
                      ) : (
                        <ChevronRight size={18} />
                      )}
                    </button>

                    {/* JOBS DROPDOWN */}
                    {showJobs && (
                      <div className="ml-14 mt-1 space-y-1">
                        {/* ALL JOBS */}
                        <NavLink
                          to="/employer/jobs"
                          className={({ isActive }) =>
                            `block px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                              ? "bg-blue-100 text-blue-800"
                              : "text-gray-600 hover:bg-gray-100"
                            }`
                          }
                        >
                          All Jobs
                        </NavLink>

                        {/* POST NEW JOB */}
                        <NavLink
                          to="/employer/post/job"
                          className={({ isActive }) =>
                            `block px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                              ? "bg-blue-100 text-blue-800"
                              : "text-gray-600 hover:bg-gray-100"
                            }`
                          }
                        >
                          Post New Job
                        </NavLink>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.to}
                    key={index}
                    className={({ isActive }) =>
                      `w-full flex items-center gap-6 px-10 py-3 rounded-xl border transition-all duration-300 ${isActive
                        ? "bg-blue-800 text-white border-blue-800"
                        : "text-gray-700 border-transparent hover:bg-blue-800 hover:text-white hover:border-blue-800"
                      }`
                    }
                  >
                    {item.icon}

                    <span className="text-xl hover:text-white font-medium">
                      {item.title}
                    </span>
                  </NavLink>
                ),
              )
              : /* NORMAL USER */
              sideData.map((item, index) => (
                <NavLink
                  to={item.to}
                  key={index}
                  className={({ isActive }) =>
                    `w-full flex items-center gap-6 px-10 py-3 rounded-xl border transition-all duration-300 ${isActive
                      ? "bg-blue-800 text-white border-blue-800"
                      : "text-gray-700 border-transparent hover:bg-blue-800 hover:text-white hover:border-blue-800"
                    }`
                  }
                >
                  {item.icon}

                  <span className="text-xl hover:text-white font-medium">
                    {item.title}
                  </span>
                </NavLink>
              ))}
        </div>
      </div>
    </section>
  );
};

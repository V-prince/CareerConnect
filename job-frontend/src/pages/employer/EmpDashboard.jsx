import React, { useState } from "react";
import {
  FaSearch,
  FaBriefcase,
  FaPlus,
  FaUsers,
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaUserTie,
} from "react-icons/fa";

import {
  MoreVertical,
  ChevronRight,
  ChevronLeft,
  ChevronDown as LDChevronDown,
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useNavigate } from "react-router-dom";

// MONTHLY APPLICATION DATA

const monthlyData = {
  "May 2024": [
    { day: "May 1", applications: 18 },
    { day: "May 5", applications: 32 },
    { day: "May 10", applications: 25 },
    { day: "May 15", applications: 48 },
    { day: "May 20", applications: 40 },
    { day: "May 25", applications: 56 },
    { day: "May 28", applications: 68 },
  ],

  "April 2024": [
    { day: "Apr 1", applications: 15 },
    { day: "Apr 5", applications: 28 },
    { day: "Apr 10", applications: 35 },
    { day: "Apr 15", applications: 42 },
    { day: "Apr 20", applications: 38 },
    { day: "Apr 25", applications: 52 },
    { day: "Apr 30", applications: 61 },
  ],

  "March 2024": [
    { day: "Mar 1", applications: 12 },
    { day: "Mar 5", applications: 25 },
    { day: "Mar 10", applications: 30 },
    { day: "Mar 15", applications: 37 },
    { day: "Mar 20", applications: 45 },
    { day: "Mar 25", applications: 50 },
    { day: "Mar 30", applications: 58 },
  ],

  "February 2024": [
    { day: "Feb 1", applications: 10 },
    { day: "Feb 5", applications: 22 },
    { day: "Feb 10", applications: 29 },
    { day: "Feb 15", applications: 34 },
    { day: "Feb 20", applications: 41 },
    { day: "Feb 25", applications: 46 },
    { day: "Feb 29", applications: 54 },
  ],
};

// STATS

const stats = [
  {
    title: "Active Jobs",
    value: "12",
    change: "2 this month",
    icon: FaBriefcase,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Total Applications",
    value: "248",
    change: "18 this month",
    icon: FaUsers,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Shortlisted",
    value: "36",
    change: "6 this month",
    icon: FaUserTie,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Interviews",
    value: "15",
    change: "3 this month",
    icon: FaCalendarAlt,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Hires",
    value: "4",
    change: "1 this month",
    icon: FaStar,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

// RECENT JOBS

const recentJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full Time",
    location: "Bengaluru",
    applications: 45,
    status: "Active",
    date: "May 26, 2024",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Remote",
    applications: 32,
    status: "Active",
    date: "May 24, 2024",
  },
  {
    id: 3,
    title: "Backend Developer",
    type: "Full Time",
    location: "Hyderabad",
    applications: 28,
    status: "Active",
    date: "May 22, 2024",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    type: "Full Time",
    location: "Pune",
    applications: 19,
    status: "Active",
    date: "May 21, 2024",
  },
  {
    id: 5,
    title: "Product Manager",
    type: "Full Time",
    location: "Mumbai",
    applications: 14,
    status: "Paused",
    date: "May 19, 2024",
  },
];

// RECENT APPLICATIONS

const recentApplications = [
  {
    id: 1,
    name: "Arjun Raj",
    job: "Frontend Developer",
    initials: "AR",
    bg: "bg-purple-100 text-purple-600",
    date: "2 min ago",
    status: "New",
    featured: true,
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    job: "UI/UX Designer",
    initials: "SK",
    bg: "bg-green-100 text-green-600",
    date: "15 min ago",
    status: "New",
    featured: true,
  },
  {
    id: 3,
    name: "Priya Mehta",
    job: "Backend Developer",
    initials: "PM",
    bg: "bg-orange-100 text-orange-600",
    date: "1 hour ago",
    status: "Shortlisted",
    featured: false,
  },
  {
    id: 4,
    name: "Rohan Singh",
    job: "DevOps Engineer",
    initials: "RS",
    bg: "bg-pink-100 text-pink-600",
    date: "2 hours ago",
    status: "New",
    featured: false,
  },
];

// QUICK ACTIONS

const quickActions = [
  {
    title: "Post a New Job",
    desc: "Create a new job listing",
    icon: FaPlus,
    iconBg: "bg-blue-100 text-blue-600",
    path: "/employer/post-job",
  },
  {
    title: "View All Applications",
    desc: "Review all job applications",
    icon: FaUsers,
    iconBg: "bg-green-100 text-green-600",
    path: "/employer/applications",
  },
  {
    title: "Shortlisted Candidates",
    desc: "View shortlisted candidates",
    icon: FaStar,
    iconBg: "bg-orange-100 text-orange-600",
    path: "/employer/applications",
  },
  {
    title: "Schedule Interview",
    desc: "Schedule an interview",
    icon: FaCalendarAlt,
    iconBg: "bg-purple-100 text-purple-600",
    path: "/employer/applications",
  },
];

export const EmpDashboard = () => {
  const navigate = useNavigate();
  const [period, setPeriod] = useState("May 2024");
  const [showPeriod, setShowPeriod] = useState(false);

  const periods = ["May 2024", "April 2024", "March 2024", "February 2024"];

  const statusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-50 text-green-700 border border-green-100";

      case "paused":
        return "bg-orange-50 text-orange-700 border border-orange-100";

      case "closed":
        return "bg-zinc-50 text-zinc-600 border border-zinc-200";

      default:
        return "bg-blue-50 text-blue-700";
    }
  };

  const appStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "new":
        return "bg-green-50 text-green-700 border border-green-100";

      case "shortlisted":
        return "bg-blue-50 text-blue-700 border border-blue-100";

      case "interview":
        return "bg-purple-50 text-purple-700 border border-purple-100";

      default:
        return "bg-zinc-50 text-zinc-600 border border-zinc-200";
    }
  };
  // CURRENT CHART DATA

  const currentData = monthlyData[period] || monthlyData["May 2024"];

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* =========================
          TOP HEADER
      ========================= */}

      <header className="bg-white border-b border-zinc-200 sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-end">
          {/* PROFILE */}
          <div
            onClick={() => navigate("/employer/profile")}
            className="flex items-center gap-2 md:gap-3 cursor-pointer rounded-xl px-2 py-1.5 hover:bg-zinc-50 transition"
          >
            {/* Profile Avatar */}
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
              T
            </div>

            {/* Profile Details */}
            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-semibold text-zinc-800">
                TechSolutions Inc.
              </p>

              <p className="text-[11px] text-zinc-500 mt-0.5">Employer</p>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}

      <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 py-7 md:py-9 border-b border-zinc-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-800 leading-tight">
              Welcome back, TechSolutions Inc.! 👋
            </h1>

            <p className="text-zinc-600 mt-2 text-sm md:text-base">
              Here's what's happening with your hiring today.
            </p>
          </div>
        </div>
      </section>

      {/* DASHBOARD BODY */}

      <section className="py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          {/* STATS */}

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4 mb-6 md:mb-7">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="bg-white rounded-xl border border-zinc-200 p-4 md:p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm text-zinc-500 truncate">
                        {stat.title}
                      </p>

                      <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mt-1.5 md:mt-2">
                        {stat.value}
                      </h2>

                      <p className="text-[11px] md:text-xs text-green-600 font-medium mt-1.5 flex items-center gap-1">
                        <FaArrowRight size={9} className="-rotate-45" />↑{" "}
                        {stat.change}
                      </p>
                    </div>

                    <div
                      className={`w-11 h-11 md:w-12 md:h-12 rounded-xl ${stat.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <Icon size={20} className={stat.iconColor} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* APPLICATION OVERVIEW
              KEEP THIS CHART*/}

          <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 md:p-5 mb-6 md:mb-7">
            <div className="flex items-center justify-between mb-5 md:mb-6">
              <div>
                <h2 className="text-base md:text-lg font-bold text-zinc-800">
                  Applications Overview
                </h2>

                <p className="text-xs md:text-sm text-zinc-500 mt-0.5">
                  Monthly application trends
                </p>
              </div>

              {/* MONTH DROPDOWN */}

              <div className="relative">
                <button
                  onClick={() => setShowPeriod(!showPeriod)}
                  className="h-9 px-3 rounded-lg bg-white border border-zinc-200 text-xs md:text-sm font-medium text-zinc-700 flex items-center gap-2 hover:bg-zinc-50"
                >
                  {period}

                  <LDChevronDown size={14} className="text-zinc-400" />
                </button>

                {showPeriod && (
                  <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg border border-zinc-200 shadow-md py-1 z-20">
                    {periods.map((p) => (
                      <button
                        key={p}
                        onClick={() => {
                          setPeriod(p);
                          setShowPeriod(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs md:text-sm transition ${
                          period === p
                            ? "bg-indigo-50 text-indigo-700 font-semibold"
                            : "text-zinc-700 hover:bg-zinc-50"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CHART */}

            <div className="h-[260px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={currentData}
                  margin={{
                    top: 10,
                    right: 10,
                    left: -10,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="applicationsGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#4F46E5"
                        stopOpacity={0.25}
                      />

                      <stop offset="100%" stopColor="#4F46E5" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#E4E4E7"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="day"
                    tick={{
                      fontSize: 11,
                      fill: "#71717a",
                    }}
                    axisLine={{
                      stroke: "#E4E4E7",
                    }}
                    tickLine={false}
                  />

                  <YAxis
                    tick={{
                      fontSize: 11,
                      fill: "#71717a",
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid #e4e4e7",
                      boxShadow:
                        "0 10px 25px -5px rgba(0,0,0,0.07), 0 4px 10px rgba(0,0,0,0.04)",
                      fontSize: 12,
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="applications"
                    stroke="#4F46E5"
                    strokeWidth={3}
                    fill="url(#applicationsGrad)"
                    activeDot={{
                      r: 5,
                      fill: "#4F46E5",
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* QUICK ACTIONS */}

          <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 md:p-5 mb-6 md:mb-7">
            <div className="mb-4 md:mb-5">
              <h2 className="text-base md:text-lg font-bold text-zinc-800">
                Quick Actions
              </h2>

              <p className="text-xs md:text-sm text-zinc-500 mt-0.5">
                Frequently used actions
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-2">
              {quickActions.map((act) => {
                const Icon = act.icon;

                return (
                  <button
                    key={act.title}
                    onClick={() => navigate(act.path)}
                    className="w-full flex items-center gap-3 md:gap-4 p-3 md:p-3.5 rounded-xl border border-zinc-200 hover:border-indigo-200 hover:bg-indigo-50/40 transition group text-left"
                  >
                    <div
                      className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center shrink-0 ${act.iconBg}`}
                    >
                      <Icon size={18} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm md:text-[15px] font-semibold text-zinc-800 group-hover:text-indigo-700 transition">
                        {act.title}
                      </p>

                      <p className="text-xs md:text-[12px] text-zinc-500 mt-0.5">
                        {act.desc}
                      </p>
                    </div>

                    <ChevronRight
                      size={17}
                      className="text-zinc-300 group-hover:text-indigo-500 transition"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid xl:grid-cols-3 gap-5 md:gap-6">
            {/* RECENT JOB POSTINGS*/}

            <div className="xl:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm">
              <div className="flex items-center justify-between p-4 md:p-5 border-b border-zinc-100">
                <div>
                  <h2 className="text-base md:text-lg font-bold text-zinc-800">
                    Recent Job Postings
                  </h2>

                  <p className="text-xs md:text-sm text-zinc-500 mt-0.5">
                    Manage your recently posted jobs
                  </p>
                </div>

                <button
                  onClick={() => navigate("/employer/manage-jobs")}
                  className="flex items-center gap-1 text-xs md:text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition"
                >
                  View All Jobs
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-100 bg-zinc-50/50">
                      <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase text-zinc-500">
                        Job Title
                      </th>

                      <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase text-zinc-500">
                        Applications
                      </th>

                      <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase text-zinc-500">
                        Status
                      </th>

                      <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase text-zinc-500">
                        Posted On
                      </th>

                      <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase text-zinc-500">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentJobs.map((job) => (
                      <tr
                        key={job.id}
                        className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                              <FaBriefcase size={13} />
                            </div>

                            <div>
                              <p className="font-semibold text-sm md:text-[15px] text-zinc-800">
                                {job.title}
                              </p>

                              <p className="text-[11px] md:text-xs text-zinc-500 mt-0.5 flex items-center gap-1">
                                {job.type} •
                                <FaMapMarkerAlt size={9} />
                                {job.location}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <FaUsers size={12} className="text-zinc-400" />

                            <span className="font-medium text-sm text-zinc-700">
                              {job.applications}
                            </span>
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex px-3 py-1 rounded-full text-[11px] font-semibold ${statusColor(
                              job.status,
                            )}`}
                          >
                            {job.status}
                          </span>
                        </td>

                        <td className="px-5 py-4 text-xs md:text-sm text-zinc-500">
                          {job.date}
                        </td>

                        <td className="px-5 py-4 text-right">
                          <button className="p-1.5 rounded-lg hover:bg-zinc-100 transition">
                            <MoreVertical size={18} className="text-zinc-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* RECENT APPLICATIONS */}

            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 md:p-5">
              <div className="flex items-center justify-between mb-4 md:mb-5">
                <div>
                  <h2 className="text-base md:text-lg font-bold text-zinc-800">
                    Recent Applications
                  </h2>

                  <p className="text-xs md:text-sm text-zinc-500 mt-0.5">
                    Latest candidates
                  </p>
                </div>

                <button
                  onClick={() => navigate("/employer/applications")}
                  className="flex items-center gap-1 text-xs md:text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition"
                >
                  View All
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="space-y-2 md:space-y-2.5">
                {recentApplications.map((app) => (
                  <div
                    key={app.id}
                    onClick={() => navigate("/employer/applications")}
                    className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-zinc-50 transition cursor-pointer border border-transparent hover:border-zinc-100"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${app.bg}`}
                      >
                        {app.initials}
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm md:text-[15px] font-semibold text-zinc-800 truncate flex items-center gap-1">
                          {app.name}

                          {app.featured && (
                            <span className="text-indigo-500 text-[10px]">
                              <FaStar />
                            </span>
                          )}
                        </p>

                        <p className="text-[11px] md:text-xs text-zinc-500 truncate">
                          {app.job}
                        </p>

                        <p className="text-[10px] md:text-[11px] text-zinc-400 mt-0.5">
                          {app.date}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-[10px] md:text-[11px] font-semibold whitespace-nowrap ${appStatusColor(
                        app.status,
                      )}`}
                    >
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpDashboard;

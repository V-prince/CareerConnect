import React from "react";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  Building2,
  Settings,
  ChevronDown,
  ChevronRight,
  CalendarDays,
  Users,
  UserCheck,
  ClipboardList,
  CheckCircle,
  MoreVertical,
  Bell,
  Search,
  Plus,
} from "lucide-react";

const Emp-dashboard = () => {
  const stats = [
    {
      title: "Active Jobs",
      value: "12",
      change: "↑ 2 this week",
      icon: BriefcaseBusiness,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Applications",
      value: "248",
      change: "↑ 18 this week",
      icon: Users,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Shortlisted",
      value: "36",
      change: "↑ 6 this week",
      icon: UserCheck,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Interviews",
      value: "15",
      change: "↑ 3 this week",
      icon: CalendarDays,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
    {
      title: "Hires",
      value: "4",
      change: "↑ 1 this week",
      icon: CheckCircle,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
    },
  ];

  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full Time",
      location: "Bengaluru",
      applications: 45,
      status: "Active",
      date: "May 26, 2024",
    },
    {
      title: "UI/UX Designer",
      type: "Full Time",
      location: "Remote",
      applications: 32,
      status: "Active",
      date: "May 24, 2024",
    },
    {
      title: "Backend Developer",
      type: "Full Time",
      location: "Hyderabad",
      applications: 28,
      status: "Active",
      date: "May 22, 2024",
    },
    {
      title: "DevOps Engineer",
      type: "Full Time",
      location: "Pune",
      applications: 19,
      status: "Active",
      date: "May 21, 2024",
    },
    {
      title: "Product Manager",
      type: "Full Time",
      location: "Mumbai",
      applications: 14,
      status: "Paused",
      date: "May 19, 2024",
    },
  ];

  const applications = [
    {
      name: "Arjun Raj",
      job: "Frontend Developer",
      time: "2 min ago",
      initials: "AR",
    },
    {
      name: "Sneha Kapoor",
      job: "UI/UX Designer",
      time: "15 min ago",
      initials: "SK",
    },
    {
      name: "Priya Mehta",
      job: "Backend Developer",
      time: "1 hour ago",
      initials: "PM",
    },
    {
      name: "Rohan Singh",
      job: "DevOps Engineer",
      time: "2 hours ago",
      initials: "RS",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= TOP HEADER ================= */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-5 lg:px-7 sticky top-0 z-40">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <BriefcaseBusiness
              size={22}
              className="text-white"
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-xl font-bold text-slate-900">
              Career<span className="text-blue-600">Connect</span>
            </h1>

            <p className="text-[10px] text-slate-500">
              Employer Portal
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center w-[360px] lg:w-[430px] bg-slate-50 border border-slate-200 rounded-lg px-4 h-10">
          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search for candidates, jobs, applications..."
            className="ml-3 w-full bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Notification */}
          <button className="relative text-slate-600 hover:text-blue-600 transition">
            <Bell size={21} />

            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <button className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-semibold">
              T
            </div>

            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-slate-900">
                TechSolutions Inc.
              </p>

              <p className="text-xs text-slate-500">
                Employer
              </p>
            </div>

            <ChevronDown
              size={17}
              className="text-slate-500"
            />
          </button>
        </div>
      </header>

      <div className="flex">

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden lg:block w-60 bg-white border-r border-slate-200 min-h-[calc(100vh-64px)]">

          <nav className="p-4 space-y-2">

            {/* Dashboard */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-semibold text-sm">
              <LayoutDashboard size={19} />
              Dashboard
            </button>

            {/* Jobs */}
            <div className="pt-3">

              <p className="px-4 mb-2 text-xs font-semibold text-slate-400 uppercase">
                Jobs
              </p>

              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 text-sm">
                <BriefcaseBusiness size={18} />
                All Jobs
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 text-sm">
                <Plus size={18} />
                Post New Job
              </button>
            </div>

            {/* Applications */}
            <div className="pt-3">

              <p className="px-4 mb-2 text-xs font-semibold text-slate-400 uppercase">
                Applications
              </p>

              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 text-sm">
                <FileText size={18} />
                All Applications
              </button>
            </div>

            {/* Company */}
            <div className="pt-3">

              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 text-sm">
                <Building2 size={18} />
                Company Profile
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 text-sm">
                <Settings size={18} />
                Settings
              </button>

            </div>

          </nav>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 min-w-0 p-5 md:p-7 lg:p-8">

          {/* Welcome */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Welcome back, TechSolutions Inc.! 👋
              </h2>

              <p className="text-slate-600 mt-2 text-sm md:text-base">
                Here's what's happening with your hiring today.
              </p>
            </div>

            {/* Date */}
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-blue-400 transition">
              <CalendarDays size={17} />

              May 22 – May 28, 2024

              <ChevronDown size={16} />
            </button>

          </div>

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-7">

            {stats.map((stat, index) => {

              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition"
                >

                  <div className="flex items-center gap-4">

                    <div
                      className={`w-12 h-12 rounded-full ${stat.iconBg} flex items-center justify-center`}
                    >
                      <Icon
                        size={22}
                        className={stat.iconColor}
                      />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500 font-medium">
                        {stat.title}
                      </p>

                      <p className="text-2xl font-bold text-slate-900 mt-1">
                        {stat.value}
                      </p>
                    </div>

                  </div>

                  <p className="text-xs text-emerald-600 font-medium mt-4">
                    {stat.change}
                  </p>

                </div>
              );
            })}

          </div>

          {/* ================= LOWER CONTENT ================= */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* Recent Jobs */}
            <section className="xl:col-span-2 bg-white border border-slate-200 rounded-xl overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">

                <h3 className="font-bold text-slate-900">
                  Recent Job Postings
                </h3>

                <button className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                  View All Jobs
                  <ChevronRight size={16} />
                </button>

              </div>

              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">

                <table className="w-full">

                  <thead>
                    <tr className="border-b border-slate-100">

                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500">
                        Job Title
                      </th>

                      <th className="text-center px-4 py-3 text-xs font-semibold text-slate-500">
                        Applications
                      </th>

                      <th className="text-center px-4 py-3 text-xs font-semibold text-slate-500">
                        Status
                      </th>

                      <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500">
                        Posted On
                      </th>

                      <th></th>

                    </tr>
                  </thead>

                  <tbody>

                    {jobs.map((job, index) => (

                      <tr
                        key={index}
                        className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition"
                      >

                        <td className="px-5 py-4">

                          <p className="font-semibold text-sm text-slate-900">
                            {job.title}
                          </p>

                          <p className="text-xs text-slate-500 mt-1">
                            {job.type} • {job.location}
                          </p>

                        </td>

                        <td className="text-center px-4 py-4">
                          <span className="font-semibold text-sm text-slate-700">
                            {job.applications}
                          </span>
                        </td>

                        <td className="text-center px-4 py-4">

                          <span
                            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                              job.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {job.status}
                          </span>

                        </td>

                        <td className="px-4 py-4 text-sm text-slate-600">
                          {job.date}
                        </td>

                        <td className="px-4 py-4">

                          <button className="text-slate-500 hover:text-slate-900">
                            <MoreVertical size={18} />
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

              {/* Mobile cards */}
              <div className="md:hidden divide-y divide-slate-100">

                {jobs.map((job, index) => (

                  <div
                    key={index}
                    className="p-4"
                  >

                    <div className="flex justify-between gap-3">

                      <div>
                        <h4 className="font-semibold text-sm text-slate-900">
                          {job.title}
                        </h4>

                        <p className="text-xs text-slate-500 mt-1">
                          {job.type} • {job.location}
                        </p>
                      </div>

                      <button>
                        <MoreVertical size={18} />
                      </button>

                    </div>

                    <div className="flex items-center justify-between mt-4">

                      <span className="text-xs text-slate-500">
                        {job.applications} Applications
                      </span>

                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          job.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {job.status}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </section>

            {/* ================= RECENT APPLICATIONS ================= */}
            <section className="bg-white border border-slate-200 rounded-xl overflow-hidden">

              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">

                <h3 className="font-bold text-slate-900">
                  Recent Applications
                </h3>

                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                  View All
                </button>

              </div>

              <div className="divide-y divide-slate-100">

                {applications.map((application, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3 px-5 py-4 hover:bg-slate-50 transition"
                  >

                    {/* Avatar */}
                    <div
                      className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-semibold text-sm ${
                        index % 3 === 0
                          ? "bg-purple-100 text-purple-700"
                          : index % 3 === 1
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {application.initials}
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1">

                      <p className="text-sm font-semibold text-slate-900">
                        {application.name}
                      </p>

                      <p className="text-xs text-slate-600 truncate">
                        {application.job}
                      </p>

                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {application.time}
                      </p>

                    </div>

                    {/* Status */}
                    <span
                      className={`hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        index === 2
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {index === 2 ? "Shortlisted" : "New"}
                    </span>

                  </div>

                ))}

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  );
};

export default Emp-dashboard;
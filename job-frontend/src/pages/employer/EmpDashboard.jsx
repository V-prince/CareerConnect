import React, { useState } from "react";

import {
  FaBriefcase,
  FaPlus,
  FaUsers,
  FaStar,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import EmpHeader from "../../components/employer/EmpHeader";
import DashboardData from "../../components/employer/DashboardData";
import Application from "../../components/employer/Application";
import QuickActions from "../../components/employer/QuickActions";
import RecentJobs from "../../components/employer/RecentJobs";
import RecentApplications from "../../components/employer/RecentApplications";
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
const quickActions = [
  {
    title: "Post a New Job",
    desc: "Create a new job listing",
    icon: FaPlus,
    iconBg: "bg-blue-100 text-blue-600",
    path: "/employer/post/job",
  },
  {
    title: "View All Applications",
    desc: "Review all job applications",
    icon: FaUsers,
    iconBg: "bg-green-100 text-green-600",
    path: "/employer/applicants",
  },
  {
    title: "Shortlisted Candidates",
    desc: "View shortlisted candidates",
    icon: FaStar,
    iconBg: "bg-orange-100 text-orange-600",
    path: "/employer/applicants",
  },
  {
    title: "Schedule Interview",
    desc: "Schedule an interview",
    icon: FaCalendarAlt,
    iconBg: "bg-purple-100 text-purple-600",
    path: "/employer/applicants",
  },
];
export const EmpDashboard = () => {
  const navigate = useNavigate();

  const [period, setPeriod] = useState("May 2024");
  const [showPeriod, setShowPeriod] = useState(false);

  const periods = ["May 2024", "April 2024", "March 2024", "February 2024"];

  const currentData = monthlyData[period] || monthlyData["May 2024"];

  return (
    <div className="min-h-screen bg-zinc-50">
      <EmpHeader />
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
      <section className="py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <DashboardData stats={stats} />
          <Application
            period={period}
            setPeriod={setPeriod}
            showPeriod={showPeriod}
            setShowPeriod={setShowPeriod}
            periods={periods}
            currentData={currentData}
          />
          <QuickActions quickActions={quickActions} navigate={navigate} />

          <div className="grid xl:grid-cols-3 gap-5 md:gap-6">
            <RecentJobs recentJobs={recentJobs} navigate={navigate} />

            <RecentApplications
              recentApplications={recentApplications}
              navigate={navigate}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpDashboard;

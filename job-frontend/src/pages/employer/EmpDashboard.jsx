import React, { useEffect, useState } from "react";

import {
  FaBriefcase,
  FaPlus,
  FaUsers,
  FaStar,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import DashboardData from "../../components/employer/DashboardData";
import Application from "../../components/employer/Application";
import QuickActions from "../../components/employer/QuickActions";
import RecentJobs from "../../components/employer/RecentJobs";
import RecentApplications from "../../components/employer/RecentApplications";
import { GetApplicationData, GetDashboardData, GetJobData } from "../../Services/companeyService";
import toast from "react-hot-toast";

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

  const currentYear = new Date().getFullYear();
  const [showYear, setShowYear] = useState(false)
  const [year, setYear] = useState(currentYear)
  const [data, setData] = useState(null)
  const years = [2026, 2025, 2024, 2023];

  const [recentJobs, setRecentJobs] = useState([])
  const [recentApplications, setRecentApplications] = useState([])

  const stats = [
    {
      title: "Active Jobs",
      value: data?.status?.ActiveJobs,
      change: "2 this month",
      icon: FaBriefcase,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Applications",
      value: data?.status?.totalApplications,
      change: "18 this month",
      icon: FaUsers,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Shortlisted",
      value: data?.status?.shortListed,
      change: "6 this month",
      icon: FaUserTie,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Interviews",
      value: data?.status?.interviews,
      change: "3 this month",
      icon: FaCalendarAlt,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Hires",
      value: data?.status?.hired,
      change: "1 this month",
      icon: FaStar,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
    },
  ];


  const getCompaneydata = async () => {
    try {
      const data = await GetDashboardData(year);
      if (!data.success) {
        return toast.error(data.message);
      }
      setData(data)
    } catch (error) {
      console.log("companey dashborde err:", error)
    }
  }

  const getRecentJobDatas = async () => {
    try {
      const data = await GetJobData();
      if (!data.success) {
        return toast.error(data.message);
      }
      setRecentJobs(data?.jobs)

    } catch (error) {
      console.log("companey recentdata err:", error)
    }
  }

  const getApplications = async () => {
    try {
      const data = await GetApplicationData();
      if (!data.success) {
        return toast.error(data.message);
      }
      setRecentApplications(data?.applications)
    } catch (error) {
      console.log("companey recentdata err:", error)
    }
  }

  useEffect(() => {
    getCompaneydata()
  }, [year])


  useEffect(() => {
    getRecentJobDatas()
    getApplications()
  }, [])

  return (
    <div className="min-h-screen  mt-16 w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-700 to-indigo-800 py-7 md:py-9 border-b border-indigo-800">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-24 right-40 w-48 h-48 rounded-full bg-white/5"></div>
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-blue-100 text-sm font-medium mb-1">
                Employer Dashboard
              </p>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Welcome back,
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <DashboardData stats={stats} />
          <Application
            year={year}
            setYear={setYear}
            showYear={showYear}
            setShowYear={setShowYear}
            years={years}
            currentData={data?.graphData || []}
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

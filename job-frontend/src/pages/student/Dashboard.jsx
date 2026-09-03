import { icons } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GetDashboardSatusData, GetJobApplyAPI } from '../../Services/candidateService'

export const Dashboard = () => {

  const [statusData, setStatusData] = useState([]);
  const [JobData, setJobData] = useState([]);

  const navigate = useNavigate();

  const getDashbordStatus = async () => {
    try {
      const data = await GetDashboardSatusData();
      if (!data.success) {
        return console.log(data.message)
      }
      setStatusData(data?.status)
    } catch (error) {
      console.log(error)
    }
  }

  const getApplications = async () => {
    try {
      const data = await GetJobApplyAPI()
      if (!data.success) {
        return console.log(data.message)
      }
      setJobData(data?.applications)
    }
    catch (error) {
      console.log(error)
    }
  }

  const statusClass = {
    new: "text-orange-600 bg-orange-100",
    pending: "text-yellow-700 bg-yellow-100",
    shortlisted: "text-green-700 bg-green-100",
    interview: "text-purple-700 bg-purple-100",
    rejected: "text-red-700 bg-red-100",
    hired: "text-emerald-700 bg-emerald-100",

  };

  useEffect(() => {
    getDashbordStatus()
    getApplications()
  }, [])



  return (
    <section className="min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-white mt-16 p-2 mdp-8">
      <div className="p-4 md:p-6 lg:p-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          Welcome back, Prince!
        </h1>

        <p className="text-zinc-600 mt-2 text-sm md:text-base">
          Here's what's happening with your career journey
        </p>



        <div className="bg-white rounded-xl shadow-md mt-8 p-5">

          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-lg md:text-xl">
              Recent Applications
            </h2>

            <Link to={"/user/applications"} className="text-indigo-600 font-medium cursor-pointer hover:text-indigo-700 transition">
              View All
            </Link>
          </div>

          {
            JobData.length > 0 ? (

              JobData.map((job, index) => (
                <div onClick={() => navigate("/user/applications")} key={index} className='hover:bg-zinc-50 px-5 cursor-pointer'>

                  <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 ${index === JobData.length - 1 ? "border-none" : "border-b"} py-6 border-zinc-200 `}>


                    <div className="flex items-center gap-5">
                      <img
                        src={job?.job?.company?.logo}
                        alt="Google"
                        className="w-10 h-10 object-contain"
                      />

                      <div>
                        <h3 className="font-semibold text-base md:text-lg">
                          {job?.job?.jobTitle}
                        </h3>

                        <p className="text-sm text-zinc-500">
                          {job?.job?.company?.companyName} • {job?.job?.location}
                        </p>
                      </div>
                    </div>


                    <div className="flex flex-wrap items-center gap-3 lg:gap-5">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${statusClass[job?.status?.toLowerCase()] ||
                        "text-zinc-600 bg-zinc-100"
                        }`}>
                        {job?.status.toLowerCase() === "new" ? "Applied" : job?.status}
                      </span>

                      <p className="text-zinc-500 text-sm">
                        {job.date}
                      </p>
                    </div>

                  </div>
                </div>

              ))) : (
              <div className="bg-white border border-zinc-200 rounded-xl p-10 text-center">
                <h3 className="text-lg font-semibold text-zinc-700">
                  No Applications Found
                </h3>

                <p className="text-sm text-zinc-500 mt-1">
                  You haven't applied for any jobs yet.
                </p>
              </div>
            )}
        </div>

        <div className="bg-white border border-zinc-200 shadow-lg rounded-2xl p-6 mt-5">
          <h2 className="text-xl font-bold text-zinc-800">
            Application Status Overview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

            <div className="flex flex-col items-center justify-center p-5 rounded-xl border border-green-200 shadow-xl bg-green-50 hover:shadow-md transition">
              <span className="text-sm font-semibold text-green-600 uppercase">
                Applied
              </span>
              <p className="text-3xl font-bold text-green-700 mt-2">{statusData.find((item) => item.status === "new")?.jobStatus || 0}</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-xl border border-yellow-200 shadow-xl bg-yellow-50 hover:shadow-md transition">
              <span className="text-sm font-semibold text-yellow-600 uppercase">
                Pending
              </span>
              <p className="text-3xl font-bold text-yellow-700 mt-2">{statusData.find((item) => item.status === "pending")?.jobStatus || 0}</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-xl border border-blue-200 shadow-xl bg-blue-50 hover:shadow-md transition">
              <span className="text-sm font-semibold text-blue-600 uppercase">
                Interview
              </span>
              <p className="text-3xl font-bold text-blue-700 mt-2">{statusData.find((item) => item.status === "interview")?.jobStatus || 0}</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-xl border border-red-200 shadow-xl bg-red-50 hover:shadow-md transition">
              <span className="text-sm font-semibold text-red-600 uppercase">
                Rejected
              </span>
              <p className="text-3xl font-bold text-red-700 mt-2">{statusData.find((item) => item.status === "rejected")?.jobStatus || 0}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

import { icons } from 'lucide-react'
import React from 'react'

export const Dashboard = () => {


  const JobData = [
    {
      icon: "/images/google.png",
      title: "Software Engineering Intern",
      companey: "Google",
      city: "Bangaluru",
      state: "Karnataka",
      status: "Under Review",
      date: "2 days ago"
    },
    {
      icon: "/images/microsoft.png",
      title: "Product Management Intern",
      companey: "Microsoft",
      city: "Hydrabad",
      state: "Telangana",
      status: "Shortlisted",
      date: "2 days ago"
    },
    {
      icon: "/images/Swiggy.png",
      title: "Marketing Intern",
      companey: "Swiggy",
      city: "Bangaluru",
      state: "Karnataka",
      status: "Applied",
      date: "2 days ago"
    },
    {
      icon: "/images/zomato.png",
      title: "Business Analyst Intern",
      companey: "Zomato",
      city: "Gurugram",
      state: "Haryana",
      status: "Under Review",
      date: "2 days ago"
    },
    {
      icon: "/images/delloit.png",
      title: "Finance intern",
      companey: "Deloitte",
      city: "Bangaluru",
      state: "Karnataka",
      status: "Under Review",
      date: "2 days ago"
    },

  ]




  return (
    <section className="min-h-screen bg-gray-100">

      <div className="flex items-center justify-end gap-3 p-4 bg-white shadow-sm">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover"
        />

        <div>
          <h2 className="font-bold text-sm md:text-base">Prince Vadher</h2>
          <p className="text-zinc-500 text-xs md:text-sm">Student</p>
        </div>
      </div>


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

            <button className="text-indigo-600 font-medium hover:text-indigo-700 transition">
              View All
            </button>
          </div>

          {JobData.map((job, index) => (

            <div key={index} className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 ${index === JobData.length - 1 ? "border-none" : "border-b"} py-6 border-zinc-200`}>


              <div className="flex items-center gap-5">
                <img
                  src={job.icon}
                  alt="Google"
                  className="w-10 h-10 object-contain"
                />

                <div>
                  <h3 className="font-semibold text-base md:text-lg">
                    {job.title}
                  </h3>

                  <p className="text-sm text-zinc-500">
                    {job.companey} • {job.city}, {job.state}
                  </p>
                </div>
              </div>


              <div className="flex flex-wrap items-center gap-3 lg:gap-5">
                <span className={`px-3 py-1 rounded-full  ${job.status.toLocaleLowerCase() === "under review" ? "text-indigo-600 bg-indigo-100" : job.status.toLocaleLowerCase() === "applied" ? "text-orange-500 bg-amber-100" : job.status.toLocaleLowerCase() === "shortlisted" ? "text-green-600 bg-green-100" : ""}   text-sm font-semibold`}>
                  {job.status}
                </span>

                <p className="text-zinc-500 text-sm">
                  {job.date}
                </p>
              </div>

            </div>

          ))}
        </div>

        <div className="bg-white border border-zinc-200 shadow-lg rounded-2xl p-6 mt-5">
          <h2 className="text-xl font-bold text-zinc-800">
            Application Status Overview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

            <div className="flex flex-col items-center justify-center p-5 rounded-xl border border-green-200 bg-green-50 hover:shadow-md transition">
              <span className="text-sm font-semibold text-green-600 uppercase">
                Applied
              </span>
              <p className="text-3xl font-bold text-green-700 mt-2">5</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-xl border border-yellow-200 bg-yellow-50 hover:shadow-md transition">
              <span className="text-sm font-semibold text-yellow-600 uppercase">
                Pending
              </span>
              <p className="text-3xl font-bold text-yellow-700 mt-2">2</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-xl border border-blue-200 bg-blue-50 hover:shadow-md transition">
              <span className="text-sm font-semibold text-blue-600 uppercase">
                Interview
              </span>
              <p className="text-3xl font-bold text-blue-700 mt-2">1</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-xl border border-red-200 bg-red-50 hover:shadow-md transition">
              <span className="text-sm font-semibold text-red-600 uppercase">
                Rejected
              </span>
              <p className="text-3xl font-bold text-red-700 mt-2">3</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

import { Users } from 'lucide-react'
import React from 'react'
import  {AdminAreaChart}  from '../../components/charts/AreaChart';

export const AdminDashboard = () => {

  const UserCounts = [
    {
      icon: <Users />,
      title: "Total Users",
      count: 12450,
      bgColor: "bg-purple-500"
    },
    {
      icon: <Users />,
      title: "Total Jobs",
      count: 12450,
      bgColor: "bg-blue-500"
    },
    {
      icon: <Users />,
      title: "Total Applications",
      count: 12450,
      bgColor: "bg-green-500"
    },
    {
      icon: <Users />,
      title: "Total Companes",
      count: 12450,
      bgColor: "bg-orange-500"
    }

  ]

  const Chartdata = [
    { day: "Mon", users: 1200, jobs: 200, applications: 450 },
    { day: "Tue", users: 1500, jobs: 250, applications: 500 },
    { day: "Wed", users: 1800, jobs: 300, applications: 650 },
    { day: "Thu", users: 2100, jobs: 350, applications: 700 },
    { day: "Fri", users: 2500, jobs: 400, applications: 900 },
    { day: "Sat", users: 2800, jobs: 500, applications: 1100 },
    { day: "Sun", users: 3200, jobs: 600, applications: 1300 },
  ];


  return (
    <section className="min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-white mt-16 p-8">

      <h1 className="text-2xl md:text-3xl font-bold">
        Admin Dashboard
      </h1>

      <p className="text-zinc-600 mt-2 text-sm md:text-base">
        Welcome to the Admin Dashboard. Here what's happening in the system.
      </p>


      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">

        {UserCounts.map((data, index) => (
          <div key={index} className="bg-white rounded-xl hover:shadow-2xl shadow-md p-6 flex items-center gap-4">
            <div className={`flex h-12 w-12 rounded-full ${data.bgColor} text-white items-center justify-center gap-4`}>
              {data.icon}
            </div>
            <div className="flex flex-col gap-1">
              <span className='text-zinc-600 text-md'>{data.title}</span>
              <span className='text-2xl font-bold'>{data.count}</span>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h2 className='text-xl font-bold mt-5'>Overview Analytics</h2>
        <AdminAreaChart data={Chartdata}/>
      </div>


      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

        
        <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-4 sm:p-6">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900">
              Recent Applications
            </h2>

            <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
              View All
            </button>
          </div>


         
          <div className="hidden sm:grid grid-cols-4 gap-4 bg-zinc-100 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-600">
            <p>Candidate</p>
            <p>Job</p>
            <p>Applied Date</p>
            <p>Status</p>
          </div>


          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 items-center px-4 py-4 border-b border-zinc-100 hover:bg-zinc-50 transition">

            <div>
              <h3 className="font-medium text-zinc-900">
                Prince Vadher
              </h3>
              <p className="text-xs text-zinc-500">
                React Developer
              </p>
            </div>

            <p className="text-zinc-700">
              Frontend Developer
            </p>

            <p className="text-zinc-500">
              15 Aug 2026
            </p>

            <span className="w-fit px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              Reviewing
            </span>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 items-center px-4 py-4 hover:bg-zinc-50 transition">

            <div>
              <h3 className="font-medium text-zinc-900">
                Rahul Patel
              </h3>
              <p className="text-xs text-zinc-500">
                Node Developer
              </p>
            </div>

            <p className="text-zinc-700">
              Backend Developer
            </p>

            <p className="text-zinc-500">
              13 Aug 2026
            </p>

            <span className="w-fit px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              Selected
            </span>

          </div>

        </div>



       
        <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-4 sm:p-6">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">

            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900">
              Recent Job Postings
            </h2>

            <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
              View All
            </button>

          </div>


          
          <div className="hidden sm:grid grid-cols-4 gap-4 bg-zinc-100 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-600">

            <p>Job Title</p>
            <p>Company</p>
            <p>Post Date</p>
            <p>Status</p>

          </div>



          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 items-center px-4 py-4 border-b border-zinc-100 hover:bg-zinc-50 transition">

            <h3 className=" text-blue-500 font-semibold">
              Frontend Developer
            </h3>

            <p className="text-zinc-700">
              Google
            </p>

            <p className="text-zinc-500">
              15 Aug 2026
            </p>

            <span className="w-fit px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              Active
            </span>

          </div>



          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 items-center px-4 py-4 hover:bg-zinc-50 transition">

            <h3 className="text-blue-500 font-semibold">
              Backend Developer
            </h3>

            <p className="text-zinc-700">
              Microsoft
            </p>

            <p className="text-zinc-500">
              13 Aug 2026
            </p>

            <span className="w-fit px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
              Pending
            </span>

          </div>

        </div>

      </div>

    </section >
  )
}

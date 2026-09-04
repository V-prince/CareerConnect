import { Briefcase, Building2, FileUser, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { AdminAreaChart } from '../../components/charts/AreaChart';
import { GetAdminAppAndJOBDataApI, GetAdminDashboardApI } from '../../Services/adminService';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

export const AdminDashboard = () => {

  const [data, setData] = useState(null);
  const [applications, setApplications] = useState([]);
  const [jobs, setjobs] = useState([]);
  const navigate = useNavigate()


  const UserCounts = [
    {
      icon: <Users />,
      title: "Total Users",
      count: data?.totalUser || 0,
      bgColor: "bg-purple-500"
    },
    {
      icon: <Briefcase />,
      title: "Total Jobs",
      count: data?.totalJobs || 0,
      bgColor: "bg-blue-500"
    },
    {
      icon: <FileUser />,
      title: "Total Applications",
      count: data?.totalApplications || 0,
      bgColor: "bg-green-500"
    },
    {
      icon: <Building2 />,
      title: "Total Companes",
      count: data?.totalCompaney || 0,
      bgColor: "bg-orange-500"
    }
  ]

  const statusClass = {
    new: "text-orange-600 bg-orange-100",
    pending: "text-yellow-700 bg-yellow-100",
    shortlisted: "text-green-700 bg-green-100",
    interview: "text-purple-700 bg-purple-100",
    rejected: "text-red-700 bg-red-100",
    hired: "text-emerald-700 bg-emerald-100",

  };

  const getData = async () => {
    try {

      const data = await GetAdminDashboardApI();

      if (!data.success) {
        return console.log(data.message)
      }

      setData(data?.data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getAppandJobs = async () => {
    try {

      const data = await GetAdminAppAndJOBDataApI();

      if (!data.success) {
        return console.log(data.message)
      }

      setApplications(data?.applications)
      setjobs(data?.jobs)

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
    getAppandJobs()
  }, [])


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
              <span className='text-2xl font-bold'>{data.count.toLocaleString("en-IN")}</span>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h2 className='text-xl font-bold mt-5'>Overview Analytics</h2>
        <AdminAreaChart data={data?.chartData} />
      </div>


      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-4 sm:p-6">

          <div className="flex items-center justify-between gap-3 mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900">
              Recent Job Postings
            </h2>

            <button onClick={() => navigate('/admin/jobs')} className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">

              <thead>
                <tr className="bg-zinc-100 text-left text-sm font-semibold text-zinc-600">
                  <th className="px-4 py-3 rounded-l-xl">Job Title</th>
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Post Date</th>
                  <th className="px-4 py-3 rounded-r-xl">Status</th>
                </tr>
              </thead>

              <tbody>

                {
                  jobs?.slice(0, 5)?.map((job) => (

                    <tr key={job._id} onClick={() => navigate(`/job/${job?._id}`)}  className="border-b border-zinc-100 hover:bg-zinc-50 transition">

                      <td className="px-4 py-4">
                        <h3 className="text-blue-500 font-semibold">
                          {job?.jobTitle}
                        </h3>
                      </td>

                      <td className="px-4 py-4 text-zinc-700">
                        {job?.company?.companyName}
                      </td>

                      <td className="px-4 py-4 text-zinc-500">
                        {dayjs(job?.createdAt).format('DD MMM YYYY')}
                      </td>

                      <td className="px-4 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full ${job?.status == "open" ? "text-blue-700 bg-blue-100 " : "text-red-700 bg-red-100 "}  text-sm font-medium`}>
                          {
                            job?.status === "open" ? "Active" : "Close"
                          }
                        </span>
                      </td>

                    </tr>


                  ))
                }

              </tbody>

            </table>
          </div>

        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-4 sm:p-6">

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900">
              Recent Applications
            </h2>

            <button onClick={() => navigate('/admin/applicants')} className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">

              <thead>
                <tr className="border-b border-zinc-200 text-left">
                  <th className="py-3 px-4 text-xs font-semibold uppercase text-zinc-500">
                    Candidate
                  </th>

                  <th className="py-3 px-4 text-xs font-semibold uppercase text-zinc-500">
                    Job
                  </th>

                  <th className="py-3 px-4 text-xs font-semibold uppercase text-zinc-500">
                    Applied Date
                  </th>

                  <th className="py-3 px-4 text-xs font-semibold uppercase text-zinc-500">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>

                {applications?.slice(0, 5).map((app) => (

                  <tr key={app._id} onClick={() => navigate(`/admin/applicants/${app?.candidate?._id}`)} className="border-b border-zinc-100 hover:bg-zinc-50 transition">

                    <td className="py-4 px-4">
                      <div>
                        <p className="font-semibold text-zinc-900 capitalize">
                          {app?.candidate?.fullname}
                        </p>

                        <p className="text-xs text-zinc-500 mt-1">
                          {app?.job?.jobTitle}
                        </p>
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <p className="font-medium text-zinc-700">
                        {app?.job?.jobTitle}
                      </p>
                    </td>

                    <td className="py-4 px-4 text-sm text-zinc-500">
                      {dayjs(app?.createdAt).format("DD MMM YYYY")}
                    </td>

                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusClass[app?.status]}  capitalize`}>
                        {app?.status === "new" ? "Applied" : app?.status}
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>

    </section >
  )
}

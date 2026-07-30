import { Calendar, ChevronRight, MapIcon, MapPin, Recycle, Search, X } from 'lucide-react'
import React, { useState } from 'react'
import Select from 'react-select';

export const Applications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectDetails, setSelectDetails] = useState(null);
  const [searchDetail, setsearchDetail] = useState({
    search: "",
    status: "",
    sort: ""
  })


  const options = [
    { value: "all", label: "All Status" },
    { value: "applied", label: "Applied" },
    { value: "under_review", label: "Under Review" },
    { value: "shortlisted", label: "Shortlisted" },
    { value: "interview", label: "Interview" },
    { value: "selected", label: "Selected" },
    { value: "rejected", label: "Rejected" },
  ];

  const shortOptions = [
    { value: "old", label: "Old" },
    { value: "new", label: "New" },
  ]

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

  const itemsPerPage = 5;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentJobs = JobData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(JobData.length / itemsPerPage);

  const handelonChange = (e) => {
    const { name, value } = e.target;
    setsearchDetail(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handelOnSearch = () => {
    console.log(searchDetail)
  }


  return (
    <section className='min-h-screen bg-zinc-100 mt-16 p-8'>
      <h1 className="text-2xl md:text-3xl font-bold">
        My Applications
      </h1>

      <p className="text-zinc-600 mt-2 text-sm md:text-base">
        Track all your job application in one place
      </p>

      <div className='bg-white rounded-xl  shadow-md mt-8 p-5'>

        <div className='flex flex-col justify-start gap-5 md:flex-row md:items-center lg:justify-between w-full'>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="w-full md:w-96">
              <div className="flex items-center border border-zinc-300 rounded-lg px-3 py-2">
                <Search size={20} className="text-zinc-500 flex-shrink-0" onClick={handelOnSearch} />

                <input
                  type="text"
                  name='search'
                  onChange={handelonChange}
                  placeholder="Search by job title or company"
                  className="w-full ml-2 outline-none text-sm"
                />
              </div>
            </div>

            <div className="w-full md:w-40">
              <Select
                options={options}
                isClearable
                name='status'
                onChange={handelonChange}
                className="text-sm w-full"
                placeholder="All Status"
                classNamePrefix="select"
                styles={{
                  control: (base) => ({
                    ...base,
                    outline: "none",
                    boxShadow: "none",
                  }),
                }}
              />
            </div>

            <div className="w-full md:w-40">
              <Select
                options={shortOptions}
                isClearable
                name='sort'
                onChange={handelonChange}
                className="text-sm  w-full"
                placeholder="Short"
                classNamePrefix="select"
                styles={{
                  control: (base) => ({
                    ...base,
                    outline: "none",
                    boxShadow: "none",
                  }),
                }}
              />
            </div>

          </div>

          <button className="border  border-zinc-300 flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-zinc-100 transition">
            <Recycle size={20} />
            Clear filter
          </button>
        </div>

      </div>
      <div className="flex flex-col xl:flex-row gap-6 mt-5">


        <div className={`w-full ${!selectDetails ? "xl:w-full" : "xl:w-[45%]"} transition-all duration-300  space-y-3`}>

          {currentJobs.map((job, index) => (
            <div
              key={index}
              onClick={() => setSelectDetails(job)}
              className="bg-white border border-zinc-200 rounded-xl hover:bg-zinc-50 transition cursor-pointer"
            >
              <div className="flex items-center justify-between p-5">

                <div className="flex gap-4">
                  <img
                    src={job.icon}
                    alt={job.companey}
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />

                  <div className="space-y-1">
                    <h3 className="font-semibold text-base">
                      {job.title}
                    </h3>

                    <p className="text-sm text-zinc-500">
                      {job.companey}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <MapPin size={15} />
                      {job.city}, {job.state}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Calendar size={15} />
                      {job.date}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
              ${job.status.toLowerCase() === "under review"
                        ? "bg-indigo-100 text-indigo-600"
                        : job.status.toLowerCase() === "applied"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-green-100 text-green-600"
                      }`}
                  >
                    {job.status}
                  </span>

                  <ChevronRight
                    size={20}
                    className="text-zinc-500"
                  />
                </div>

              </div>
            </div>
          ))}

        </div>

        {selectDetails && (<>


          <div className={`flex-1 xl:w-[55%] transition-all duration-300 ${selectDetails
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-5 pointer-events-none"}`}>


            <div className="bg-white border border-zinc-200 rounded-xl p-6">

              <div className="flex items-center justify-between border-b pb-4">
                <h2 className="text-xl font-semibold">
                  Application Details
                </h2>

                <button onClick={() => setSelectDetails(null)} className='cursor-pointer'>
                  <X size={20} />
                </button>
              </div>

              <div className="flex items-center gap-4 py-6 border-b">

                <img
                  src={selectDetails.icon}
                  className="w-12 h-12 object-contain"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    {selectDetails.title}
                  </h3>

                  <p className="text-zinc-500">
                    {selectDetails.companey}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-zinc-500 mt-1">
                    <MapPin size={15} />
                    {selectDetails.city}, {selectDetails.state}
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                <div>
                  <p className="text-sm text-zinc-500">
                    Job Type
                  </p>

                  <p className="font-medium">
                    Internship
                  </p>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Applied Date
                  </p>

                  <p className="font-medium">
                    25 July 2026
                  </p>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Status
                  </p>

                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
                    Under Review
                  </span>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Salary
                  </p>

                  <p className="font-medium">
                    ₹40,000 / month
                  </p>
                </div>

              </div>

            </div>

          </div>

        </>)}
      </div>
      <div className="flex items-center justify-center gap-2 mt-6">


        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg border transition
      ${currentPage === 1
              ? "cursor-not-allowed bg-zinc-100 text-zinc-400"
              : "hover:bg-indigo-600 hover:text-white"
            }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 rounded-lg border font-medium transition
        ${currentPage === index + 1
                ? "bg-indigo-600 text-white border-indigo-600"
                : "hover:bg-zinc-100"
              }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg border transition
      ${currentPage === totalPages
              ? "cursor-not-allowed bg-zinc-100 text-zinc-400"
              : "hover:bg-indigo-600 hover:text-white"
            }`}
        >
          Next
        </button>

      </div>



    </section>
  )
}

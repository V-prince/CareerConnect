import { Calendar, ChevronRight, EllipsisVertical, MapPin, Recycle, Search, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { JobCard } from '../../components/JobCard';



export const SaveJobs = () => {

  const [currentPage, SetcurrentPage] = useState(1);
  const [searchDetail, SetsearchDetail] = useState({
    search: "",
    sort: ""
  })
  const [openMenu, setOpenMenu] = useState(null);

  const option = [
    { value: "new", label: "New" },
    { value: "old", label: "Old" },
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

  const [filterdItems, SetfilterdItems] = useState(JobData)

  const itemsPerpages = 5;

  const lastIndex = currentPage * itemsPerpages;

  const firstIndex = lastIndex - itemsPerpages;

  const currentJobs = filterdItems.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filterdItems.length / itemsPerpages);


  const handelOnChange = (e) => {
    const { name, value } = e.target;
    SetsearchDetail((prev) => ({
      ...prev,
      [name]: value
    }))
  }


  const filterdFunc = () => {
    let Fielterd = [...JobData];

    if (searchDetail.search) {
      Fielterd = Fielterd.filter((job) =>
        job.title.toLowerCase().includes(searchDetail.search.toLowerCase()) || job.companey.toLowerCase().includes(searchDetail.search.toLowerCase())
      )
    }

    if (searchDetail.sort === "new") {
      Fielterd = Fielterd.reverse()
    }

    SetfilterdItems(Fielterd)
  }

  useEffect(() => {
    filterdFunc()
  }, [searchDetail])





  return (
    <section className="min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-white mt-16 p-8">

      <h1 className="text-2xl md:text-3xl font-bold">
        Saved Jobs
      </h1>

      <p className="text-zinc-600 mt-2 text-sm md:text-base">
        Jobs you've saved for later. You can apply anytime
      </p>


      <div className='bg-white rounded-xl  shadow-md mt-8 p-4 '>

        {/*searching*/}

        <div className='flex flex-col justify-start gap-5 md:flex-row md:items-center lg:justify-between w-full'>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="w-full md:w-96">
              <div className="flex items-center border border-zinc-300 rounded-lg px-3 py-2">

                <input
                  type="text"
                  name='search'
                  onChange={handelOnChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      filterdFunc()
                    }
                  }}
                  placeholder="Search by job title or company"
                  className="w-full ml-2 outline-none text-sm"
                />
                <Search size={20} onClick={filterdFunc}
                  className="text-zinc-500 flex-shrink-0 cursor-pointer" />
              </div>
            </div>

          </div>

          <div className='flex flex-col md:flex-row items-center gap-2'>

            <div className="w-full cursor-pointer md:w-40">
              <Select
                options={option}
                name='sort'
                className="text-sm  w-full cursor-pointer"
                placeholder="Short"
                onChange={(selectd) => {
                  SetsearchDetail((prev) => ({
                    ...prev,
                    sort: selectd.value
                  }))
                  filterdFunc()
                }}
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

            <button className="border w-full md:w-48 cursor-pointer  border-zinc-300 flex items-center justify-center gap-5 px-4 py-2 rounded-lg hover:bg-red-100 hover:text-red-500 hover:border-red-500 transition">
              <Trash size={20} />
              Clear All
            </button>
          </div>

        </div>

      </div>

      <div className="w-full mt-5 space-y-3">
        {currentJobs.map((job, index) => (
          <div
            key={index}
            className="bg-white border border-zinc-200 rounded-xl hover:bg-zinc-50 transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 p-5">


              <div className="flex items-center gap-10">
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
                    <span>
                      {job.city}, {job.state}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <Calendar size={15} />
                    <span>{job.date}</span>
                  </div>
                </div>
              </div>


              <div className="flex items-center justify-between md:justify-end gap-3">
                <button className="border border-indigo-500 text-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-50 font-semibold text-sm cursor-pointer">
                  View Job
                </button>

                <div className="relative">
                  <EllipsisVertical
                    size={20}
                    className="text-zinc-500 cursor-pointer"
                    onClick={() =>
                      setOpenMenu(openMenu === index ? null : index)
                    }
                  />

                  {openMenu === index && (
                    <div className="absolute right-0 mt-2 md:mt-5 w-36 bg-white border border-zinc-200 rounded-lg shadow-lg z-10">
                      <button
                        onClick={() => {
                          console.log("Delete", job);
                          setOpenMenu(null);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50"
                      >
                        <Trash size={16} />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 mt-6">

        <button
          onClick={() => SetcurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className={`px-3 md:px-4 py-2 rounded-lg border text-sm transition
      ${currentPage === 1
              ? "cursor-not-allowed bg-zinc-100 text-zinc-400"
              : "hover:bg-indigo-600 hover:text-white"
            }`}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => SetcurrentPage(index + 1)}
            className={`w-9 h-9 md:w-10 md:h-10 rounded-lg border text-sm font-medium transition
        ${currentPage === index + 1
                ? "bg-indigo-600 text-white border-indigo-600"
                : "hover:bg-zinc-100"
              }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => SetcurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 md:px-4 py-2 rounded-lg border text-sm transition
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

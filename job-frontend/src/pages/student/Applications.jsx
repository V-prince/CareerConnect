import { Calendar, ChevronRight, MapIcon, MapPin, Recycle, Search, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { ApplicationDetailCard } from '../../components/ApplicationDetailCard';
import { JobCard } from '../../components/JobCard';

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
  const [filterdJobs, setFilterdJobs] = useState(JobData)

  const itemsPerPage = 5;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentJobs = JobData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filterdJobs.length / itemsPerPage);

  const handelonChange = (e) => {
    const { name, value } = e.target;
    setsearchDetail(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const SearchFilters = () => {
    let Filterd = [...JobData];

    if (searchDetail.search) {
      Filterd = Filterd.filter((job) => (
        job.title.toLowerCase().includes(searchDetail.search.toLowerCase()) ||
        job.companey.toLowerCase().includes(searchDetail.search.toLowerCase())
      ))
    }

    if (searchDetail.status && searchDetail.status !== "all") {
      Filterd = Filterd.filter((job) => (
        job.status.toLowerCase().replace(/\s+/g, "_").includes(searchDetail.status)
      ))

    }

    if (searchDetail.sort === "new") {
      Filterd.reverse()
    }

    setFilterdJobs(Filterd)
  }


  const cleanFilters = () => {
    setsearchDetail({
      search: "",
      sort: "",
      status: "all"
    }
    )

    setFilterdJobs(JobData)
    setCurrentPage(1)
    setSelectDetails(null)
  }

  useEffect(() => {
    SearchFilters()
  }, [searchDetail])


  return (
    <section className='min-h-screen bg-zinc-100 mt-16 p-8'>
      <h1 className="text-2xl md:text-3xl font-bold">
        My Applications
      </h1>

      <p className="text-zinc-600 mt-2 text-sm md:text-base">
        Track all your job application in one place
      </p>

      <div className='bg-white rounded-xl  shadow-md mt-8 p-5'>

        {/*searching*/}

        <div className='flex flex-col justify-start gap-5 md:flex-row md:items-center lg:justify-between w-full'>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="w-full md:w-96">
              <div className="flex items-center border border-zinc-300 rounded-lg px-3 py-2">
                <Search onClick={SearchFilters} size={20} className="text-zinc-500 flex-shrink-0" />

                <input
                  type="text"
                  name='search'
                  value={searchDetail.search}
                  onChange={(e) => {
                    handelonChange(e);
                  }}
                  placeholder="Search by job title or company"
                  className="w-full ml-2 outline-none text-sm"
                />
              </div>
            </div>

            <div className="w-full md:w-40">
              <Select
                options={options}
                name='status'
                value={options.find(
                  (option) => option.value === searchDetail.status
                ) || null}
                onChange={(selected) => {
                  setsearchDetail(prev => ({
                    ...prev,
                    status: selected.value

                  }))
                  SearchFilters()
                }
                }
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
                name='sort'
                value={shortOptions.find(
                  (option) => option.value === searchDetail.status
                ) || null}
                onChange={(selected) => {
                  setsearchDetail(prev => ({
                    ...prev,
                    sort: selected.value
                  }))
                  SearchFilters()
                }}
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

          <button onClick={cleanFilters} className="border  border-zinc-300 flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-zinc-100 transition">
            <Recycle size={20} />
            Clear filter
          </button>
        </div>

      </div>

      <div className="flex flex-col xl:flex-row gap-6 mt-5">


        <div className={`w-full ${!selectDetails ? "xl:w-full" : "xl:w-[45%]"} transition-all duration-300  space-y-3`}>

          {filterdJobs.map((job, index) => (
            <JobCard key={index} setSelectDetails={setSelectDetails} job={job} />
          ))}

        </div>

        {/* Application details */}

        {selectDetails && (<>
          <ApplicationDetailCard selectDetails={selectDetails} setSelectDetails={setSelectDetails} />
        </>)}
      </div>

      {/* Pagination */}
      
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

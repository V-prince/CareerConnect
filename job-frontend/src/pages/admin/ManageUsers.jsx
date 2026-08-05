import { Briefcase, Building, EllipsisVertical, Recycle, Search, ShieldKeyhole, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'


const users = [
  {
    id: "USR12345",
    name: "Prince Vadher",
    role: "Candidate",
    email: "prince@example.com",
    phone: "+91 9978093263",
    joinedOn: "May 28, 2024",
    avatar: "/images/profile.jpg",
  },
  {
    id: "USR12346",
    name: "Rahul Sharma",
    role: "Candidate",
    email: "rahul.sharma@gmail.com",
    phone: "+91 9876543210",
    joinedOn: "Jun 02, 2024",
    avatar: "/images/profile.jpg",
  },
  {
    id: "EMP12347",
    name: "TechNova Pvt. Ltd.",
    role: "Employer",
    email: "hr@technova.com",
    phone: "+91 9811111111",
    joinedOn: "May 15, 2024",
    avatar: "/images/profile.jpg",
  },
  {
    id: "USR12348",
    name: "Sneha Patel",
    role: "Candidate",
    email: "sneha.patel@gmail.com",
    phone: "+91 9988776655",
    joinedOn: "Apr 18, 2024",
    avatar: "/images/profile.jpg",
  },
  {
    id: "EMP12349",
    name: "Creative Minds",
    role: "Employer",
    email: "contact@creativeminds.com",
    phone: "+91 9822222222",
    joinedOn: "Mar 12, 2024",
    avatar: "/images/profile.jpg",
  },
  {
    id: "USR12350",
    name: "Anjali Desai",
    role: "Candidate",
    email: "anjali.desai@gmail.com",
    phone: "+91 9900112233",
    joinedOn: "Feb 25, 2024",
    avatar: "/images/profile.jpg",
  },
  {
    id: "EMP12351",
    name: "InnovateX Solutions",
    role: "Employer",
    email: "hr@innovatex.com",
    phone: "+91 9833333333",
    joinedOn: "Jan 20, 2024",
    avatar: "/images/profile.jpg",
  },
  {
    id: "USR12352",
    name: "Karan Patel",
    role: "Candidate",
    email: "karan.patel@gmail.com",
    phone: "+91 9911223344",
    joinedOn: "Dec 30, 2023",
    avatar: "/images/profile.jpg",
  },
];

const UserCounts = [
  {
    icon: <Briefcase />,
    title: "Candidates",
    count: 12450,
    bgColor: "bg-blue-500"
  },
  {
    icon: <Building />,
    title: "Employeer",
    count: 12450,
    bgColor: "bg-green-500"
  },
  {
    icon: <ShieldKeyhole />,
    title: "Admin",
    count: 12450,
    bgColor: "bg-red-500"
  }

]
export const ManageUsers = () => {

  const [details, setDetails] = useState({
    search: "",
    role: "",
    sort: ""
  })
  const [filterdDetails, setFilterdDetails] = useState(users)



  const Roleoptions = [
    { value: "all", label: "All Roles" },
    { value: "admin", label: "Admin" },
    { value: "employer", label: "Employeer" },
    { value: "candidate", label: "Candidate" }
  ];

  const shortOptions = [
    { value: "old", label: "Old" },
    { value: "new", label: "New" },
  ]


  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  console.log(details)
  const handelOnFielterd = () => {
    let Fielterd = [...users]

    if (details.search.trim()) {
      Fielterd = Fielterd.filter((user) =>
        user.name.replace(/\s+/g, "").toLowerCase().includes(details.search.replace(/\s+/g, "").toLowerCase()) ||
        user.email.toLowerCase().includes(details.search.toLowerCase()) ||
        user.phone.includes(details.search)
      )
    }

    if (details.role && details.role !== "all") {
      Fielterd = Fielterd.filter((user) =>
        user.role.toLowerCase().includes(details.role.toLowerCase())
      )
    }

    if (details.sort === "new") {
      Fielterd.reverse()
    }

    setFilterdDetails(Fielterd)
  }

  const handelOnClear = () => {
    setDetails({
      search: "",
      role: "",
      sort: "",
    })

  }

  useEffect(() => {
    handelOnFielterd()
  }, [details])


  return (
    <section className="min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-white mt-16 p-8">

      <h1 className="text-2xl md:text-3xl font-bold">
        Manage Users
      </h1>

      <p className="text-zinc-600 mt-2 text-sm md:text-base">
        View search and manage all users on platform.
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

      <div className='bg-white rounded-xl   shadow-md mt-8 p-5'>

        {/*searching*/}

        <div className='flex flex-col justify-start gap-5 md:flex-row md:items-center lg:justify-between w-full'>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="w-full md:w-96">
              <div className="flex items-center border border-zinc-300 rounded-lg px-3 py-2">

                <input
                  type="text"
                  name='search'
                  value={details.search}
                  onChange={handelOnChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handelOnFielterd()
                    }
                  }}
                  placeholder="Search by job title or company"
                  className="w-full ml-2 outline-none text-sm"
                />
                <Search size={20} onClick={handelOnFielterd}
                  className="text-zinc-500 flex-shrink-0 cursor-pointer" />
              </div>
            </div>

            <div className="w-full md:w-40">
              <Select
                options={Roleoptions}
                name='role'
                className="text-sm w-full"
                placeholder="All Roles"
                classNamePrefix="select"
                value={Roleoptions.find(
                  option => option.value === details.role
                ) || null}
                onChange={(selected) => {
                  setDetails((prev) => ({
                    ...prev,
                    role: selected.value
                  }))


                }}
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
                className="text-sm  w-full"
                placeholder="Sort"
                value={shortOptions.find(
                  option => option.value === details.sort
                ) || null}
                placeholder="Short"
                classNamePrefix="select"
                onChange={(selected) => {
                  setDetails((prev) => ({
                    ...prev,
                    sort: selected.value
                  }))

                }}
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

          <button onClick={handelOnClear} className="border  border-zinc-300 flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-zinc-100 transition">
            <Recycle size={20} />
            Clear filter
          </button>
        </div>


        <div className='overflow-auto  mt-10 round-xl '>
          <table className='min-w-[900px] w-full whitespace-nowrap'>
            <thead className="bg-zinc-100">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-center">Role</th>
                <th className="px-4 py-3 text-center">Email</th>
                <th className="px-4 py-3 text-center">Phone</th>
                <th className="px-4 py-3 text-center">Joined On</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {
                filterdDetails.map((user, index) => (
                  <tr key={index} className="border-b border-zinc-400">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          className="w-10 h-10 rounded-full"
                        />

                        <div>
                          <h1 className="font-semibold">{user.name}</h1>
                          <span className="text-sm text-zinc-500">
                            ID: {user.id}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="text-center">{user.role}</td>
                    <td className="text-center">{user.email}</td>
                    <td className="text-center">{user.phone}</td>
                    <td className="text-center">{user.joinedOn}</td>
                    <td className="text-center">
                      <EllipsisVertical size={15} className="mx-auto" />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

      </div>


    </section>
  )
}

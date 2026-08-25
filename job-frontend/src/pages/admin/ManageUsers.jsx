import {
  Briefcase,
  Building,
  EllipsisVertical,
  Recycle,
  Search,
  ShieldKeyhole,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Select from "react-select";

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
    bgColor: "bg-blue-500",
  },
  {
    icon: <Building />,
    title: "Employeer",
    count: 12450,
    bgColor: "bg-green-500",
  },
  {
    icon: <ShieldKeyhole />,
    title: "Admin",
    count: 12450,
    bgColor: "bg-red-500",
  },
];
export const ManageUsers = () => {
  const [details, setDetails] = useState({
    search: "",
    role: "",
    sort: "",
  });


const [filterdDetails, setFilterdDetails] = useState(users)

const [isOpenPopup, setIsOpenPopUp] = useState(false)
const [selectedUser, setSelectedUser] = useState(null)




const Roleoptions = [
  { value: "all", label: "All Roles" },
  { value: "admin", label: "Admin" },
  { value: "employer", label: "Employeer" },
  { value: "candidate", label: "Candidate" },
];

const shortOptions = [
  { value: "old", label: "Old" },
  { value: "new", label: "New" },
];

const handelOnChange = (e) => {
  const { name, value } = e.target;
  setDetails((prev) => ({
    ...prev,
    [name]: value,
  }));
};

console.log(details);
const handelOnFielterd = () => {
  let Fielterd = [...users];

  if (details.search.trim()) {
    Fielterd = Fielterd.filter(
      (user) =>
        user.name
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes(details.search.replace(/\s+/g, "").toLowerCase()) ||
        user.email.toLowerCase().includes(details.search.toLowerCase()) ||
        user.phone.includes(details.search),
    );
  }

  if (details.role && details.role !== "all") {
    Fielterd = Fielterd.filter((user) =>
      user.role.toLowerCase().includes(details.role.toLowerCase()),
    );
  }

  if (details.sort === "new") {
    Fielterd.reverse();
  }

  setFilterdDetails(Fielterd);
};

const handelOnClear = () => {
  setDetails({
    search: "",
    role: "",
    sort: "",
  });
};

useEffect(() => {
  handelOnFielterd();
}, [details]);

return (
  <section className="w-full px-4 sm:px-6 lg:px-8 py-6">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900">
        Manage Users
      </h1>

      <p className="text-zinc-600 mt-2 text-sm sm:text-base">
        View, search and manage all users on platform.
      </p>

      {/* Stats */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {UserCounts.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg p-4 sm:p-6 flex items-center gap-4 transition"
          >
            <div
              className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-full ${data.bgColor} text-white items-center justify-center`}
            >
              {data.icon}
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-zinc-600 text-sm sm:text-base">
                {data.title}
              </span>

              <span className="text-xl sm:text-2xl font-bold text-zinc-900">
                {data.count.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Filters + Table */}
      <div className="bg-white rounded-xl shadow-md mt-6 sm:mt-8 p-4 sm:p-5">

        {/* Filters */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center gap-3 w-full lg:w-auto">

            {/* Search */}
            <div className="w-full sm:col-span-2 lg:w-80">
              <div className="flex items-center border border-zinc-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <Search
                  size={19}
                  className="text-zinc-500 shrink-0"
                />

                <input
                  type="text"
                  name="search"
                  value={details.search}
                  onChange={handelOnChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handelOnFielterd();
                    }
                  }}
                  placeholder="Search by name, email or phone"
                  className="w-full ml-2 outline-none text-sm min-w-0"
                />
              </div>
            </div>

            {/* Role */}
            <div className="w-full lg:w-40">
              <Select
                options={Roleoptions}
                name="role"
                className="text-sm w-full"
                placeholder="All Roles"
                classNamePrefix="select"
                value={
                  Roleoptions.find(
                    (option) => option.value === details.role
                  ) || null
                }
                onChange={(selected) => {
                  setDetails((prev) => ({
                    ...prev,
                    role: selected?.value || "",
                  }));
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    outline: "none",
                    boxShadow: "none",
                    minHeight: "42px",
                  }),
                }}
              />
            </div>

            {/* Sort */}
            <div className="w-full lg:w-40">
              <Select
                options={shortOptions}
                name="sort"
                className="text-sm w-full"
                placeholder="Sort"
                classNamePrefix="select"
                value={
                  shortOptions.find(
                    (option) => option.value === details.sort
                  ) || null
                }
                onChange={(selected) => {
                  setDetails((prev) => ({
                    ...prev,
                    sort: selected?.value || "",
                  }));
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    outline: "none",
                    boxShadow: "none",
                    minHeight: "42px",
                  }),
                }}
              />
            </div>
          </div>

          {/* Clear */}
          <button
            onClick={handelOnClear}
            className="w-full lg:w-auto border border-zinc-300 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg hover:bg-zinc-100 transition text-sm"
          >
            <Recycle size={18} />
            Clear filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-8 rounded-lg border border-zinc-200">
          <table className="min-w-[900px] w-full whitespace-nowrap">
            <thead className="bg-zinc-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Name
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Role
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Email
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Phone
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Joined On
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filterdDetails.map((user, index) => (
                <tr
                  key={user.id}
                  className={
                    filterdDetails.length !== index + 1
                      ? "border-b border-zinc-200"
                      : ""
                  }
                >
                  {/* Name */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0"
                      />

                      <div className="min-w-0">
                        <h1 className="font-semibold text-sm sm:text-base truncate max-w-[180px]">
                          {user.name}
                        </h1>

                        <span className="text-xs sm:text-sm text-zinc-500">
                          ID: {user.id}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="text-center text-sm">
                    {user.role}
                  </td>

                  <td className="text-center text-sm">
                    {user.email}
                  </td>

                  <td className="text-center text-sm">
                    {user.phone}
                  </td>

                  <td className="text-center text-sm">
                    {user.joinedOn}
                  </td>

                  {/* Action */}
                  <td className="relative text-center px-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedUser(user.id);
                        setIsOpenPopUp((prev) => !prev);
                      }}
                      className="p-2 rounded-md hover:bg-zinc-100 transition"
                    >
                      <EllipsisVertical
                        size={18}
                        className="text-zinc-600"
                      />
                    </button>

                    {isOpenPopup && selectedUser === user.id && (
                      <div className="absolute right-2 top-12 z-50 w-36 sm:w-40 bg-white border border-zinc-200 rounded-lg shadow-lg p-1">
                        <button
                          className="w-full text-left px-3 py-2.5 text-xs sm:text-sm text-zinc-700 rounded-md hover:bg-zinc-100 transition"
                        >
                          Block User
                        </button>

                        <button
                          className="w-full text-left px-3 py-2.5 text-xs sm:text-sm text-red-600 rounded-md hover:bg-red-50 transition"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No users */}
        {filterdDetails.length === 0 && (
          <div className="py-10 text-center text-sm text-zinc-500">
            No users found.
          </div>
        )}
      </div>
    </div>
  </section>
)
}

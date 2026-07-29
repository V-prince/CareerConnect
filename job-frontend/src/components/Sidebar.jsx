import { BookmarkCheck, FileText, icons, LayoutDashboard, Settings, User, X } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = ({ isOpen, SetIsOpen }) => {

  const sideData = [
    {
      icon: <LayoutDashboard size={22} />,
      title: "Dashboard",
      to: "/dashboard"
    },
    {
      icon: <User size={22} />,
      title: "Profile",
      to: "/Profile"
    },
    {
      icon: <FileText size={22} />,
      title: "Applications",
      to: "/applications"
    },
    {
      icon: <BookmarkCheck size={22} />,
      title: "Saved Jobs",
      to: "/save/jobs"
    },
    {
      icon: <Settings size={22} />,
      title: "Settings",
      to: "/settings"
    },

  ]


  return (
    <section className={`fixed top-0 left-0 w-72 h-screen
    border-r border-zinc-200 bg-white
    transition-all duration-300 z-40
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0`}>
      <div onClick={() => SetIsOpen(false)} className='lg:hidden flex items-center justify-end p-3'>
        <X />
      </div>

      <div className='flex flex-col '>
        <Link to={"/"}>
          <img src="/images/logo.png" alt="" className='w-50 mx-auto py-6' />
        </Link>
        <div className='px-3 space-y-2'>

          {sideData.map((item,index) => (
            <NavLink to={item.to} key={index} className={({ isActive }) => `w-full flex items-center gap-6 px-10 py-3 rounded-xl border transition-all duration-300 ${isActive
              ? "bg-indigo-600 text-white border-indigo-600"
              : "text-gray-700 border-transparent hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
              }`}   >
              {item.icon}
              <span className='text-xl hover:text-white font-medium '>{item.title}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  )
}

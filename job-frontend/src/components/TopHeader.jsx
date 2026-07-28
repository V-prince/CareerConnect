import { Hamburger, Menu } from 'lucide-react'
import React, { useState } from 'react'

export const TopHeader = ({ IsOpen, SetIsOpen }) => {

  return (
    <div className='fixed top-0 left-0 lg:left-72 right-0 z-20 '>
      <div className=" flex items-center justify-between lg:justify-end  p-4 bg-white shadow-sm ">
        <span className='block lg:hidden cursor-pointer' onClick={() => SetIsOpen(true)}><Menu /></span>
        <div className='flex items-center gap-3 '>
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
      </div>
    </div>
  )
}

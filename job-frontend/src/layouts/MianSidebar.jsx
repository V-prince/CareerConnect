import { Sidebar } from '../components/Sidebar'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { TopHeader } from '../components/TopHeader'

export const MianSidebar = () => {

  const [isOpen, SetIsOpen] = useState(false)

  return (
    <div className='min-h-screen flex '>
      <Sidebar isOpen={isOpen} SetIsOpen={SetIsOpen} />
      <main className='flex-1 lg:ml-72 overflow-y-auto '>
        <TopHeader isOpen={isOpen} SetIsOpen={SetIsOpen} />
        <Outlet />
      </main>
    </div>
  )
}

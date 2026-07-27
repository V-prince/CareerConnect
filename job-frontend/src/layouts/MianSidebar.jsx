import { Sidebar } from '../components/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const MianSidebar = () => {
  return (
    <div className='min-h-screen flex '>
      <Sidebar/>
      <main className='flex-1 p-6 overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  )
}

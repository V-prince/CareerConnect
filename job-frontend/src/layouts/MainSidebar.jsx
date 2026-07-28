import { Sidebar } from '../components/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainSidebar = () => {
  return (
    <div className='min-h-screen flex '>
      <Sidebar/>
      <main className='flex-1  overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  )
}

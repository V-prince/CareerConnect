import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className='max-w-6xl mx-auto'>
        <Outlet />
      </main>
    </>
  )
}

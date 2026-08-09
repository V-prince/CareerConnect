import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'

export const MainLayout = () => {

  const location = useLocation()

  const isHome = location.pathname === "/";

  return (
    <>
      {isHome ? (
        <div
          className="bg-none md:bg-contain  bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-2.png')",
            
          }}
        >
          <Navbar />
          <Outlet />
        </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
      <Footer />
    </>
  )
}

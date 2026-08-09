import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'

export const MainLayout = () => {

  const location = useLocation()

  const isHome = location.pathname === "/";

  return (
    <>
      <main
        className={
          isHome
            ? "relative min-h-screen w-full  bg-gradient-to-b from-blue-50 bg-no-repeat md:bg-contain  lg:bg-contain"
            : "relative min-h-screen w-full bg-white"
        }
        style={
          isHome
            ? {
              backgroundImage: "url('/hero-2.png')",
            }
            : undefined
        }
      >
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

import { useState } from 'react'
import { Home } from './pages/public/Home'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { MainSidebar } from './layouts/MainSidebar'
import { Dashboard } from './pages/student/Dashboard'

function App() {


  return (
    <>
      <Routes >
        <Route element={<MainLayout />} >
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<MainSidebar />} >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>


      </Routes>

      {/* H ere We Define Routes of our pages */}

    </>
  )
}

export default App

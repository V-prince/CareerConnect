import { useState } from 'react'
import { Home } from './pages/public/Home'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { MianSidebar } from './layouts/MianSidebar'

function App() {


  return (
    <>
      <Routes >
        <Route element={<MainLayout />} >
          <Route path="/" element={<Home />} />

        </Route>

        <Route  path="/side"  element={<MianSidebar />} >

        </Route>


      </Routes>

      {/* H ere We Define Routes of our pages */}

    </>
  )
}

export default App

import { useState } from 'react'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'

function App() {


  return (
    <>
      <Routes >
        <Route element={<MainLayout />} >
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>

      {/* H ere We Define Routes of our pages */}

    </>
  )
}

export default App

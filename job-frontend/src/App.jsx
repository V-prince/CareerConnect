import { useState } from "react";
import { Home } from "./pages/public/Home";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainSidebar } from "./layouts/MainSidebar";
import { Dashboard } from "./pages/student/Dashboard";
import { Profile } from "./pages/student/Profile";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route element={<MainSidebar />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<MainSidebar />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/save/jobs" element={<SaveJobs />} />
        </Route>
      </Routes>

      {/* H ere We Define Routes of our pages */}
    </>
  );
}

export default App;

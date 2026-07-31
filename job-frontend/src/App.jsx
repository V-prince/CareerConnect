import { useState } from "react";
import { Home } from "./pages/public/Home";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainSidebar } from "./layouts/MainSidebar";
import { Dashboard } from "./pages/student/Dashboard";
import { Profile } from "./pages/student/Profile";
import { Applications } from "./pages/student/Applications";
import { SaveJobs } from "./pages/student/SaveJobs";

function App() {
  return (
    <>
      <Routes>
        {/* <Route element={<MainLayout />} >
          <Route path="/" element={<Home />} />
        </Route> */}

        <Route element={<MainSidebar />}>
          <Route path="/student/dashboard" element={<Dashboard />} />
          <Route path="/student/profile" element={<Profile />} />
          <Route path="/student/applications" element={<Applications />} />
          <Route path="/student/savejobs" element={<SaveJobs />} />
        </Route>
      </Routes>

      {/* H ere We Define Routes of our pages */}
    </>
  );
}

export default App;

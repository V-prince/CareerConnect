import { useState } from "react";
import { Home } from "./pages/public/Home";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainSidebar } from "./layouts/MainSidebar";
import { Dashboard } from "./pages/student/Dashboard";
import { Profile } from "./pages/student/Profile";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import { Applications } from "./pages/student/Applications";
import { SaveJobs } from "./pages/student/SaveJobs";
import { Setting } from "./pages/student/Setting";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<MainSidebar />}>
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/save/jobs" element={<SaveJobs />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes>

      {/* H ere We Define Routes of our pages */}
    </>
  );
}

export default App;

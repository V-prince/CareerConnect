import { useState } from "react";
import { Home } from "./pages/public/Home";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainSidebar } from "./layouts/MainSidebar";
import { Dashboard } from "./pages/student/Dashboard";
import { Profile } from "./pages/student/Profile";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";

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
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<MainSidebar />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/applications" element={<Applications />} />
        </Route>
      </Routes>

      {/* H ere We Define Routes of our pages */}
    </>
  );
}

export default App;

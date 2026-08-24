import { Home } from "./pages/public/Home";
import Jobs from "./pages/public/Jobs";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import { Dashboard } from "./pages/student/Dashboard";
import { Profile } from "./pages/student/Profile";
import { Applications } from "./pages/student/Applications";
import { SaveJobs } from "./pages/student/SaveJobs";
import { Setting } from "./pages/student/Setting";
import EmpDashboard from "./pages/employer/EmpDashboard";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { ManageUsers } from "./pages/admin/ManageUsers";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainSidebar } from "./layouts/MainSidebar";
import EmpPostJob from "./pages/employer/EmpPostJob";
import EmpJobs from "./pages/employer/EmpJobs";
import EmpCompanyProfile from "./pages/employer/EmpCompanyProfile";
import EmpApplicants from "./pages/employer/EmpApplicants";
import JobDetail from "./pages/public/JobDetail";

function App() {
  return (
    <>
      <Routes>
        
        {/* Public Pages */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route element={<MainSidebar />}>

          {/* Student */}

          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/applications" element={<Applications />} />
          <Route path="/user/save/jobs" element={<SaveJobs />} />
          <Route path="/settings" element={<Setting />} />

          {/* Employer */}

          <Route path="/employer/dashboard" element={<EmpDashboard />} />
          <Route
            path="/employer/company/profile"
            element={<EmpCompanyProfile />}
          />
          <Route path="/employer/post/job" element={<EmpPostJob />} />
          <Route path="/employer/jobs" element={<EmpJobs />} />
          <Route path="/employer/applicants" element={<EmpApplicants />} />

          {/* Admim */}

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage/users" element={<ManageUsers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

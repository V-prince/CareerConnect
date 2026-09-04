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
import EmpApplicantProfile from "./pages/employer/EmpApplicantProfile";
import JobDetail from "./pages/public/JobDetail";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>
        {/* Public Pages */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route element={<ProtectedRoutes allowedRoles={["candidate"]} />}>
          <Route element={<MainSidebar />}>
            {/* Student */}

            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/applications" element={<Applications />} />
            <Route path="/user/save/jobs" element={<SaveJobs />} />
            <Route path="/user/settings" element={<Setting />} />

          </Route>
        </Route>


        <Route element={<ProtectedRoutes allowedRoles={["employer"]} />}>
          <Route element={<MainSidebar />}>

            {/* Employer */}

            <Route path="/employer/dashboard" element={<EmpDashboard />} />
            <Route
              path="/employer/company/profile"
              element={<EmpCompanyProfile />}
            />
            <Route path="/employer/profile" element={<Profile />} />
            <Route path="/employer/post/job" element={<EmpPostJob />} />
            <Route path="/employer/jobs" element={<EmpJobs />} />
            <Route path="/employer/applicants" element={<EmpApplicants />} />
            <Route path="/employer/applicants/:id" element={<EmpApplicantProfile />} />
            <Route path="/employer/settings" element={<Setting />} />

          </Route>
        </Route>


        <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
          <Route element={<MainSidebar />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/profile" element={<Profile />} />
            <Route path="/admin/manage/users" element={<ManageUsers />} />
            <Route path="/admin/jobs" element={<EmpJobs />} />
            <Route path="/admin/applicants" element={<EmpApplicants />} />
            <Route path="/admin/applicants/:id" element={<EmpApplicantProfile />} />
            <Route path="/admin/settings" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

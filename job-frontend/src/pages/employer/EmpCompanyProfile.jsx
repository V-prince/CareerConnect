import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Pencil } from "lucide-react";

import EmpCompleteProfilePopup from "../../components/popups/EmpCompleteProfilePopup";

import EmpHeader from "../../components/employer/EmpHeader";
import EmpCompanyOverview from "../../components/employer/EmpCompanyOverview";
import EmpCompanyAbout from "../../components/employer/EmpCompanyAbout";
import EmpCompanyDetails from "../../components/employer/EmpCompanyDetails";

const companyData = {
  name: "TechSolutions Inc.",

  industry: "Technology • Software Development",

  location: "Bengaluru, Karnataka, India",

  founded: "2020",

  employees: "51-200 employees",

  companyType: "Private Limited",

  registrationNumber: "TSI20200001",

  phone: "+91 98765 43210",

  email: "hr@techsolutions.com",

  website: "https://techsolutions.com",

  about:
    "Founded in 2020, TechSolutions Inc. has been at the forefront of digital innovation, delivering cutting-edge software solutions to clients worldwide. Our team of passionate developers, designers, and strategists work together to create exceptional digital experiences.",

  specializations:
    "Web Development, Mobile Apps, Cloud Solutions, AI/ML, Digital Transformation",
};

const companyDetails = [
  {
    label: "Founded",
    value: companyData.founded,
    icon: "calendar",
  },

  {
    label: "Company Size",
    value: companyData.employees,
    icon: "users",
  },

  {
    label: "Industry",
    value: "Information Technology",
    icon: "industry",
  },

  {
    label: "Headquarters",
    value: companyData.location,
    icon: "location",
  },

  {
    label: "Company Type",
    value: companyData.companyType,
    icon: "briefcase",
  },

  {
    label: "Specializations",
    value: companyData.specializations,
    icon: "specialization",
  },
];

const EmpCompanyProfile = () => {
  const navigate = useNavigate();

  const [showCompleteProfile, setShowCompleteProfile] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50">
      <EmpHeader />

      <main className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex items-center gap-2 text-sm mb-7">
          <button
            onClick={() => navigate("/employer/dashboard")}
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            Dashboard
          </button>

          <ChevronRight size={16} className="text-zinc-400" />

          <span className="text-zinc-800 font-medium">Company Profile</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-7">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-zinc-900">
              Company Profile
            </h1>

            <p className="text-sm md:text-base text-zinc-500 mt-1">
              Manage your company information and settings
            </p>
          </div>

          <button
            onClick={() => setShowCompleteProfile(true)}
            className="self-start flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
          >
            <Pencil size={16} />
            Edit Profile
          </button>
        </div>
        <EmpCompanyOverview company={companyData} />
        <div className="grid lg:grid-cols-2 gap-5 md:gap-6 mt-5">
          <EmpCompanyAbout company={companyData} />

          <EmpCompanyDetails details={companyDetails} />
        </div>
      </main>
      <EmpCompleteProfilePopup
        isOpen={showCompleteProfile}
        onClose={() => setShowCompleteProfile(false)}
      />
    </div>
  );
};

export default EmpCompanyProfile;

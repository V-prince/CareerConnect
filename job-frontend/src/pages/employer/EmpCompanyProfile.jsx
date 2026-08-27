import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Pencil } from "lucide-react";

import EmpCompleteProfilePopup from "../../components/popups/EmpCompleteProfilePopup";
import toast from "react-hot-toast"
import EmpCompanyOverview from "../../components/employer/EmpCompanyOverview";
import EmpCompanyAbout from "../../components/employer/EmpCompanyAbout";
import EmpCompanyDetails from "../../components/employer/EmpCompanyDetails";
import { CreateCompaneyAPI, GetCompaneyData, UpdateCompaneyAPI } from "../../Services/companeyService";




const EmpCompanyProfile = () => {
  const navigate = useNavigate();

  const [companyData, setCompanyData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const [showCompleteProfile, setShowCompleteProfile] = useState(false);

  const handleSaveCompany = async (updatedCompany) => {
    try {
      const data = new FormData();

      data.append("companyName", updatedCompany.name);
      data.append("industry", updatedCompany.industry);
      data.append("location", updatedCompany.location);
      data.append("founded", updatedCompany.founded);
      data.append("size", updatedCompany.size);
      data.append("companeyType", updatedCompany.companeyType);
      data.append("registrationNumber", updatedCompany.registrationNumber);
      data.append("phone", updatedCompany.phone);
      data.append("email", updatedCompany.email);
      data.append("description", updatedCompany.description);
      data.append("specializations", updatedCompany.specializations);
      data.append("photo", updatedCompany.logo);
      data.append("website", updatedCompany.website);


      if (!companyData) {
        setIsLoading(true);
        const Createdata = await CreateCompaneyAPI(data);

        if (!Createdata.success) {
          return toast.error(Createdata.message)
        }

        setCompanyData(Createdata?.companey);
        setShowCompleteProfile(false);
        getCompaney();
        toast.success(Createdata.message)
        return;
      }
      setIsLoading(true)
      const updatedData = await UpdateCompaneyAPI(data, companyData?._id);

      if (!updatedData.success) {
        return toast.error(updatedData.message)
      }

      setCompanyData(updatedData?.companey);
      setShowCompleteProfile(false);
      toast.success(updatedData.message)
    } catch (error) {
      console.log("companey detail err:", error)
    } finally {
      setIsLoading(false)
    }
  };

  const companyDetails = [
    {
      label: "Founded",
      value: companyData?.founded || "Not provided",
      icon: "calendar",
    },
    {
      label: "Company Size",
      value: companyData?.size || "Not provided",
      icon: "users",
    },
    {
      label: "Industry",
      value: companyData?.industry || "Not provided",
      icon: "industry",
    },
    {
      label: "Headquarters",
      value: companyData?.location || "Not provided",
      icon: "location",
    },
    {
      label: "Company Type",
      value: companyData?.companeyType || "Not provided",
      icon: "briefcase",
    },
    {
      label: "Specializations",
      value: companyData?.specializations || "Not provided",
      icon: "specialization",
    },
  ];


  const getCompaney = async () => {
    try {

      const data = await GetCompaneyData();

      setCompanyData(data?.companey)

      if (!data?.companey) {
        setShowCompleteProfile(true);
      } else {
        setShowCompleteProfile(false);
      }

    } catch (error) {
      console.log("companey detail err:", error)
    }
  }

  useEffect(() => {
    getCompaney();
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white mt-16">
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

      {
        showCompleteProfile && (
          <EmpCompleteProfilePopup
            isLoading={isLoading}
            isOpen={showCompleteProfile}
            onClose={() => setShowCompleteProfile(false)}
            company={companyData}
            onSave={handleSaveCompany}
          />
        )
      }

    </div>
  );
};

export default EmpCompanyProfile;

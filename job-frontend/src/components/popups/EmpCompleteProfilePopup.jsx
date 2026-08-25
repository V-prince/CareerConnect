import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

import EmpProfileLogo from "../employer/Popup/EmpProfileLogo";
import EmpProfileForm from "../employer/Popup/EmpProfileForm";

const emptyCompany = {
  name: "",
  industry: "",
  location: "",
  founded: "",
  employees: "",
  companyType: "",
  registrationNumber: "",
  phone: "",
  email: "",
  website: "",
  description: "",
  about: "",
  companyDescription: "",
  specializations: "",
  logo: "",
  culture: [],
};

const EmpCompleteProfilePopup = ({ isOpen, onClose, company, onSave }) => {
  const [formData, setFormData] = useState(emptyCompany);
  const [logoPreview, setLogoPreview] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isOpen) return;

    const existingCompany = company || {};

    const data = {
      ...emptyCompany,
      ...existingCompany,

      name: existingCompany.name || "",
      industry: existingCompany.industry || "",
      location: existingCompany.location || "",
      founded: existingCompany.founded || "",
      employees: existingCompany.employees || "",
      companyType: existingCompany.companyType || "",
      registrationNumber: existingCompany.registrationNumber || "",
      phone: existingCompany.phone || "",
      email: existingCompany.email || "",
      website: existingCompany.website || "",
      description: existingCompany.description || "",
      about: existingCompany.about || "",
      companyDescription: existingCompany.companyDescription || "",
      specializations: existingCompany.specializations || "",
      logo: existingCompany.logo || "",

      culture: Array.isArray(existingCompany.culture)
        ? existingCompany.culture
        : [],
    };

    setFormData(data);
    setLogoPreview(existingCompany.logo || "");
    setErrors({});
  }, [isOpen, company]);

  if (!isOpen) return null;

  const isEditing = Boolean(
    company?.name ||
    company?.industry ||
    company?.location ||
    company?.email ||
    company?.companyType ||
    company?.employees,
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleLogoChange = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({
        ...prev,
        logo: "Please select an image file.",
      }));
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        logo: "Logo size must be less than 2MB.",
      }));
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result;

      setLogoPreview(result);

      setFormData((prev) => ({
        ...prev,
        logo: result,
      }));

      setErrors((prev) => ({
        ...prev,
        logo: "",
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleRemoveLogo = () => {
    setLogoPreview("");

    setFormData((prev) => ({
      ...prev,
      logo: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Company name is required.";
    }

    if (!formData.industry.trim()) {
      newErrors.industry = "Industry is required.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Company location is required.";
    }

    if (!formData.companyType.trim()) {
      newErrors.companyType = "Company type is required.";
    }

    if (!formData.employees.trim()) {
      newErrors.employees = "Company size is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Company email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.website.trim()) {
      const websitePattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i;

      if (!websitePattern.test(formData.website.trim())) {
        newErrors.website = "Enter a valid website.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    const updatedCompany = {
      ...formData,

      name: formData.name.trim(),
      industry: formData.industry.trim(),
      location: formData.location.trim(),
      founded: formData.founded.trim(),
      employees: formData.employees.trim(),
      companyType: formData.companyType.trim(),
      registrationNumber: formData.registrationNumber.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      website: formData.website.trim(),
      description: formData.description.trim(),
      about: formData.about.trim(),
      companyDescription: formData.companyDescription.trim(),
      specializations: formData.specializations.trim(),

      culture: Array.isArray(formData.culture) ? formData.culture : [],
    };

    if (onSave) {
      onSave(updatedCompany);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">
      <div className="w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 md:px-6 py-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-zinc-900">
              {isEditing ? "Edit Company Profile" : "Complete Company Profile"}
            </h2>

            <p className="text-sm text-zinc-500 mt-1">
              {isEditing
                ? "Update your company information."
                : "Complete your company information to get started."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 transition"
          >
            <X size={20} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[calc(92vh-145px)] px-5 md:px-6 py-6">
          <EmpProfileLogo
            logoPreview={logoPreview}
            error={errors.logo}
            onLogoChange={handleLogoChange}
            onRemoveLogo={handleRemoveLogo}
          />

          <EmpProfileForm
            formData={formData}
            errors={errors}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3 border-t border-zinc-200 bg-white px-5 md:px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-zinc-300 bg-white text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
          >
            {isEditing ? "Save Changes" : "Save Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmpCompleteProfilePopup;

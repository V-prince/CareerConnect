import React, { useEffect, useState } from "react";
import { X, Save } from "lucide-react";

const EmpCompleteProfilePopup = ({ isOpen, onClose, company, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    companyType: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: company?.name || "",
        industry: company?.industry || "",
        companyType: company?.companyType || "",
      });
    }
  }, [isOpen, company]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updatedCompany = {
      ...company,
      name: formData.name,
      industry: formData.industry,
      companyType: formData.companyType,
    };

    if (onSave) {
      onSave(updatedCompany);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-200">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Complete Company Profile
            </h2>

            <p className="text-sm text-zinc-500 mt-1">
              Update your company information
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 transition"
          >
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSave}>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-zinc-900 mb-5">
              Basic Information
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Company Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="w-full h-12 px-4 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Industry
                </label>

                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="Enter industry"
                  className="w-full h-12 px-4 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Company Type
                </label>

                <select
                  name="companyType"
                  value={formData.companyType}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select company type</option>
                  <option value="Private Limited">Private Limited</option>
                  <option value="Public Limited">Public Limited</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-zinc-200 bg-zinc-50">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg border border-zinc-300 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
            >
              <Save size={16} />
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpCompleteProfilePopup;

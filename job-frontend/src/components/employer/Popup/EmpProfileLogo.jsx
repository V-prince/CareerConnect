import React from "react";
import { Upload, Trash2, Image as ImageIcon } from "lucide-react";

const EmpProfileLogo = ({ logoPreview, error, onLogoChange, onRemoveLogo }) => {
  return (
    <div className="mb-7">
      <h3 className="text-base font-semibold text-zinc-900 mb-4">
        Company Logo
      </h3>

      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="w-24 h-24 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-center overflow-hidden shrink-0">
          {logoPreview ? (
            <img
              src={logoPreview}
              alt="Company logo"
              className="w-full h-full object-cover"
            />
          ) : (
            <ImageIcon size={30} className="text-zinc-400" />
          )}
        </div>

        <div>
          <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-50 cursor-pointer transition">
            <Upload size={16} />

            {logoPreview ? "Change Logo" : "Upload Logo"}

            <input
              type="file"
              accept="image/*"
              onChange={(e) => onLogoChange(e.target.files?.[0])}
              className="hidden"
            />
          </label>

          {logoPreview && (
            <button
              type="button"
              onClick={onRemoveLogo}
              className="ml-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-red-200 text-red-600 text-sm font-medium hover:bg-red-50 transition"
            >
              <Trash2 size={15} />
              Remove
            </button>
          )}

          <p className="text-xs text-zinc-500 mt-2">
            PNG, JPG or WEBP. Maximum size 2MB.
          </p>

          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default EmpProfileLogo;

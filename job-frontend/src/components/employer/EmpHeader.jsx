import React from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmpHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-zinc-200 sticky top-0 z-30">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-end">
        <div
          onClick={() => navigate("/employer/profile")}
          className="flex items-center gap-2 md:gap-3 cursor-pointer rounded-xl px-2 py-1.5 hover:bg-zinc-50 transition"
        >
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
            T
          </div>

          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-semibold text-zinc-800">
              TechSolutions Inc.
            </p>

            <p className="text-[11px] text-zinc-500 mt-0.5">Employer</p>
          </div>

          <ChevronDown size={16} className="text-zinc-500 hidden sm:block" />
        </div>
      </div>
    </header>
  );
};

export default EmpHeader;

import React from "react";
import { ChevronRight } from "lucide-react";

const QuickActions = ({ quickActions, navigate }) => {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 md:p-5 mb-6 md:mb-7">
      <div className="mb-4 md:mb-5">
        <h2 className="text-base md:text-lg font-bold text-zinc-800">
          Quick Actions
        </h2>

        <p className="text-xs md:text-sm text-zinc-500 mt-0.5">
          Frequently used actions
        </p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-2">
        {quickActions.map((act) => {
          const Icon = act.icon;

          return (
            <button
              key={act.title}
              onClick={() => navigate(act.path)}
              className="w-full flex items-center gap-3 md:gap-4 p-3 md:p-3.5 rounded-xl border border-zinc-200 hover:border-indigo-200 hover:bg-indigo-50/40 transition group text-left"
            >
              <div
                className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center shrink-0 ${act.iconBg}`}
              >
                <Icon size={18} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-[15px] font-semibold text-zinc-800 group-hover:text-indigo-700 transition">
                  {act.title}
                </p>

                <p className="text-xs md:text-[12px] text-zinc-500 mt-0.5">
                  {act.desc}
                </p>
              </div>

              <ChevronRight
                size={17}
                className="text-zinc-300 group-hover:text-indigo-500 transition"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;

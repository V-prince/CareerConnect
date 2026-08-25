import React from "react";
import { FaArrowRight } from "react-icons/fa";

const DashboardData = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4 mb-6 md:mb-7">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="bg-white rounded-xl border border-zinc-200 p-4 md:p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs md:text-sm text-zinc-500 truncate">
                  {stat.title}
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mt-1.5 md:mt-2">
                  {stat.value}
                </h2>

                <p className="text-[11px] md:text-xs text-green-600 font-medium mt-1.5 flex items-center gap-1">
                  <FaArrowRight size={9} className="-rotate-45" />↑{" "}
                  {stat.change}
                </p>
              </div>

              <div
                className={`w-11 h-11 md:w-12 md:h-12 rounded-xl ${stat.iconBg} flex items-center justify-center shrink-0`}
              >
                <Icon size={20} className={stat.iconColor} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardData;

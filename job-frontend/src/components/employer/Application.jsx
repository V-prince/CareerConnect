import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { ChevronDown } from "lucide-react";

const Applications = ({
  period,
  setPeriod,
  showPeriod,
  setShowPeriod,
  periods,
  currentData,
}) => {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 md:p-5 mb-6 md:mb-7">
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <div>
          <h2 className="text-base md:text-lg font-bold text-zinc-800">
            Applications Overview
          </h2>

          <p className="text-xs md:text-sm text-zinc-500 mt-0.5">
            Monthly application trends
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowPeriod(!showPeriod)}
            className="h-9 px-3 rounded-lg bg-white border border-zinc-200 text-xs md:text-sm font-medium text-zinc-700 flex items-center gap-2 hover:bg-zinc-50"
          >
            {period}

            <ChevronDown size={14} className="text-zinc-400" />
          </button>

          {showPeriod && (
            <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg border border-zinc-200 shadow-md py-1 z-20">
              {periods.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setPeriod(p);
                    setShowPeriod(false);
                  }}
                  className={`w-full text-left px-3.5 py-2 text-xs md:text-sm transition ${
                    period === p
                      ? "bg-indigo-50 text-indigo-700 font-semibold"
                      : "text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="h-[260px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={currentData}
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="applicationsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.25} />

                <stop offset="100%" stopColor="#4F46E5" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E4E4E7"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fontSize: 11,
                fill: "#71717a",
              }}
              axisLine={{
                stroke: "#E4E4E7",
              }}
              tickLine={false}
            />

            <YAxis
              tick={{
                fontSize: 11,
                fill: "#71717a",
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #e4e4e7",
                boxShadow:
                  "0 10px 25px -5px rgba(0,0,0,0.07), 0 4px 10px rgba(0,0,0,0.04)",
                fontSize: 12,
              }}
            />

            <Area
              type="monotone"
              dataKey="applications"
              stroke="#4F46E5"
              strokeWidth={3}
              fill="url(#applicationsGrad)"
              activeDot={{
                r: 5,
                fill: "#4F46E5",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Applications;

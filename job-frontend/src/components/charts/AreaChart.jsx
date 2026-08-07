import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const AdminAreaChart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
      >
        <defs>
          <linearGradient id="users" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.25} />
            <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="jobs" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="applications" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#22C55E" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid
          vertical={false}
          stroke="#F1F5F9"
          strokeDasharray="4 4"
        />

        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          cursor={{ stroke: "#CBD5E1", strokeDasharray: "3 3" }}
          contentStyle={{
            border: "none",
            borderRadius: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,.1)",
          }}
        />

        <Legend />

        <Area
          type="natural"
          dataKey="users"
          stroke="#7C3AED"
          fill="url(#users)"
          strokeWidth={3}
        />

        <Area
          type="natural"
          dataKey="jobs"
          stroke="#3B82F6"
          fill="url(#jobs)"
          strokeWidth={3}
        />

        <Area
          type="natural"
          dataKey="applications"
          stroke="#22C55E"
          fill="url(#applications)"
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

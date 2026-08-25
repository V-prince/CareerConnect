import React from "react";
import {
  CalendarDays,
  Users,
  Building2,
  MapPin,
  BriefcaseBusiness,
  HandHelping,
} from "lucide-react";

const EmpCompanyDetails = ({ details }) => {
  const icons = {
    calendar: CalendarDays,
    users: Users,
    industry: Building2,
    location: MapPin,
    briefcase: BriefcaseBusiness,
    specialization: HandHelping,
  };

  return (
    <section className="bg-white border border-zinc-200 rounded-xl p-5 md:p-6">
      <h2 className="text-lg font-semibold text-zinc-900">Company Details</h2>

      <div className="mt-5 border-t border-zinc-100">
        {details.map((detail) => {
          const Icon = icons[detail.icon];

          return (
            <div
              key={detail.label}
              className="grid grid-cols-[28px_155px_1fr] gap-3 items-start py-3.5 border-b border-zinc-100 last:border-b-0"
            >
              <div className="text-zinc-700 pt-0.5">
                <Icon size={18} />
              </div>

              <p className="text-sm font-medium text-zinc-700">
                {detail.label}
              </p>

              <p className="text-sm text-zinc-500 leading-6">{detail.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EmpCompanyDetails;

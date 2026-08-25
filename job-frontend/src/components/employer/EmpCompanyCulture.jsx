import React from "react";
import { Heart, Users } from "lucide-react";

const EmpCompanyCulture = ({ culture }) => {
  const icons = {
    heart: Heart,
    users: Users,
  };

  return (
    <section className="bg-white border border-zinc-200 rounded-xl p-5 md:p-6">
      <h2 className="text-lg font-semibold text-zinc-900">Company Culture</h2>

      <div className="mt-5">
        {culture.map((item) => {
          const Icon = icons[item.type];

          return (
            <div
              key={item.title}
              className="flex gap-4 py-4 border-b border-zinc-100 last:border-b-0"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                <Icon size={21} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-900">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-500 leading-6 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EmpCompanyCulture;

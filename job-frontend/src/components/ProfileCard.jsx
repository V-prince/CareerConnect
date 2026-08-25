
export const ProfileCard = ({
  icon,
  title,
  action,
  children,
}) => {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all">

      <div className="flex items-center justify-between gap-3 mb-4">

        <div className="flex items-center gap-3">

          <span className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            {icon}
          </span>

          <span className="text-sm text-zinc-500 font-medium">
            {title}
          </span>

        </div>

        {action}

      </div>

      {children}

    </div>
  );
};
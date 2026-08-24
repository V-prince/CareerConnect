import { FaBuilding } from "react-icons/fa";

const CompanyInfo = ({ title, value, blue }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 text-zinc-400 mt-0.5">
        <FaBuilding size={13} />
      </div>

      <div className="flex-1">
        <p className="text-xs text-zinc-500">{title}</p>

        <p
          className={`text-sm mt-0.5 ${
            blue ? "text-blue-600 font-medium" : "text-zinc-700"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
};
export default CompanyInfo;

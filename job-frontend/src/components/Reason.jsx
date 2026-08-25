import { FaCheckCircle } from "react-icons/fa";

const Reason = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
        <FaCheckCircle size={13} />
      </div>

      <p className="text-sm text-zinc-600">{text}</p>
    </div>
  );
};
export default Reason;

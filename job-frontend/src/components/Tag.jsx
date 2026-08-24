import { X } from "lucide-react";

export const Tag = ({ text, onRemove }) => {
  return (
    <span className="flex items-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">

      {text}

      <button
        type="button"
        onClick={onRemove}
        className="hover:text-red-500 cursor-pointer"
      >
        <X size={15} />
      </button>

    </span>
  );
};



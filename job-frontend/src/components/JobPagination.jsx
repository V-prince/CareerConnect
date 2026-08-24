import { ChevronRight, ChevronLeft } from "lucide-react";

const JobPagination = ({ currentPage, totalPages, setCurrentPage }) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-lg border transition flex items-center justify-center ${
          currentPage === 1
            ? "cursor-not-allowed bg-zinc-50 border-zinc-200 text-zinc-400"
            : "bg-white border-zinc-200 text-zinc-500 hover:border-indigo-200 hover:text-indigo-600"
        }`}
      >
        <ChevronLeft size={18} />
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`w-10 h-10 rounded-lg border transition flex items-center justify-center text-sm font-medium ${
            currentPage === index + 1
              ? "bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-200"
              : "bg-white border-zinc-200 text-zinc-600 hover:border-indigo-200 hover:text-indigo-600"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-lg border transition flex items-center justify-center ${
          currentPage === totalPages
            ? "cursor-not-allowed bg-zinc-50 border-zinc-200 text-zinc-400"
            : "bg-white border-zinc-200 text-zinc-500 hover:border-indigo-200 hover:text-indigo-600"
        }`}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default JobPagination;

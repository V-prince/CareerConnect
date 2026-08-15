import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EmpAppPage = ({
  currentPage,
  totalPages,
  startIndex,
  totalApplicants,
  applicantsPerPage,
  onPageChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-5 py-4 border-t border-zinc-200">
      <p className="text-sm text-zinc-600">
        Showing{" "}
        <span className="font-medium text-zinc-800">
          {totalApplicants === 0 ? 0 : startIndex + 1}
        </span>{" "}
        to{" "}
        <span className="font-medium text-zinc-800">
          {Math.min(startIndex + applicantsPerPage, totalApplicants)}
        </span>{" "}
        of <span className="font-medium text-zinc-800">{totalApplicants}</span>{" "}
        applicants
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="w-9 h-9 rounded-lg border border-zinc-300 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={17} />
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="w-9 h-9 rounded-lg border border-zinc-300 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
};

export default EmpAppPage;

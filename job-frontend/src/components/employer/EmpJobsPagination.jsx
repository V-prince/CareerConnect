import React from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const EmpJobsPagination = ({
  filteredJobsLength,
  startIndex,
  jobsPerPage,
  safeCurrentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageChange,
  onJobsPerPage,
}) => {
  return (
    <div className="bg-white border border-zinc-200 border-t-0 px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-zinc-500">
        Showing {filteredJobsLength === 0 ? 0 : startIndex + 1} to{" "}
        {Math.min(startIndex + jobsPerPage, filteredJobsLength)} of{" "}
        {filteredJobsLength} jobs
      </p>

      <div className="flex items-center gap-2">
        <button
          disabled={safeCurrentPage === 1}
          onClick={onPrevious}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={17} />
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition ${
                safeCurrentPage === page
                  ? "bg-blue-600 text-white"
                  : "border border-zinc-200 text-zinc-600 hover:bg-zinc-50"
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          disabled={safeCurrentPage === totalPages}
          onClick={onNext}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronRight size={17} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-zinc-500">Jobs per page</span>

        <div className="relative">
          <select
            value={jobsPerPage}
            onChange={onJobsPerPage}
            className="appearance-none w-20 h-9 px-3 pr-8 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-700 outline-none focus:border-blue-500"
          >
            <option value={5}>5</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
            <option value={12}>12</option>
          </select>

          <ChevronDown
            size={15}
            className="absolute right-2.5 top-3 text-zinc-400 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default EmpJobsPagination;

import React, { useState } from "react";
import { ChevronDown, MapPin, Search } from "lucide-react";

const statusClass = {
  New: "bg-sky-50 text-sky-600",
  Shortlisted: "bg-emerald-50 text-emerald-600",
  Interview: "bg-purple-50 text-purple-600",
  Offered: "bg-amber-50 text-amber-600",
  Hired: "bg-green-50 text-green-700",
  Rejected: "bg-red-50 text-red-600",
};

const statusOptions = [
  "New",
  "Shortlisted",
  "Interview",
  "Offered",
  "Hired",
  "Rejected",
];

const EmpAppTable = ({
  applicants,
  openStatusId,
  onStatusOpen,
  onStatusChange,
  onViewProfile,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1150px]">
        <thead>
          <tr className="border-b border-zinc-200">
            <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-700">
              Applicant
            </th>

            <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-700">
              Job Applied For
            </th>

            <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-700">
              Experience
            </th>

            <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-700">
              Location
            </th>

            <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-700">
              Applied On
            </th>

            <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-700">
              Status
            </th>

            <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {applicants.length > 0 ? (
            applicants.map((applicant) => (
              <ApplicantRow
                key={applicant.id}
                applicant={applicant}
                openStatusId={openStatusId}
                onStatusOpen={onStatusOpen}
                onStatusChange={onStatusChange}
                onViewProfile={onViewProfile}
              />
            ))
          ) : (
            <tr>
              <td colSpan="7" className="px-5 py-16 text-center">
                <div className="text-zinc-400">
                  <Search size={35} className="mx-auto mb-3" />

                  <p className="text-base font-medium text-zinc-700">
                    No applicants found
                  </p>

                  <p className="text-sm text-zinc-500 mt-1">
                    Try changing your search or filters.
                  </p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const ApplicantRow = ({
  applicant,
  openStatusId,
  onStatusOpen,
  onStatusChange,
  onViewProfile,
}) => {
  const [dropdownPosition, setDropdownPosition] = useState(null);

  const handleStatusClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const dropdownHeight = 260;
    const spaceBelow = window.innerHeight - rect.bottom;

    const openUpward = spaceBelow < dropdownHeight;

    setDropdownPosition({
      top: openUpward ? rect.top - dropdownHeight - 8 : rect.bottom + 8,
      left: rect.left,
    });

    onStatusOpen(applicant.id);
  };

  return (
    <tr className="border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50/70 transition">
      <td className="px-5 py-5">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-semibold text-sm shrink-0">
            {applicant.avatar}
          </div>

          <div className="min-w-0">
            <p className="font-semibold text-zinc-900">{applicant.name}</p>

            <p className="text-sm text-zinc-500 mt-0.5">{applicant.email}</p>

            <p className="text-xs text-blue-600 mt-1.5">
              Skills: {applicant.skills.join(", ")}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-5">
        <p className="font-medium text-zinc-900">{applicant.jobAppliedFor}</p>

        <p className="text-xs text-zinc-500 mt-1">Job Application</p>
      </td>

      <td className="px-4 py-5 text-sm text-zinc-700 whitespace-nowrap">
        {applicant.experience}
      </td>

      <td className="px-4 py-5">
        <div className="flex items-start gap-1.5">
          <MapPin size={16} className="text-zinc-400 mt-0.5 shrink-0" />

          <div>
            <p className="text-sm text-zinc-700 whitespace-nowrap">
              {applicant.location}
            </p>

            <p className="text-xs text-zinc-500 mt-1">{applicant.country}</p>
          </div>
        </div>
      </td>

      <td className="px-4 py-5">
        <p className="text-sm text-zinc-700 whitespace-nowrap">
          {applicant.appliedOn}
        </p>

        <p className="text-xs text-zinc-500 mt-1">
          {applicant.id <= 2
            ? "2 days ago"
            : applicant.id <= 5
              ? "3 days ago"
              : "4 days ago"}
        </p>
      </td>

      <td className="px-4 py-5">
        <button
          type="button"
          onClick={handleStatusClick}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition hover:opacity-80 ${
            statusClass[applicant.status]
          }`}
        >
          {applicant.status}
          <ChevronDown size={13} />
        </button>

        {openStatusId === applicant.id && dropdownPosition && (
          <div
            className="fixed z-[9999] w-36 rounded-lg border border-zinc-200 bg-white shadow-xl overflow-hidden"
            style={{
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
            }}
          >
            {statusOptions.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => {
                  onStatusChange(applicant.id, status);
                  setDropdownPosition(null);
                }}
                className={`w-full text-left px-3 py-2.5 text-sm transition ${
                  applicant.status === status
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        )}
      </td>

      <td className="px-4 py-5">
        <button
          type="button"
          onClick={() => onViewProfile(applicant)}
          className="px-4 py-2 rounded-lg border border-blue-300 bg-white text-blue-600 text-sm font-medium hover:bg-blue-50 transition whitespace-nowrap"
        >
          View Profile
        </button>
      </td>
    </tr>
  );
};

export default EmpAppTable;

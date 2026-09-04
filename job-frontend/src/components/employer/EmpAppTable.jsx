import React, { useState } from "react";
import { ChevronDown, MapPin, Search } from "lucide-react";
import dayjs from "dayjs";

const statusClass = {
  new: "bg-sky-50 text-sky-600",
  pending: "bg-yellow-50 text-yellow-700",
  shortlisted: "bg-emerald-50 text-emerald-600",
  interview: "bg-purple-50 text-purple-600",
  offered: "bg-amber-50 text-amber-600",
  hired: "bg-green-50 text-green-700",
  rejected: "bg-red-50 text-red-600",

};

const statusOptions = [
  { label: "New", value: "new" },
  { label: "Pending", value: "pending" },
  { label: "Shortlisted", value: "shortlisted" },
  { label: "Interview", value: "interview" },
  { label: "Offered", value: "offered" },
  { label: "Hired", value: "hired" },
  { label: "Rejected", value: "rejected" },
];

const EmpAppTable = ({
  user,
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
                key={applicant._id}
                user={user}
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
  user,
  applicant,
  openStatusId,
  onStatusOpen,
  onStatusChange,
  onViewProfile,
}) => {
  const [dropdownPosition, setDropdownPosition] = useState(null);

  const handleStatusClick = (e) => {
    const button = e.currentTarget;
    e.stopPropagation();
    const rect = button.getBoundingClientRect();

    const dropdownHeight = 260;
    const spaceBelow = window.innerHeight - rect.bottom;

    const openUpward = spaceBelow < dropdownHeight;

    setDropdownPosition({
      top: openUpward ? rect.top - dropdownHeight - 8 : rect.bottom + 8,
      left: rect.left,
    });

    onStatusOpen(applicant._id);
  };

  return (
    <tr onClick={() => onViewProfile(applicant)} className="border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50/70 transition cursor-pointer">
      <td className="px-5 py-5">
        <div className="flex items-start gap-3">

          {
            applicant?.candidate?.photo ? (
              <img src={applicant?.candidate?.photo} className="w-11 h-11 rounded-full  flex items-center justify-center object-cover bg-zinc-100 text-zinc-400 shrink-0" alt="Candidate Photo">
              </img>
            ) :
              (
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                  {applicant?.candidate?.fullname?.split(" ").map((name) => name[0]).join("").toUpperCase()}
                </div>
              )
          }

          <div className="min-w-0">
            <p className="font-semibold text-zinc-900 capitalize">{applicant?.candidate?.fullname}</p>

            <p className="text-sm text-zinc-500 mt-0.5">{applicant?.candidate?.email}</p>

            <p className="text-xs text-blue-600 mt-1.5">
              Skills: {applicant?.candidate?.skills?.join(", ")}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-5">
        <p className="font-medium text-zinc-900">{applicant?.job?.jobTitle}</p>

        <p className="text-xs text-zinc-500 mt-1">Job Application</p>
      </td>

      <td className="px-4 py-5">
        <div className="flex items-start gap-1.5">
          <MapPin size={16} className="text-zinc-400 mt-0.5 shrink-0" />

          <div>
            <p className="text-sm text-zinc-700 whitespace-nowrap">
              {applicant?.candidate?.location}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-5">
        <p className="text-sm text-zinc-700 whitespace-nowrap">
          {dayjs(applicant?.createdAt).format("MMM D, YYYY")}
        </p>

        <p className="text-xs text-zinc-500 mt-1">
          {dayjs(applicant?.createdAt).format("h:mm A")}
        </p>
      </td>

      {
        user.role === "employer" ? (
          <td className="px-4 py-5">
            <button
              type="button"
              onClick={handleStatusClick}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium  capitalize cursor-pointer transition hover:opacity-80 ${statusClass[applicant?.status] || "bg-zinc-50 text-zinc-700 "
                }`}
            >
              {applicant?.status}
              <ChevronDown size={13} />
            </button>

            {openStatusId === applicant._id && dropdownPosition && (
              <div
                className="fixed z-[9999] w-36 rounded-lg border border-zinc-200 bg-white shadow-xl overflow-hidden"
                style={{
                  top: `${dropdownPosition.top}px`,
                  left: `${dropdownPosition.left}px`,
                }}
              >
                {statusOptions.map((status) => (
                  <button
                    key={status.value}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onStatusChange(applicant._id, status.value);
                      setDropdownPosition(null);
                    }}
                    className={`w-full text-left px-3 py-2.5 text-sm transition ${applicant?.status === status.value
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-zinc-700 hover:bg-zinc-50 capitalize"
                      }`}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            )}
          </td>
        ) : (
          <td className="px-4 py-5">
            <p
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium  capitalize cursor-pointer transition hover:opacity-80 ${statusClass[applicant?.status] || "bg-zinc-50 text-zinc-700 "
                }`}
            >
              {applicant?.status}
            </p>
          </td>
        )
      }

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

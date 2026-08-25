import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  UserRound,
} from "lucide-react";
import { initialApplicantsData } from "./EmpApplicants";

const statusStyles = {
  New: "bg-sky-50 text-sky-700",
  Shortlisted: "bg-emerald-50 text-emerald-700",
  Interview: "bg-purple-50 text-purple-700",
  Offered: "bg-amber-50 text-amber-700",
  Hired: "bg-green-50 text-green-700",
  Rejected: "bg-red-50 text-red-700",
};

const EmpApplicantProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const applicant = initialApplicantsData.find(
    (item) => String(item.id) === id,
  );

  if (!applicant) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-zinc-900">
          Applicant not found
        </h1>
        <Link
          to="/employer/applicants"
          className="inline-block mt-4 text-blue-600 font-medium"
        >
          Back to applications
        </Link>
      </main>
    );
  }

  const education = applicant.education || "Not provided";
  const university = applicant.university || "Not provided";
  const graduation = applicant.graduation || "Not provided";
  const phone = applicant.phone || "Not provided";
  const availability = applicant.availability || "Not provided";

  const details = [
    [CalendarDays, "Applied on", applicant.appliedOn],
    [Clock3, "Experience", applicant.experience],
    [MapPin, "Location", `${applicant.location}, ${applicant.country}`],
    [GraduationCap, "Education", education],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <main className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex items-center gap-2 text-sm mb-7">
          <button
            onClick={() => navigate("/employer/applicants")}
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            Applications
          </button>
          <span className="text-zinc-400">/</span>
          <span className="text-zinc-800 font-medium">Applicant Profile</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-7">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-zinc-900">
              Applicant Profile
            </h1>
            <p className="text-sm md:text-base text-zinc-500 mt-1">
              Review the candidate’s application and profile information
            </p>
          </div>
          <button
            onClick={() => navigate("/employer/applicants")}
            className="self-start inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-700 text-sm font-semibold hover:bg-zinc-50 transition"
          >
            <ArrowLeft size={16} /> Back to Applications
          </button>
        </div>

        <section className="bg-white border border-zinc-200 rounded-xl p-5 md:p-6">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-28 h-28 rounded-xl bg-blue-600 text-white flex items-center justify-center text-3xl font-bold shrink-0">
              {applicant.avatar}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-zinc-900">
                  {applicant.name}
                </h2>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-zinc-600">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={16} /> {applicant.location}, {applicant.country}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BriefcaseBusiness size={16} /> {applicant.experience}{" "}
                  experience
                </span>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-zinc-600">
                <a
                  href={`mailto:${applicant.email}`}
                  className="inline-flex items-center gap-1.5 text-blue-600 font-medium hover:text-blue-700"
                >
                  <Mail size={16} /> {applicant.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-5 md:gap-6 mt-5">
          <section className="bg-white border border-zinc-200 rounded-xl p-5 md:p-6">
            <h2 className="text-lg font-semibold text-zinc-900">
              About Candidate
            </h2>
            <div className="mt-7 pt-6 border-t border-zinc-100">
              <h3 className="text-sm font-semibold text-zinc-900">Skills</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {applicant.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mt-7">
              <div>
                <p className="text-sm font-semibold text-zinc-900">Education</p>
                <p className="text-sm text-zinc-500 mt-1">{education}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">Email</p>
                <a
                  href={`mailto:${applicant.email}`}
                  className="text-sm text-blue-600 mt-1 inline-block"
                >
                  {applicant.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">Phone</p>
                <p className="text-sm text-zinc-500 mt-1">{phone}</p>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Resume</p>
                  <p className="text-xs text-zinc-500">
                    {applicant.name.replace(/\s+/g, "_")}_Resume.pdf
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                <Download size={16} />
              </button>
            </div>
          </section>

          <section className="bg-white border border-zinc-200 rounded-xl p-5 md:p-6">
            <h2 className="text-lg font-semibold text-zinc-900">
              Application Details
            </h2>
            <div className="mt-5 border-t border-zinc-100">
              {details.map(([Icon, label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[28px_145px_1fr] gap-3 items-start py-3.5 border-b border-zinc-100 last:border-b-0"
                >
                  <Icon size={18} className="text-zinc-700 mt-0.5" />
                  <p className="text-sm font-medium text-zinc-700">{label}</p>
                  <p className="text-sm text-zinc-500 leading-6">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center gap-2 text-sm text-zinc-600">
              <Mail size={17} /> Contact details are available in the candidate
              profile.
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EmpApplicantProfile;

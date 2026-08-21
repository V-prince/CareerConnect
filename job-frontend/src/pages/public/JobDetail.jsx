import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
  FaGraduationCap,
  FaBuilding,
  FaCheckCircle,
  FaUsers,
  FaCalendarAlt,
  FaGlobe,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";

import ApplicationReview from "../../components/popups/ApplicationReview";

const JobDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showApplicationReview, setShowApplicationReview] = useState(false);

  const job = location.state?.job;

  if (!job) {
    return (
      <div className="min-h-[70vh] bg-zinc-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-800">Job Not Found</h2>

          <p className="text-sm text-zinc-500 mt-2">
            The job you are looking for could not be found.
          </p>

          <button
            onClick={() => navigate("/jobs")}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition"
          >
            <FaArrowLeft />
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  const companyName = job.company || job.companey || "Company";

  const skills = Array.isArray(job.skills)
    ? job.skills
    : job.skills
      ? job.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean)
      : [];

  const handleApply = () => {
    setShowApplicationReview(true);
  };

  const handleSubmitApplication = () => {
    setShowApplicationReview(false);

    navigate("/applications", {
      state: {
        job,
        applicationSubmitted: true,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-700"
          >
            Home
          </button>

          <span className="text-zinc-400">›</span>

          <button
            onClick={() => navigate("/jobs")}
            className="text-blue-600 hover:text-blue-700"
          >
            Jobs
          </button>

          <span className="text-zinc-400">›</span>

          <span className="text-zinc-600 truncate">{job.title}</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
              <div className="p-5 md:p-7">
                <div className="flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-zinc-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
                        {job.icon ? (
                          <img
                            src={job.icon}
                            alt={companyName}
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <FaBuilding className="text-indigo-500 text-2xl" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900">
                            {job.title}
                          </h1>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 mt-1.5 text-sm md:text-base text-zinc-500">
                          <span>{companyName}</span>

                          <span className="text-zinc-300">•</span>

                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-zinc-400 text-xs" />

                            {job.city || "Location"}

                            {job.state ? `, ${job.state}` : ""}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {job.jobType && (
                            <Tag
                              icon={<FaBriefcase />}
                              text={job.jobType}
                              color="green"
                            />
                          )}

                          {job.experience && (
                            <Tag
                              icon={<FaGraduationCap />}
                              text={job.experience}
                              color="blue"
                            />
                          )}

                          {job.workMode && (
                            <Tag
                              icon={<FaGlobe />}
                              text={job.workMode}
                              color="purple"
                            />
                          )}

                          {(job.salaryLabel || job.salary) && (
                            <Tag
                              icon={<FaMoneyBillWave />}
                              text={job.salaryLabel || `₹${job.salary} LPA`}
                              color="emerald"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-500">
                      <FaCalendarAlt />
                      <span>Posted {job.date || "recently"}</span>
                      {job.applicants && (
                        <>
                          <span className="text-zinc-300">•</span>
                          <span className="flex items-center gap-1">
                            <FaUsers />
                            {job.applicants} applicants
                          </span>
                        </>
                      )}
                    </div>
                    <button
                      onClick={handleApply}
                      className="h-11 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition shadow-sm flex items-center justify-center gap-2"
                    >
                      <FaPaperPlane />
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-100" />
              <div className="p-5 md:p-7">
                <Section title="Job Description">
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-7 whitespace-pre-line">
                    {job.description || "No job description has been provided."}
                  </p>
                </Section>
                <Section title="Requirements">
                  {job.requirements ? (
                    <BulletContent content={job.requirements} />
                  ) : (
                    <p className="text-sm text-zinc-500">
                      No specific requirements have been provided.
                    </p>
                  )}
                </Section>
                {skills.length > 0 && (
                  <Section title="Preferred Skills">
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs md:text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Section>
                )}

                <div className="pt-6 border-t border-zinc-100">
                  <h3 className="text-base md:text-lg font-bold text-zinc-800 mb-5">
                    Job Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    <DetailItem
                      icon={<FaBriefcase />}
                      title="Job Type"
                      value={job.jobType || "Not specified"}
                    />

                    <DetailItem
                      icon={<FaBuilding />}
                      title="Industry"
                      value={job.industry || "Not specified"}
                    />

                    <DetailItem
                      icon={<FaGraduationCap />}
                      title="Experience"
                      value={job.experience || "Not specified"}
                    />

                    <DetailItem
                      icon={<FaUsers />}
                      title="Role"
                      value={job.title || "Not specified"}
                    />

                    <DetailItem
                      icon={<FaClock />}
                      title="Employment Type"
                      value={job.employmentType || "Not specified"}
                    />

                    <DetailItem
                      icon={<FaUsers />}
                      title="Position Openings"
                      value={
                        job.openings
                          ? `${job.openings} ${
                              Number(job.openings) === 1
                                ? "Position"
                                : "Positions"
                            }`
                          : "Not specified"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5">
              <h3 className="font-bold text-zinc-800 mb-5">About Company</h3>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg border border-zinc-200 flex items-center justify-center overflow-hidden">
                  {job.icon ? (
                    <img
                      src={job.icon}
                      alt={companyName}
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    <FaBuilding className="text-indigo-500" />
                  )}
                </div>

                <div>
                  <p className="font-semibold text-zinc-800">{companyName}</p>
                </div>
              </div>

              <p className="text-sm text-zinc-600 leading-6 mb-5">
                {job.companyDescription ||
                  `${companyName} is offering an exciting opportunity for talented professionals to grow their careers and work on impactful projects.`}
              </p>

              <div className="space-y-4">
                <CompanyInfo
                  title="Industry"
                  value={job.industry || job.category || "Not specified"}
                />

                <CompanyInfo
                  title="Company Size"
                  value={job.companySize || "Not specified"}
                />

                <CompanyInfo
                  title="Headquarters"
                  value={job.headquarters || "India"}
                />

                <CompanyInfo
                  title="Website"
                  value={job.website || "Not specified"}
                  blue
                />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5">
              <h3 className="font-bold text-zinc-800 mb-5">Why Join Us?</h3>

              <div className="space-y-4">
                <Reason text="Work with talented professionals" />

                <Reason text="Innovative and impactful projects" />

                <Reason text="Learning & development opportunities" />

                <Reason text="Great work-life balance" />

                <Reason text="Competitive salary & benefits" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <ApplicationReview
        show={showApplicationReview}
        onClose={() => setShowApplicationReview(false)}
        onSubmit={handleSubmitApplication}
        job={job}
      />
    </div>
  );
};

const Tag = ({ icon, text, color }) => {
  const colors = {
    green: "bg-green-50 text-green-600 border-green-100",
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${
        colors[color] || colors.blue
      }`}
    >
      {icon}
      {text}
    </span>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-7">
    <h3 className="text-base md:text-lg font-bold text-zinc-800 mb-3">
      {title}
    </h3>

    {children}
  </div>
);

const BulletContent = ({ content }) => {
  const items = Array.isArray(content)
    ? content
    : String(content)
        .split(/\n|•|;/)
        .map((item) => item.trim())
        .filter(Boolean);

  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-2 text-sm md:text-[15px] text-zinc-600 leading-6"
        >
          <span className="text-blue-600 mt-2 shrink-0">•</span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const DetailItem = ({ icon, title, value }) => (
  <div className="flex items-start gap-3">
    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
      {icon}
    </div>

    <div>
      <p className="text-xs text-zinc-500">{title}</p>

      <p className="text-sm font-medium text-zinc-700 mt-1">{value}</p>
    </div>
  </div>
);

const CompanyInfo = ({ title, value, blue }) => (
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

const Reason = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
      <FaCheckCircle size={13} />
    </div>

    <p className="text-sm text-zinc-600">{text}</p>
  </div>
);

export default JobDetail;

import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import Reason from "../../components/Reason";
import CompanyInfo from "../../components/CompanyInfo";
import DetailItem from "../../components/DetailItem";
import BulletContent from "../../components/BulletContent";
import Section from "../../components/Section";
import Tag from "../../components/Tag";
import { GetPublicJobDetails } from "../../Services/publicService";
import { JobApplyApI } from "../../Services/candidateService";
import dayjs from "dayjs";
import { ClipboardClock } from "lucide-react";
import toast from "react-hot-toast";




const JobDetail = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, SetLoading] = useState(false)
  const { id } = useParams();

  const [showApplicationReview, setShowApplicationReview] = useState(false);


  const skills = Array.isArray(job?.skills)
    ? job?.skills
    : job?.skills
      ? job.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)
      : [];

  const handleApply = () => {
    setShowApplicationReview(true);
  };

  const handleSubmitApplication = async (resume) => {
    setShowApplicationReview(false);
    try {
      const formData = {
        resume,
        jobId:id
      }
      SetLoading(true)
      const data = await JobApplyApI(formData);

      if (!data.success) {
        return toast.error(data.message);
      }
      toast.success(data.message);
      navigate('/jobs');
    } catch (error) {
      console.log(error)
    } finally {
      SetLoading(false)
    }
  };


  const getDataByIds = async () => {
    try {
      const data = await GetPublicJobDetails({ id });
      if (!data.success) {
        return console.log("get detail err:", data.message);
      }
      setJob(data?.job)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    getDataByIds();
  }, [id])

  const formatSalary = (salary) => {
    if (!salary) return "";

    if (salary >= 100000) {
      const lpa = salary / 100000;
      return Number.isInteger(lpa) ? `${lpa} LPA` : `${lpa.toFixed(1)} LPA`;
    }

    return `₹${salary.toLocaleString("en-IN")}`;
  };

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

          <span className="text-zinc-600 truncate">{job?.jobTitle}</span>
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
                        {job?.company ? (
                          <img
                            src={job?.company?.logo}
                            alt={job?.company.companyName}
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <FaBuilding className="text-indigo-500 text-2xl" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900">
                            {job?.jobTtile}
                          </h1>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 mt-1.5 text-sm md:text-base text-zinc-500">
                          <span>{job?.company?.companyName}</span>

                          <span className="text-zinc-300">•</span>

                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-zinc-400 text-xs" />

                            {job?.location}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {job?.jobType && (
                            <Tag
                              icon={<FaBriefcase />}
                              text={job?.jobType}
                              color="green"
                            />
                          )}

                          {job?.experienceLevel && (
                            <Tag
                              icon={<FaGraduationCap />}
                              text={job?.experienceLevel}
                              color="blue"
                            />
                          )}

                          {job?.workMode && (
                            <Tag
                              icon={<FaGlobe />}
                              text={job.workMode}
                              color="purple"
                            />
                          )}

                          {(job?.salaryLabel || job?.maxSalary) && (
                            <Tag
                              icon={<FaMoneyBillWave />}
                              text={job?.salaryLabel || `₹${formatSalary(job?.minSalary)} - ${formatSalary(job?.maxSalary)}`}
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
                      <span>Posted {dayjs(job?.createdAt).format("DD/MM/YYYY") || "recently"}</span>
                      {job?.applicants && (
                        <>
                          <span className="text-zinc-300">•</span>
                          <span className="flex items-center gap-1">
                            <FaUsers />
                            {job?.applicants} applicants
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
                    {job?.jobDescription || "No job description has been provided."}
                  </p>
                </Section>
                <Section title="Requirements">
                  {job?.requirements ? (
                    <BulletContent content={job?.requirements} />
                  ) : (
                    <p className="text-sm text-zinc-500">
                      No specific requirements have been provided.
                    </p>
                  )}
                </Section>
                {skills?.length > 0 && (
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
                      value={job?.jobType || "Not specified"}
                    />

                    <DetailItem
                      icon={<FaBuilding />}
                      title="Industry"
                      value={job?.company?.industry || "Not specified"}
                    />

                    <DetailItem
                      icon={<FaGraduationCap />}
                      title="Experience"
                      value={job?.experienceLevel || "Not specified"}
                    />

                    <DetailItem
                      icon={<FaUsers />}
                      title="Role"
                      value={job?.jobTitle || "Not specified"}
                    />

                    <DetailItem
                      icon={<FaClock />}
                      title="Employment Type"
                      value={job?.employmentType || "Not specified"}
                    />

                    <DetailItem
                      icon={<FaUsers />}
                      title="Position Openings"
                      value={
                        job?.openings
                          ? `${job?.openings} ${Number(job?.openings) === 1
                            ? "Position"
                            : "Positions"
                          }`
                          : "Not specified"
                      }
                    />

                    <DetailItem
                      icon={<ClipboardClock />}
                      title="Dedline"
                      value={dayjs(job?.deadline).format("DD-MM-YYYY") || "Not specified"}
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
                  {job?.company?.logo ? (
                    <img
                      src={job?.company?.logo}
                      alt={job?.company?.companyName}
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    <FaBuilding className="text-indigo-500" />
                  )}
                </div>

                <div>
                  <p className="font-semibold text-zinc-800">{job?.company?.companyName}</p>
                </div>
              </div>

              <p className="text-sm text-zinc-600 leading-6 mb-5">
                {job?.company?.description ||
                  `${job?.company?.companyName} is offering an exciting opportunity for talented professionals to grow their careers and work on impactful projects.`}
              </p>

              <div className="space-y-4">
                <CompanyInfo
                  title="Industry"
                  value={job?.company?.industry || job?.category || "Not specified"}
                />

                <CompanyInfo
                  title="Company Size"
                  value={job?.company?.size || "Not specified"}
                />

                <CompanyInfo
                  title="Headquarters"
                  value={job?.company?.location || "India"}
                />

                <CompanyInfo
                  title="Website"
                  value={job?.company?.website || "Not specified"}
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
        loading={ loading}
      />
    </div>
  );
};

export default JobDetail;

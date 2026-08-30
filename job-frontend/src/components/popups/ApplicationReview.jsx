import {
  FaTimes,
  FaFileAlt,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaPaperPlane,
  FaEye,
  FaDownload,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuth } from "../../store/UserContext";
import { Loader } from "lucide-react";

const ApplicationReview = ({ loading, show, onClose, onSubmit, job }) => {
  const { user, isLoggedIn } = useAuth()
  if (!show) return null;

  const handleViewResume = () => {
    if (!user?.resume) {
      toast.error("No resume is available.");
      return;
    }

    window.open(user?.resume, "_blank", "noopener,noreferrer");
  };

  const handleDownloadResume = async () => {
    if (!user?.resume) {
      toast.error("No resume is available.");
      return;
    }

    try {
      const response = await fetch(user?.resume);

      if (!response.ok) {
        throw new Error("Unable to download resume");
      }

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;

      link.download = `${user?.fullname.replace(/\s+/g, "_")}_Resume.pdf`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Resume download error:", error);

      const link = document.createElement("a");

      link.href = user?.resume;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.download = `${user?.fullname.replace(/\s+/g, "_")}_Resume`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">
              Review Your Application
            </h2>

            <p className="text-sm text-zinc-500 mt-1">
              Review your profile before applying for this job.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition"
          >
            <FaTimes />
          </button>
        </div>

        <div className="px-6 pt-5">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
            <div className="w-11 h-11 rounded-lg bg-white border border-blue-100 flex items-center justify-center overflow-hidden shrink-0">
              {job?.company?.logo ? (
                <img
                  src={job?.company?.logo}
                  alt={job?.company?.companyName}
                  className="w-full h-full object-contain p-1"
                />
              ) : (
                <FaBuilding className="text-blue-600" />
              )}
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-900 truncate">
                {job?.jobTitle || "Job"}
              </p>

              <p className="text-xs text-zinc-500 mt-0.5">
                {job?.company?.companyName}
                {job?.location}
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-zinc-800">Your Profile</h3>
          </div>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <ApplicationInfoRow
              icon={<FaUser />}
              label="Full Name"
              value={user?.fullname}
            />

            <ApplicationInfoRow
              icon={<FaMapMarkerAlt />}
              label="Location"
              value={user?.location}
            />

            <ApplicationInfoRow
              icon={<FaPhone />}
              label="Phone Number"
              value={user?.phone}
            />

            <ApplicationInfoRow
              icon={<FaEnvelope />}
              label="Email Address"
              value={user?.email}
              last
            />
          </div>
        </div>

        <div className="px-6 pb-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-zinc-800">Resume</h3>
          </div>

          <div className="border border-zinc-200 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                <FaFileAlt />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-zinc-800 truncate">
                  {user?.resume ? "Your Resume" : "No resume uploaded"}
                </p>

                <p className="text-xs text-zinc-500 mt-0.5">
                  {user?.resume
                    ? "Resume ready to be submitted"
                    : "Please upload a resume before applying"}
                </p>
              </div>

              {user?.resume && (
                <span className="text-xs font-medium text-green-600">
                  Ready
                </span>
              )}
            </div>

            {user?.resume && (
              <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={handleViewResume}
                  className="flex-1 h-10 rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-50 text-sm font-semibold transition flex items-center justify-center gap-2"
                >
                  <FaEye />
                  View Resume
                </button>

                <button
                  type="button"
                  onClick={handleDownloadResume}
                  className="flex-1 h-10 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-semibold transition flex items-center justify-center gap-2"
                >
                  <FaDownload />
                  Download Resume
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="px-6 pb-5">
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <p className="text-xs md:text-sm text-zinc-600 leading-5">
              By submitting this application, your profile information and
              resume will be shared with{" "}
              <span className="font-semibold text-zinc-800">{job?.company?.companyName}</span>{" "}
              for this job application.
            </p>
          </div>
        </div>

        <div className="px-6 py-5 border-t border-zinc-100 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            type="button"
            disabled={loading}
            onClick={onClose}
            className="h-11 px-6 rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-50 text-sm font-semibold transition"
          >
            Cancel
          </button>

          <button
            type="button"

            onClick={() => onSubmit(user?.resume)}
            disabled={!user?.resume || loading}
            className={`h-11 px-6 rounded-lg text-white text-sm font-semibold transition shadow-sm flex items-center justify-center gap-2 ${user?.resume
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-zinc-300 cursor-not-allowed"
              }`}
          >

            {
              loading ? <Loader className="animate-spin" /> :
                (<>
                  <FaPaperPlane />
                  Submit Application
                </>)
            }
          </button>
        </div>
      </div>
    </div>
  );
};

const ApplicationInfoRow = ({ icon, label, value, last }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3.5 ${!last ? "border-b border-zinc-100" : ""
      }`}
  >
    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
      {icon}
    </div>

    <div className="min-w-0">
      <p className="text-xs text-zinc-500">{label}</p>

      <p className="text-sm font-medium text-zinc-800 mt-0.5 truncate">
        {value}
      </p>
    </div>
  </div>
);

export default ApplicationReview;

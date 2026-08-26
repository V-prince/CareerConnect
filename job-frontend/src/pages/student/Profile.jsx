import {
  Mail,
  Phone,
  BriefcaseBusiness,
  GraduationCap,
  Building2,
  CalendarDays,
  Code2,
  File,
  MapPin,
  FileText,
  Pencil,
  X,
  Plus,
  MapIcon,
  Loader,

} from "lucide-react";

import { useEffect, useState } from "react";
import dayjs from 'dayjs'
import ProfileSetupModal from "../../components/ProfileSetupModel";
import { ProfileCard } from "../../components/ProfileCard";
import { ProfileStatus } from "../../components/ProfileStatus";
import { Tags } from "../../components/Tags";
import { GetUserData, UpdateUserAPI } from "../../Services/authService";
import toast from "react-hot-toast";


export const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);

  // ==========================================
  // INPUT STATES
  // ==========================================

  const [skillsInput, setSkillsInput] = useState("");
  const [educationInput, setEducationInput] = useState("");
  const [experienceInput, setExperienceInput] = useState("");
  const [profileImage, SetProfileImage] = useState(null)
  const [data, setData] = useState(null)
  const [loading, SetLoading] = useState(false)


  const date = dayjs(data?.user.createdAt)
  // ===================d=======================
  // PROFILE DATA
  // ==========================================

  const [editData, setEditData] = useState({
    fullname: "",
    email: "",
    company: "",
    phone: "",
    photo: "",

    location: "",

    // Multiple education
    education: [],

    // Multiple experience
    experience: [],

    // Multiple skills
    skills: [],

    bio: "",

    resume: "",
  });

  // Original data for Cancel
  const [backupData, setBackupData] = useState(null);

  // ==========================================
  // NORMAL INPUT CHANGE
  // ==========================================

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // EDUCATION
  // ==========================================

  const handleAddEducation = () => {
    const value = educationInput.trim();

    if (!value) return;

    const exists = editData.education.some(
      (item) => item.toLowerCase() === value.toLowerCase()
    );

    if (exists) {
      setEducationInput("");
      return;
    }

    setEditData((prev) => ({
      ...prev,
      education: [...prev.education, value],
    }));

    setEducationInput("");
  };

  const handleRemoveEducation = (education) => {
    setEditData((prev) => ({
      ...prev,
      education: prev.education.filter(
        (item) => item !== education
      ),
    }));
  };

  const handleEducationKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddEducation();
    }
  };

  // ==========================================
  // EXPERIENCE
  // ==========================================

  const handleAddExperience = () => {
    const value = experienceInput.trim();

    if (!value) return;

    const exists = editData.experience.some(
      (item) => item.toLowerCase() === value.toLowerCase()
    );

    if (exists) {
      setExperienceInput("");
      return;
    }

    setEditData((prev) => ({
      ...prev,
      experience: [...prev.experience, value],
    }));

    setExperienceInput("");
  };

  const handleRemoveExperience = (experience) => {
    setEditData((prev) => ({
      ...prev,
      experience: prev.experience.filter(
        (item) => item !== experience
      ),
    }));
  };

  const handleExperienceKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddExperience();
    }
  };

  // ==========================================
  // SKILLS
  // ==========================================

  const handleAddSkill = () => {
    const value = skillsInput.trim();

    if (!value) return;

    const exists = editData.skills.some(
      (item) => item.toLowerCase() === value.toLowerCase()
    );

    if (exists) {
      setSkillsInput("");
      return;
    }

    setEditData((prev) => ({
      ...prev,
      skills: [...prev.skills, value],
    }));

    setSkillsInput("");
  };

  const handleRemoveSkill = (skill) => {
    setEditData((prev) => ({
      ...prev,
      skills: prev.skills.filter(
        (item) => item !== skill
      ),
    }));
  };

  const handleSkillsKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  // ==========================================
  // RESUME
  // ==========================================

  const handleOnFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setEditData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handelOnProfile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    SetProfileImage(URL.createObjectURL(file))

    setEditData((prev) => ({
      ...prev,
      photo: file,
    }));
  }

  // ==========================================
  // EDIT PROFILE
  // ==========================================

  const handleEdit = () => {
    setBackupData(structuredClone(editData));
    setIsEdit(true);
  };

  // ==========================================
  // SAVE
  // ==========================================

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("phone", editData.phone);
      formData.append("company", editData.company);
      formData.append("bio", editData.bio);
      formData.append("location", editData.location);

      formData.append(
        "education",
        JSON.stringify(editData.education)
      );

      formData.append(
        "experience",
        JSON.stringify(editData.experience)
      );

      formData.append(
        "skills",
        JSON.stringify(editData.skills)
      );

      if(editData.photo){
        formData.append("photo", editData.photo);
      }

      if (editData.resume) {
        formData.append("resume", editData.resume);
      }

      SetLoading(true)
      const edata = await UpdateUserAPI(formData);

      if (!edata.success) {
        return toast.error(edata.message);
      }

      toast.success(edata.message);

      setBackupData(null);
      setIsEdit(false);
      getData()
    } catch (error) {
      console.log("Profile update error:", error);
    } finally {
      SetLoading(false)
    }
  };

  // ==========================================
  // CANCEL
  // ==========================================

  const handleCancel = () => {
    if (backupData) {
      setEditData(backupData);
    }

    setSkillsInput("");
    setEducationInput("");
    setExperienceInput("");

    setIsEdit(false);
    setBackupData(null);
  };

  // ==========================================
  // PROFILE STRENGTH
  // ==========================================



  const getData = async () => {
    try {

      const data = await GetUserData();

      if (!data.success) {
        return toast.error(data.message)
      }



      setData(data)


      setEditData({
        fullname: data.user.fullname || "",
        email: data.user.email || "",
        phone: data.user.phone || "",
        location: data.user.location || "",
        education: data.user.education || [],
        experience: data.user.experience || [],
        skills: data.user.skills || [],
        bio: data.user.bio || "",
        resume: data.user.resume || "",
      })

    } catch (err) {
      console.log(err)
    }
  }



  useEffect(() => {
    getData()
  }, [])

  // ==========================================
  // UI
  // ==========================================

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white mt-16 p-4 md:p-8">

      {/* ==========================================
          PAGE HEADER
      ========================================== */}

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900">
          My Profile
        </h1>

        <p className="text-zinc-600 mt-2 text-sm md:text-base">
          View and manage your personal information
        </p>
      </div>

      {/* ==========================================
          PROFILE HEADER
      ========================================== */}

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-4 md:p-6 shadow-sm">

        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">

          {/* LEFT */}

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

            <div className="relative">
              <img
                src={profileImage || data?.user.photo || "/images/profile.png"}
                alt="Profile"
                className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-md"
              />

              {isEdit && (
                <>
                  <label
                    htmlFor="profilePhoto"
                    className="absolute bottom-2 right-5 flex items-center gap-2 
                            bg-black text-white px-2 py-2 rounded-full 
                            text-sm font-medium cursor-pointer shadow-md 
                            hover:bg-zinc-800 transition"
                  >
                    <Pencil size={16} />
                  </label>

                  <input
                    id="profilePhoto"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handelOnProfile}
                  />
                </>
              )}

            </div>

            <div className="text-center md:text-left">

              <h1 className="font-bold text-2xl md:text-3xl text-zinc-900 capitalize">
                {data?.user.fullname}
              </h1>

              <span className="text-zinc-500 font-semibold">
                {data?.user.role}
              </span>

              <div className="mt-5 space-y-3">

                <div className="flex items-center justify-center md:justify-start gap-3 text-zinc-500">
                  <Mail size={20} />

                  <span className="text-zinc-800 break-all">
                    {data?.user.email}
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 text-zinc-500">
                  <Phone size={20} />

                  <span className="text-zinc-800">
                    {data?.user.phone || "Not Provided"}
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 text-zinc-500">
                  <MapPin size={20} />

                  <span className="text-zinc-800">
                    {data?.user.location || "Not Provided"}
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 text-zinc-500">
                  <CalendarDays size={20} />

                  <span className="text-zinc-800">
                    Joined on {date.format("MMMM D, YYYY")}
                  </span>
                </div>

              </div>

            </div>

          </div>

          

          <div className="w-full xl:w-80 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between mb-3">

              <h2 className="text-lg font-semibold">
                Profile Strength
              </h2>

              <span className="text-green-600 font-bold">
                {data?.process.progress}%
              </span>

            </div>

            <div className="w-full h-3 bg-zinc-200 rounded-full overflow-hidden">

              <div
                className="h-full bg-green-500 rounded-full transition-all duration-500"
                style={{ width: `${data?.process.progress}%` }}
              />

            </div>

            {data?.process.progress !== 100 &&
              (<>
                <p className="text-sm text-zinc-500 mt-3">
                  Complete your profile to improve your chances of getting hired.
                </p>
              </>)
            }



            <div className="mt-4 space-y-2 text-sm">

              <ProfileStatus
                title="Personal Details"
                done={Boolean(data?.user.fullname && data?.user.phone && data?.user.location)}
              />

              <ProfileStatus
                title="Skills"
                done={data?.user.skills.length > 0}
              />

              <ProfileStatus
                title="Resume"
                done={Boolean(data?.user.resume)}
              />

              <ProfileStatus
                title="Education"
                done={data?.user.education.length > 0}
              />

              <ProfileStatus
                title="Experience"
                done={data?.user.experience.length > 0}
              />

              <ProfileStatus
                title="Bio"
                done={data?.user.bio}
              />

            </div>

          </div>

        </div>

      </div>

      {/* ==========================================
          PERSONAL INFORMATION
      ========================================== */}

      <div className="mt-8 rounded-3xl bg-white shadow-sm border border-zinc-200 overflow-hidden p-5 md:p-8">

        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-7 border-b border-zinc-200">

          <div>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
              Personal Information
            </h2>

            <p className="text-zinc-500 mt-2">
              Keep your profile updated to attract recruiters.
            </p>

          </div>

          {!isEdit ? (

            <button
              onClick={handleEdit}
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl shadow-md transition cursor-pointer"
            >
              <Pencil size={18} />
              Edit Profile
            </button>

          ) : (

            <div className="flex gap-3">

              <button
                onClick={handleSave}
                disabled={loading}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition cursor-pointer"
              >
                {loading ? <Loader className=" animate-spin" /> : "Save"}
              </button>

              <button
                onClick={handleCancel}
                disabled={loading}
                className="px-5 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 transition cursor-pointer"
              >
                Cancel
              </button>

            </div>

          )}

        </div>

        {/* ==========================================
            INFORMATION GRID
        ========================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          {/* EMAIL */}

          <ProfileCard
            icon={<Mail size={18} />}
            title="Email"
          >

            {isEdit ? (

              <input
                type="email"
                name="email"
                value={editData.email}
                disabled={true}
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition hover:border-indigo-500 focus:ring-4 hover:ring-indigo-100"
              />

            ) : (

              <p className="profile-value">
                {editData.email || "Not Assigned"}
              </p>

            )}

          </ProfileCard>

          {/* PHONE */}

          <ProfileCard
            icon={<Phone size={18} />}
            title="Phone"
          >

            {isEdit ? (

              <input
                type="text"
                name="phone"
                value={editData.phone}
                onChange={handleOnChange}
                placeholder="+91 9954854541"
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

            ) : (

              <p className="profile-value">
                {editData.phone || "Not Assigned"}
              </p>

            )}

          </ProfileCard>


          {/* Location */}

          <ProfileCard
            icon={<MapIcon size={18} />}
            title="Location"
          >

            {isEdit ? (

              <input
                type="text"
                name="location"
                value={editData.location}
                maxLength={40}
                onChange={handleOnChange}
                placeholder="Kamrej,Surat,Gujarat"
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

            ) : (

              <p className="profile-value">
                {editData.location || "Not Assigned"}
              </p>

            )}

          </ProfileCard>

          {/* ROLE */}

          <ProfileCard
            icon={<BriefcaseBusiness size={18} />}
            title="Role"
          >

            <p className="text-base font-semibold text-zinc-900 mt-2">
              {data?.user?.role}
            </p>

          </ProfileCard>

          {/* COMPANY */}
          {data?.user.companey && (<ProfileCard
            icon={<Building2 size={18} />}
            title="Company"
          >

            {isEdit ? (

              <input
                type="text"
                name="company"
                value={editData.company}
                disabled={true}
                placeholder="XYZ Infotech / Not Assigned"
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

            ) : (

              <p className="profile-value">
                {editData.company || "Not Assigned"}
              </p>

            )}

          </ProfileCard>)}


          {/* ==========================================
              EDUCATION
          ========================================== */}

          <ProfileCard
            icon={<GraduationCap size={18} />}
            title="Education"
          >

            {isEdit ? (

              <>

                <div className="flex gap-2">

                  <input
                    type="text"
                    value={educationInput}
                    onChange={(e) =>
                      setEducationInput(e.target.value)
                    }
                    onKeyDown={handleEducationKeyDown}
                    placeholder="BCA, MCA, B.Com..."
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />

                  <button
                    type="button"
                    onClick={handleAddEducation}
                    className="px-4 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer"
                  >
                    <Plus size={20} />
                  </button>

                </div>

                <div className="flex flex-wrap gap-2 mt-4">

                  {editData.education.map((education) => (

                    <Tags
                      key={education}
                      text={education}
                      onRemove={() =>
                        handleRemoveEducation(education)
                      }
                    />

                  ))}

                </div>

              </>

            ) : (

              <div className="flex flex-wrap gap-2">

                {editData.education.length > 0 ? (editData.education.map((education) => (

                  <span
                    key={education}
                    className="px-3 py-2 bg-zinc-100 rounded-full text-sm font-medium"
                  >
                    {education}
                  </span>

                ))) : (

                  <p className="text-zinc-500">
                    No education added
                  </p>

                )}

              </div>

            )}

          </ProfileCard>

          {/* ==========================================
              EXPERIENCE
          ========================================== */}

          <ProfileCard
            icon={<BriefcaseBusiness size={18} />}
            title="Experience"
          >

            {isEdit ? (

              <>

                <div className="flex gap-2">

                  <input
                    type="text"
                    value={experienceInput}
                    onChange={(e) =>
                      setExperienceInput(e.target.value)
                    }
                    onKeyDown={handleExperienceKeyDown}
                    placeholder="Frontend Developer - ABC Company"
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />

                  <button
                    type="button"
                    onClick={handleAddExperience}
                    className="px-4 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer"
                  >
                    <Plus size={20} />
                  </button>

                </div>

                <div className="flex flex-wrap gap-2 mt-4">

                  {editData.experience.map((experience) => (

                    <Tags
                      key={experience}
                      text={experience}
                      onRemove={() =>
                        handleRemoveExperience(experience)
                      }
                    />

                  ))}

                </div>

              </>

            ) : (

              <div className="flex flex-wrap gap-2">

                {editData.experience.length > 0 ? (

                  editData.experience.map((experience) => (

                    <span
                      key={experience}
                      className="px-3 py-2 bg-zinc-100 rounded-full text-sm font-medium"
                    >
                      {experience}
                    </span>

                  ))

                ) : (

                  <p className="text-zinc-500">
                    No experience added
                  </p>

                )}

              </div>

            )}

          </ProfileCard>

          {/* RESUME */}

          <ProfileCard
            icon={<File size={18} />}
            title="Resume"
          >

            {isEdit ? (

              <div>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleOnFileChange}
                  className="w-full text-sm text-zinc-600"
                />

                {editData.resume && (
                  <p className="text-sm text-green-600 mt-2">
                    {editData.resume.name}
                  </p>
                )}

              </div>

            ) : (

              <a
                href={data?.user?.resume}
                target="_blank"
                className="text-blue-600 hover:underline font-medium"
              >
                View Resume
              </a>

            )}

          </ProfileCard>

          {/* ==========================================
              SKILLS
          ========================================== */}

          <ProfileCard
            icon={<Code2 size={18} />}
            title="Skills"
            action={
              isEdit && (
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="flex items-center gap-1 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
                >
                  <Plus size={16} />
                  Add
                </button>
              )
            }
          >

            {isEdit ? (

              <>

                <input
                  type="text"
                  value={skillsInput}
                  placeholder="React, JavaScript, HTML..."
                  onChange={(e) =>
                    setSkillsInput(e.target.value)
                  }
                  onKeyDown={handleSkillsKeyDown}
                  className="profile-input"
                />

                <div className="flex flex-wrap gap-2 mt-5">

                  {
                    editData.skills.map((skill) => (

                      <Tags
                        key={skill}
                        text={skill}
                        onRemove={() =>
                          handleRemoveSkill(skill)
                        }
                      />

                    ))}

                </div>

              </>

            ) : (

              <div className="flex flex-wrap gap-2">

                {editData.skills.length > 0 ? (editData.skills.map((skill) => (

                  <span
                    key={skill}
                    className="px-3 py-1 bg-zinc-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>

                ))) : (
                  <p className="text-zinc-500">
                    No skills added
                  </p>

                )}

              </div>

            )}

          </ProfileCard>

          {/* ==========================================
              BIO
          ========================================== */}

          <div className="lg:col-span-2">

            <ProfileCard
              icon={<FileText size={18} />}
              title="Bio"
            >

              {isEdit ? (

                <textarea
                  rows={4}
                  name="bio"
                  value={editData.bio}
                  placeholder="Write Yourself..."
                  onChange={handleOnChange}
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />

              ) : (

                <p className="text-zinc-700 leading-7">
                  {editData.bio || "Bio not added"}
                </p>

              )}

            </ProfileCard>

          </div>

        </div>

      </div>

      {/* PROFILE SETUP MODAL */}

      {data?.user?.isComplateProfile === false && (
        <ProfileSetupModal
          onComplete={() =>
            getData()
          }
        />
      )}

    </section>
  );
};





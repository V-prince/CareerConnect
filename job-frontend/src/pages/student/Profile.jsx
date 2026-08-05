import {
  User,
  Mail,
  Phone,
  BriefcaseBusiness,
  GraduationCap,
  Building2,
  CalendarDays,
  Clock3,
  Code2,
  File,
  MapPin,
  FileText,
  Pencil,
  X,
} from 'lucide-react'
import React, { useState } from 'react'

export const Profile = () => {

  const [isEdit, setIsEdit] = useState(false);
  const [skillsInput, setSkillsInput] = useState("");
  const [skills, setSkills] = useState([]);

  const [EditData, setEditData] = useState({
    fullname: "",
    email: "",
    company: "",
    phone: "",
    education: "",
    skills: [],
    bio: "",
    resume: null
  })

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setEditData(prev => ({
      ...prev,
      [name]: value
    }))

  }


  const handelOnSkills = (e) => {
    setSkillsInput(e.target.value);
  }

  const handelonSkillClick = () => {

    if (!skillsInput.trim()) return;
    const updatedSkills = [...skills, skillsInput.trim()];

    setSkills(updatedSkills);

    setEditData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }));

    setSkillsInput("");
  }


  const handelOnFileChange = (e) => {
    const file = e.target.files[0];
    setEditData(prev => (
      {
        ...prev,
        resume: file
      }
    ))
  }

  const handelOnClick = () => {
    try {
      console.log("EditData", EditData)
      setIsEdit(false)
    }
    catch (error) {
      console.log(error)
    } finally {
      console.log("done")
    }

  }

  const handelOnRemoveSkill = (skill) => {
    const updatedSkills = skills.filter((s) => s !== skill);
    setSkills(updatedSkills);
  }



  return (
    <section className='min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-white mt-16 p-8'>
      <h1 className="text-2xl md:text-3xl font-bold">
        My Profile
      </h1>

      <p className="text-zinc-600 mt-2 text-sm md:text-base">
        View and manage your personal information
      </p>

      <div className="bg-white rounded-xl shadow-md mt-8 p-4 md:p-6">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">


          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

            <img
              src="/images/profile.jpg"
              alt=""
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover"
            />

            <div className="text-center md:text-left">
              <h1 className="font-bold text-2xl md:text-3xl">
                Prince Vadher
              </h1>

              <span className="text-zinc-500 font-semibold">
                Student
              </span>

              <div className="mt-5 space-y-3">

                <div className="flex items-center justify-center md:justify-start gap-3 text-zinc-500">
                  <Mail size={20} />
                  <span className="text-zinc-800 break-all">
                    vadherprince63@gmail.com
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 text-zinc-500">
                  <Phone size={20} />
                  <span className="text-zinc-800">
                    +91 9978093258
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 text-zinc-500">
                  <MapPin size={20} />
                  <span className="text-zinc-800">
                    Surat, Gujarat, India
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 text-zinc-500">
                  <CalendarDays size={20} />
                  <span className="text-zinc-800">
                    Joined on May 15, 2025
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
                80%
              </span>
            </div>

            <div className="w-full h-3 bg-zinc-200 rounded-full overflow-hidden">
              <div className="h-full w-[80%] bg-green-500 rounded-full"></div>
            </div>

            <p className="text-sm text-zinc-500 mt-3">
              Complete your profile to improve your chances of getting hired.
            </p>

            <div className="mt-4 space-y-2 text-sm">

              <div className="flex justify-between">
                <span>✔ Personal Details</span>
                <span className="text-green-600">Done</span>
              </div>

              <div className="flex justify-between">
                <span>✔ Skills</span>
                <span className="text-green-600">Done</span>
              </div>

              <div className="flex justify-between">
                <span>✔ Resume</span>
                <span className="text-green-600">Done</span>
              </div>

              <div className="flex justify-between">
                <span>✖ Experience</span>
                <span className="text-red-500">Missing</span>
              </div>

              <div className="flex justify-between">
                <span>✖ Projects</span>
                <span className="text-red-500">Missing</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-zinc-100 overflow-hidden p-8">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-7 border-b border-zinc-100">

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Personal Information
            </h2>

            <p className="text-zinc-500 mt-2">
              Keep your profile updated to attract recruiters.
            </p>
          </div>

          {!isEdit ? (
            <button
              onClick={() => setIsEdit(true)}
              className="flex items-center gap-2 bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white px-5 py-3 rounded-xl shadow-md transition"
            >
              <Pencil size={18} />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">

              <button
                onClick={handelOnClick}
                className="px-5 py-3 rounded-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition"
              >
                Save
              </button>

              <button
                onClick={() => setIsEdit(false)}
                className="px-5 py-3 rounded-xl cursor-pointer bg-zinc-100 hover:bg-zinc-200 transition"
              >
                Cancel
              </button>

            </div>
          )}

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">



          <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Mail size={18} />
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold text-zinc-400">Email</span>
            </div>

            {isEdit ? (
              <input
                type="email"
                name="email"
                placeholder='john@example.com'
                value={EditData.email}
                onChange={handelOnChange}

                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
              />
            ) : (
              <p className="text-base font-semibold text-zinc-900 mt-2">
                vadherprince63@gmail.com
              </p>
            )}
          </div>


          <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 ">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Phone size={18} />
              </span>
              <span className="text-sm text-zinc-500">Phone</span>
            </div>

            {isEdit ? (
              <input
                type="text"
                name="phone"
                placeholder='+91 9954854541'
                value={EditData.phone}
                onChange={handelOnChange}

                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
              />
            ) : (
              <p className="text-base font-semibold text-zinc-900 mt-2">+91 9978093258</p>
            )}
          </div>


          <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <BriefcaseBusiness size={18} />
              </span>
              <span className="text-sm text-zinc-500">Role</span>
            </div>

            <p className="text-base font-semibold text-zinc-900 mt-2">Student</p>
          </div>


          <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <GraduationCap size={18} />
              </span>
              <span className="text-sm text-zinc-500">Education</span>
            </div>

            {isEdit ? (
              <input
                type="text"
                name="education"
                placeholder='BCA,MCA,BCOM,BBA ETC.'
                value={EditData.education}
                onChange={handelOnChange}

                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
              />
            ) : (
              <p className="text-base font-semibold text-zinc-900 mt-2">BCA Semester 3</p>
            )}
          </div>


          <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Building2 size={18} />
              </span>
              <span className="text-sm text-zinc-500">Company</span>
            </div>

            {isEdit ? (
              <input
                type="text"
                name="company"
                placeholder='XYZ Infotech / No Assigned'
                value={EditData.company}
                onChange={handelOnChange}

                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
              />
            ) : (
              <p className="text-base font-semibold text-zinc-900 mt-2">Not Assigned</p>
            )}
          </div>


          <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <File size={18} />
              </span>
              <span className="text-sm text-zinc-500">Resume</span>
            </div>

            {isEdit ? (
              <input
                type="file"
                onChange={handelOnFileChange}
                className="text-indigo-600 font-semibold hover:text-indigo-700 transition"
              />
            ) : (
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium"
              >
                View Resume
              </a>
            )}
          </div>


          <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className='flex items-center gap-3 mb-3'>
                <span className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Code2 size={18} />
                </span>
                <span className="text-sm text-zinc-500">Skills</span>
              </div>

              {isEdit &&
                <button onClick={handelonSkillClick} className='px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition'>
                  add
                </button>}
            </div>

            {isEdit ? (
              <>

                <input
                  type="text"
                  name="skills"
                  value={skillsInput}
                  placeholder='React,Javascript,Html,Java ...'
                  onChange={handelOnSkills}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      setSkills((prev) => [...prev, skillsInput.trim()]);
                      const updatedSkills = [...skills, skillsInput.trim()];

                      setSkills(updatedSkills);

                      setEditData((prev) => ({
                        ...prev,
                        skills: updatedSkills,
                      }));
                      setSkillsInput("");
                    }
                  }}
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
                />

                <div className="flex flex-wrap gap-2 mt-5">
                  {skills.filter(skill => skill.trim() !== "").map(
                    (skill, index) => (
                      <p
                        key={index}
                        className="px-4 py-2 flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 transition"
                      >
                        {skill}

                        <button
                          type="button"
                          onClick={() => handelOnRemoveSkill(skill)}
                          className="hover:text-red-500 cursor-pointer"
                        >
                          <X size={18} />
                        </button>
                      </p>
                    )
                  )}
                </div>
              </>


            ) : (
              <div className="flex flex-wrap gap-2">
                {EditData?.skills?.map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-zinc-100 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            )}
          </div>


          <div className="lg:col-span-2 rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <FileText size={18} />
              </span>
              <span className="text-sm text-zinc-500">Bio</span>
            </div>

            {isEdit ? (
              <textarea
                rows={4}
                name="bio"
                value={EditData.bio}
                placeholder='Write Yourself ...'
                onChange={handelOnChange}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 resize-none outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
              />
            ) : (
              <p className="lg:col-span-2 rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-slate-50 p-6">
                Passionate MERN Stack Developer and BCA Student. I enjoy building
                responsive web applications using React, Node.js, Express.js and
                MongoDB. Currently looking for internship opportunities to improve my
                skills.
              </p>
            )}
          </div>
        </div>
      </div>
    </section >
  )
}

import React, { useState } from "react";
import {
  User,
  Phone,
  GraduationCap,
  FileText,
  X,
} from "lucide-react";

const ProfileSetupModal = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    education: "",
    company: "",
    photo: null,
    skills: [],
    resume: null,
    bio: "",
  });

  const [skillInput, setSkillInput] = useState("");
  const [errors, setErrors] = useState({});



  const validateForm = () => {
    const newErrors = {};

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    // Education
    if (!formData.education.trim()) {
      newErrors.education = "Education is required";
    }

    // Profile Photo
    if (!formData.photo) {
      newErrors.photo = "Profile photo is required";
    }

    // Skills
    if (formData.skills.length === 0) {
      newErrors.skills = "Skills are required";
    }

    // Resume
    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

    // Bio
    if (!formData.bio.trim()) {
      newErrors.bio = "Bio is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  
  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    
    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({
        ...prev,
        photo: "Please select a valid image",
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));

    setErrors((prev) => ({
      ...prev,
      photo: "",
    }));
  };

  

  const handleResume = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        resume: "Only PDF, DOC or DOCX files are allowed",
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));

    setErrors((prev) => ({
      ...prev,
      resume: "",
    }));
  };



  const addSkill = () => {
    const skill = skillInput.trim();

    if (!skill) return;

    // Duplicate skill check
    if (
      formData.skills.some(
        (item) => item.toLowerCase() === skill.toLowerCase()
      )
    ) {
      setErrors((prev) => ({
        ...prev,
        skills: "This skill is already added",
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));

    setSkillInput("");

    setErrors((prev) => ({
      ...prev,
      skills: "",
    }));
  };

 

  const removeSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((item) => item !== skill),
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
      const data = new FormData();

      data.append("phone", formData.phone);
      data.append("education", formData.education);
      data.append("skills", JSON.stringify(formData.skills));
      data.append("bio", formData.bio);

      
      data.append("photo", formData.photo);
      data.append("resume", formData.resume);

      console.log("Profile FormData:", data);

      /*
        અહીં API call કરવી:

        await axios.put(
          "/api/user/create-profile",
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
      */

      onComplete();
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-zinc-100 px-6 py-5 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-zinc-900">
              Complete Your Profile
            </h2>

            <p className="text-sm text-zinc-500 mt-1">
              Complete your profile to get better job opportunities.
            </p>
          </div>

      
          <button
            type="button"
            onClick={onComplete}
            className="p-2 rounded-full hover:bg-zinc-100 transition"
          >
            <X size={22} />
          </button>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="text-sm font-semibold text-zinc-700">
                Phone Number
              </label>

              <div className="relative mt-2">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  maxLength={10}
                  className="w-full rounded-xl border border-zinc-200 pl-11 pr-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            
            <div>
              <label className="text-sm font-semibold text-zinc-700">
                Education
              </label>

              <div className="relative mt-2">
                <GraduationCap
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="BCA, MCA, B.Tech..."
                  className="w-full rounded-xl border border-zinc-200 pl-11 pr-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              {errors.education && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.education}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold text-zinc-700">
                Profile Photo
              </label>

              <div className="relative mt-2">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={handlePhoto}
                  className="w-full rounded-xl border border-zinc-200 pl-11 pr-4 py-2.5 text-sm"
                />
              </div>

              {errors.photo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.photo}
                </p>
              )}

              
              {formData.photo && (
                <div className="mt-3 flex items-center gap-3">
                  <img
                    src={URL.createObjectURL(formData.photo)}
                    alt="Profile Preview"
                    className="w-16 h-16 rounded-full object-cover border border-zinc-200"
                  />

                  <span className="text-sm text-zinc-500">
                    {formData.photo.name}
                  </span>
                </div>
              )}
            </div>

           

            <div>
              <label className="text-sm font-semibold text-zinc-700">
                Resume
              </label>

              <div className="relative mt-2">
                <FileText
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResume}
                  className="w-full rounded-xl border border-zinc-200 pl-11 pr-4 py-2.5 text-sm"
                />
              </div>

              {errors.resume && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.resume}
                </p>
              )}

              {formData.resume && (
                <p className="text-sm text-zinc-500 mt-2">
                  Selected: {formData.resume.name}
                </p>
              )}
            </div>

          </div>

         

          <div className="mt-5">

            <label className="text-sm font-semibold text-zinc-700">
              Skills
            </label>

            <div className="flex gap-2 mt-2">

              <input
                type="text"
                value={skillInput}
                onChange={(e) => {
                  setSkillInput(e.target.value);

                  setErrors((prev) => ({
                    ...prev,
                    skills: "",
                  }));
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSkill();
                  }
                }}
                placeholder="React, Node.js, MongoDB..."
                className="flex-1 rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <button
                type="button"
                onClick={addSkill}
                className="px-5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
              >
                Add
              </button>

            </div>

            {errors.skills && (
              <p className="text-red-500 text-sm mt-1">
                {errors.skills}
              </p>
            )}

            {/* Skills List */}
            <div className="flex flex-wrap gap-2 mt-3">

              {formData.skills.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium"
                >
                  {skill}

                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="hover:text-red-500"
                  >
                    <X size={15} />
                  </button>
                </span>
              ))}

            </div>

          </div>

          <div className="mt-5">

            <label className="text-sm font-semibold text-zinc-700">
              About You
            </label>

            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              placeholder="Tell recruiters something about yourself..."
              className="w-full mt-2 rounded-xl border border-zinc-200 px-4 py-3 resize-none outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

            {errors.bio && (
              <p className="text-red-500 text-sm mt-1">
                {errors.bio}
              </p>
            )}

          </div>

          
          <button
            type="submit"
            className="w-full mt-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition"
          >
            Complete Profile
          </button>

        </form>
      </div>
    </div>
  );
};

export default ProfileSetupModal;
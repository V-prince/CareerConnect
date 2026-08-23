import {
  FaBriefcase,
  FaUsers,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

import Choose from "../../components/Choose";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white border-t border-zinc-200">
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-7 md:p-10 lg:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold">
                <FaBriefcase size={11} />
                About CareerConnect
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-4">
                Connecting Talent With Opportunity
              </h1>

              <div className="w-12 h-1 bg-indigo-600 mt-5 rounded-full mx-auto"></div>

              <p className="text-zinc-600 mt-5 leading-7 text-sm md:text-base lg:text-lg">
                CareerConnect is an online platform that connects job seekers
                with the right job opportunities and helps companies find the
                best talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            <Stat
              icon={<FaBriefcase />}
              value="10K+"
              label="Job Opportunities"
            />

            <Stat icon={<FaUsers />} value="25K+" label="Job Seekers" />

            <Stat icon={<FaBuilding />} value="2K+" label="Companies" />

            <Stat
              icon={<FaCheckCircle />}
              value="95%"
              label="Successful Matches"
            />
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-zinc-800">
                Who We Are
              </h2>

              <div className="w-10 h-1 bg-indigo-600 mt-3 rounded-full"></div>

              <p className="text-zinc-600 mt-5 leading-7 text-sm md:text-base">
                CareerConnect makes the job search process simple and convenient
                for students, professionals, and employers.
              </p>

              <p className="text-zinc-600 mt-4 leading-7 text-sm md:text-base">
                We bring job seekers and companies together through a simple
                platform where opportunities can be discovered and explored
                easily.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-zinc-800">
                Our Mission
              </h2>

              <div className="w-10 h-1 bg-indigo-600 mt-3 rounded-full"></div>

              <p className="text-zinc-600 mt-5 leading-7 text-sm md:text-base">
                Our mission is to simplify the job search process and make
                recruitment easier for companies.
              </p>

              <div className="mt-5 space-y-3">
                <MissionPoint text="Simple job discovery" />
                <MissionPoint text="Better career opportunities" />
                <MissionPoint text="Easy recruitment for companies" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">
              Our Team
            </h2>

            <div className="w-12 h-1 bg-indigo-600 mt-3 rounded-full mx-auto"></div>

            <p className="text-sm md:text-base text-zinc-500 mt-4 max-w-2xl mx-auto">
              Meet the people behind CareerConnect, working together to make
              finding the right opportunity easier.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-7 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 text-center hover:shadow-md transition">
              <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-50 bg-zinc-100">
                <img
                  src="/"
                  alt="Team Member 1"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-zinc-800 mt-5">
                Your Name
              </h3>

              <p className="text-sm text-blue-600 font-medium mt-1">
                Developer
              </p>

              <p className="text-sm text-zinc-500 mt-3 leading-6">
                Passionate about building useful and user-friendly technology
                solutions.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 text-center hover:shadow-md transition">
              <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-50 bg-zinc-100">
                <img
                  src="/"
                  alt="Team Member 2"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-zinc-800 mt-5">
                Partner Name
              </h3>

              <p className="text-sm text-blue-600 font-medium mt-1">
                Developer
              </p>

              <p className="text-sm text-zinc-500 mt-3 leading-6">
                Focused on creating simple, reliable and impactful solutions for
                users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Choose />
    </div>
  );
};

const Stat = ({ icon, value, label }) => {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 md:p-5">
      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
        {icon}
      </div>

      <p className="text-xl md:text-2xl font-bold text-zinc-800">{value}</p>

      <p className="text-xs md:text-sm text-zinc-500 mt-1">{label}</p>
    </div>
  );
};

const MissionPoint = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
        <FaCheckCircle size={12} />
      </div>

      <p className="text-sm text-zinc-600">{text}</p>
    </div>
  );
};

export default About;

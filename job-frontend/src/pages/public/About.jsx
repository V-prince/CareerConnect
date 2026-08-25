import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Choose from "../../components/Choose";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white border-t border-zinc-200">
      <section className="py-6 md:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-800">
              About Us
            </h1>

            <div className="w-12 h-1 bg-indigo-600 mt-4 md:mt-5 rounded-sm mx-auto"></div>

            <p className="text-zinc-700 mt-5 md:mt-6 leading-7 text-sm md:text-base lg:text-lg">
              JobPortal is an online platform that connects job seekers with the
              right job opportunities and helps companies find the best talent.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-zinc-800">
              Our Mission
            </h2>

            <div className="w-12 h-1 bg-indigo-600 mt-3 md:mt-4 rounded-sm mx-auto"></div>

            <p className="text-zinc-600 mt-4 md:mt-5 leading-7 text-sm md:text-base">
              Our mission is to simplify the job search process and make
              recruitment easier for companies. We aim to create a bridge
              between talent and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="py-10 md:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-800">
              Our Team
            </h2>

            <div className="w-12 h-1 bg-indigo-600 mt-3 md:mt-4 rounded-sm mx-auto"></div>

            <p className="text-zinc-600 mt-4 leading-6 text-sm md:text-base max-w-2xl mx-auto">
              Meet the people behind JobPortal who worked together to build this
              platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5 md:p-6 text-center hover:shadow-md transition">
              <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-50 bg-zinc-100">
                <img
                  src="/images/team-member-1.jpg"
                  alt="Team Member 1"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-zinc-800 mt-5">
                Your Name
              </h3>

              <p className="text-sm font-medium text-indigo-600 mt-1">
                Developer
              </p>

              <p className="text-sm text-zinc-500 mt-3 leading-6">
                Passionate about building useful and user-friendly web
                applications.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5 md:p-6 text-center hover:shadow-md transition">
              <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-50 bg-zinc-100">
                <img
                  src="/images/team-member-2.jpg"
                  alt="Team Member 2"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-zinc-800 mt-5">
                Partner Name
              </h3>

              <p className="text-sm font-medium text-indigo-600 mt-1">
                Developer
              </p>

              <p className="text-sm text-zinc-500 mt-3 leading-6">
                Focused on creating simple, reliable and impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Choose />
    </div>
  );
};

export default About;

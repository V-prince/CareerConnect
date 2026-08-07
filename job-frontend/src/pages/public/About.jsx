import Choose from "../../components/Choose";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50/70 to-white border-t border-zinc-200">
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

      <section className=" py-4 md:py-6 lg:py-8">
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

      <Choose />
    </div>
  );
};

export default About;

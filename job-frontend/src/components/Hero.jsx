
// import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 items-center gap-12">

          <div>

            <span className="inline-block bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-full text-sm">
              🚀 India's Smart Career Platform
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-6">
              Find Your Dream <br />
              <span className="text-blue-600">
                Job & Internship
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
              Discover thousands of verified jobs and internships from top
              companies. Build your future with CareerConnect.
            </p>


            <div className="bg-white rounded-2xl shadow-xl p-3 mt-10 flex flex-col lg:flex-row gap-3">

              <div className="flex items-center border rounded-xl px-4 py-3 flex-1">
               

                <input
                  type="text"
                  placeholder="Job title"
                  className="w-full outline-none"
                />
              </div>

              <div className="flex items-center border rounded-xl px-4 py-3 lg:w-60">
          

                <select className="w-full outline-none bg-transparent">
                  <option selected disabled>All Locations</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Pune</option>
                  <option>Hyderabad</option>
                  <option>Ahmedabad</option>
                  <option>Surat</option>
                </select>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 rounded-xl transition">
                Search
              </button>

            </div>


            <div className="flex flex-wrap gap-10 mt-12">

              <div>
                <h2 className="text-3xl font-bold text-blue-600">
                  15K+
                </h2>
                <p className="text-gray-500">
                  Active Jobs
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">
                  500+
                </h2>
                <p className="text-gray-500">
                  Companies
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">
                  8K+
                </h2>
                <p className="text-gray-500">
                  Students Hired
                </p>
              </div>

            </div>

          </div>


          {/* <div className="flex justify-center">

            <img
              src={heroImage}
              alt="Hero"
              className="w-full max-w-xl"
            />

          </div> */}

        </div>

      </div>
    </section>
  );
};

export default Hero;
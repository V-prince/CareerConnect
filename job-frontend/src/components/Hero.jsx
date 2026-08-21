import { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Select from "react-select";
import career from "../assets/career.png";

const locationOptions = [
  { value: "ahmedabad", label: "Ahmedabad" },
  { value: "mumbai", label: "Mumbai" },
  { value: "surat", label: "Surat" },
  { value: "delhi", label: "Delhi" },
  { value: "bangalore", label: "Bangalore" },
  { value: "hyderabad", label: "Hyderabad" },
  { value: "pune", label: "Pune" },
  { value: "remote", label: "Remote" },
];

const Hero = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState(locationOptions[0]);

  const handleSearch = () => {
    console.log({
      keyword,
      location: location?.value || "all",
    });
    setKeyword("");
    setLocation(locationOptions[0]);
  };

  return (
    <section className="relative lg:min-h-screen overflow-y-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-16">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-slate-900">
              Find Your Dream Job
              <span className="block bg-gradient-to-b from-blue-500 to-indigo-700 bg-clip-text text-transparent">
                & Internship
              </span>
            </h1>

            <p className="text-slate-700 mt-4 md:mt-5 text-sm md:text-base lg:text-lg font-normal max-w-xl mx-auto lg:mx-0">
              Find the perfect opportunity and kickstart your career
            </p>

            <div className="mt-7 md:mt-8 lg:mt-9 bg-white border border-zinc-200 shadow-sm rounded-xl p-2.5 md:p-3">
              <div className="grid md:grid-cols-12 gap-2.5 md:gap-3 items-stretch">
                <div className="md:col-span-5 flex items-center border border-zinc-200 rounded-xl px-4 bg-white">
                  <FaSearch className="text-blue-600 mr-3 shrink-0" />
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Job title, keyword..."
                    className="w-full min-w-0 h-12 outline-none bg-transparent text-sm text-slate-800"
                  />
                </div>

                <div className="md:col-span-4 relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-blue-600">
                    <FaMapMarkerAlt />
                  </div>
                  <Select
                    options={locationOptions}
                    value={location}
                    onChange={setLocation}
                    className="text-sm"
                    styles={{
                      control: (base) => ({
                        ...base,
                        height: 48,
                        minHeight: 48,
                        borderRadius: 12,
                        borderColor: "#e4e4e7",
                        boxShadow: "none",
                        paddingLeft: 30,
                        "&:hover": {
                          borderColor: "#e4e4e7",
                        },
                      }),
                      valueContainer: (base) => ({
                        ...base,
                        padding: "0 8px",
                      }),
                      singleValue: (base) => ({
                        ...base,
                        color: "#0f172a",
                      }),
                      indicatorSeparator: () => ({ display: "none" }),
                      dropdownIndicator: (base) => ({
                        ...base,
                        paddingRight: 10,
                        color: "#3b82f6",
                      }),
                    }}
                  />
                </div>

                <div className="md:col-span-3">
                  <button
                    onClick={handleSearch}
                    className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-semibold transition shadow-sm"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:hidden lg:flex flex justify-center lg:justify-end">
            <img
              src={career}
              alt="CareerConnect Hero"
              className=" w-full md:h-[60vh] max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

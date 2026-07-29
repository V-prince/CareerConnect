import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Select from "react-select";
import heroImage from "../assets/hero.png";

const locationOptions = [
  { value: "all", label: "All Locations" },
  { value: "ahmedabad", label: "Ahmedabad" },
  { value: "mumbai", label: "Mumbai" },
  { value: "delhi", label: "Delhi" },
  { value: "bangalore", label: "Bangalore" },
  { value: "hyderabad", label: "Hyderabad" },
  { value: "pune", label: "Pune" },
  { value: "chennai", label: "Chennai" },
];

const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-zinc-800">
              Find Your Dream
              <span className="block text-indigo-600">
                Job & Internship
              </span>
            </h1>

            <p className="text-zinc-600 mt-3 md:mt-5 text-sm md:text-base lg:text-lg">
              Find the perfect opportunity and kickstart your career
            </p>

            <div className="bg-white shadow-md rounded-xl p-3 mt-6 md:mt-8">
              <div className="grid lg:grid-cols-3 gap-3">
                <div className="flex items-center border border-zinc-200 rounded-xl px-4">
                  <FaSearch className="text-indigo-600 mr-3" />
                  <input
                    type="text"
                    placeholder="Job title, keyword..."
                    className="w-full h-12 outline-none text-sm"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <FaMapMarkerAlt className="text-indigo-600" />
                  </div>
                  <Select
                    options={locationOptions}
                    defaultValue={locationOptions[0]}
                    isSearchable
                    className="text-sm"
                    styles={{
                      control: (base) => ({
                        ...base,
                        height: 48,
                        borderRadius: 12,
                        borderColor: "#e4e4e7",
                        boxShadow: "none",
                        paddingLeft: 28,
                        "&:hover": {
                          borderColor: "#e4e4e7",
                        },
                      }),
                      indicatorSeparator: () => ({
                        display: "none",
                      }),
                      dropdownIndicator: (base) => ({
                        ...base,
                        paddingRight: 12,
                      }),
                    }}
                  />
                </div>

                <button className="h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition text-sm">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

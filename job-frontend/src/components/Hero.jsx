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
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Find Your Dream
              <span className="block text-blue-600">
                Job & Internship
              </span>
            </h1>

            <p className="text-gray-700 mt-5 text-base lg:text-lg">
              Find the perfect opportunity and kickstart your career
            </p>

            <div className="bg-white shadow-lg rounded-xl p-3 mt-8">
              <div className="grid lg:grid-cols-3 gap-3">
                <div className="flex items-center border border-gray-200 rounded-xl px-4">
                  <FaSearch className="text-blue-600 mr-3" />
                  <input
                    type="text"
                    placeholder="Job title, keyword..."
                    className="w-full h-12 outline-none text-sm"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <FaMapMarkerAlt className="text-blue-600" />
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
                        borderColor: "#e5e7eb",
                        boxShadow: "none",
                        paddingLeft: 28,
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

                <button className="h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition text-sm">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

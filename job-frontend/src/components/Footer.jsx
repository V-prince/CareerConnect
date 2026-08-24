import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold block bg-gradient-to-b from-blue-500 to-indigo-700 bg-clip-text text-transparent">
              Job<span className="text-white">Spark</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Discover jobs, internships and career opportunities from trusted
              companies across India.
            </p>

            <div className="flex gap-4 mt-8">
              <a className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center duration-300">
                <FaFacebookF />
              </a>

              <a className="w-11 h-11 rounded-full bg-slate-800 hover:bg-sky-500 flex items-center justify-center duration-300">
                <FaTwitter />
              </a>

              <a className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-700 flex items-center justify-center duration-300">
                <FaLinkedinIn />
              </a>

              <a className="w-11 h-11 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/jobs" className="hover:text-blue-400">
                  Jobs
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Resources</h3>

            <ul className="space-y-4">
              <li>
                <Link to="/login" className="hover:text-blue-400">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-blue-400">
                  Register
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/faq" className="hover:text-blue-400">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <p>Surat, Gujarat, India</p>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-blue-500 mt-1" />
                <p>jobspark@gmail.com</p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-blue-500 mt-1" />
                <p>+91 xxxxx xxxxx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} JobSpark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

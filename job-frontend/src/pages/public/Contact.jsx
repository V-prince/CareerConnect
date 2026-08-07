import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaFileAlt,
  FaPencilAlt,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt size={20} />,
    title: "Address",
    lines: ["123, College Road,", "Surat, Gujarat - 395001, India"],
  },
  {
    icon: <FaPhoneAlt size={20} />,
    title: "Phone",
    lines: ["+91 98765 43210", "+91 91234 56789"],
  },
  {
    icon: <FaEnvelope size={20} />,
    title: "Email",
    lines: ["support@jobspark.com", "info@jobspark.com"],
  },
  {
    icon: <FaClock size={20} />,
    title: "Working Hours",
    lines: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
  },
];

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    setContact({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white min-h-screen border-t border-zinc-200">
      <section className=" py-6 md:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-800">
              Contact Us
            </h1>

            <div className="w-12 h-1 bg-indigo-600 mt-4 md:mt-5 rounded-sm mx-auto"></div>

            <p className="text-zinc-600 mt-5 md:mt-6 leading-7 text-sm md:text-base lg:text-lg">
              We'd love to hear from you! Send us a message and we'll reply as
              soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className=" py-4 md:py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-1 flex flex-col h-full">
              <h2 className="text-lg md:text-xl font-bold text-zinc-800 mb-4 md:mb-5">
                Get In Touch
              </h2>

              <div className="space-y-3 md:space-y-4 flex-1 flex flex-col justify-start">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 md:p-5 flex items-start gap-4 hover:shadow-md transition"
                  >
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-semibold text-zinc-800 text-sm md:text-base">
                        {item.title}
                      </h3>

                      <div className="mt-1 md:mt-2 space-y-0.5">
                        {item.lines.map((line, lineIndex) => (
                          <p
                            key={lineIndex}
                            className="text-zinc-500 text-xs md:text-sm leading-5"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col h-full">
              <h2 className="text-lg md:text-xl font-bold text-zinc-800 mb-4 md:mb-5">
                Send Us a Message
              </h2>

              <div className="bg-white border border-zinc-200 shadow-md rounded-xl p-5 md:p-6 lg:p-8 flex-1 flex flex-col">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-5 h-full flex flex-col"
                >
                  <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={contact.name}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl border border-zinc-300 px-4 pr-11 text-sm text-zinc-700 bg-white outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                      />

                      <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl border border-zinc-300 px-4 pr-11 text-sm text-zinc-700 bg-white outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                      />

                      <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                      className="w-full h-12 rounded-xl border border-zinc-300 px-4 pr-11 text-sm text-zinc-700 bg-white outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                    />

                    <FaFileAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                  </div>

                  <div className="relative flex-1 flex flex-col">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={contact.message}
                      onChange={handleChange}
                      required
                      className="w-full flex-1 min-h-[180px] rounded-xl border border-zinc-300 px-4 pb-12 pt-4 text-sm text-zinc-700 bg-white outline-none resize-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                    />

                    <FaPencilAlt className="absolute right-4 bottom-4 text-zinc-400" />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white text-sm md:text-base font-semibold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <FaPaperPlane size={14} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { FaMapMarkerAlt } from "react-icons/fa";

const companyLogo = (company) => {
  const logos = {
    microsoft:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",

    google:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",

    amazon:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",

    ibm: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",

    dell: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",

    adobe:
      "https://www.pngall.com/wp-content/uploads/13/Adobe-Logo-PNG-Picture.png",

    infosys:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",

    wipro:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",

    tcs: "https://images.ctfassets.net/7xz1x21beds9/4cTq1jt8uh8jnBgvWbpKOV/663b48744791bd4e5ca178ae503d4916/Tata_Consultancy_Services_Logo.svg.png?w=1029&h=1029&q=90&fm=png",
  };

  return logos[company.toLowerCase()];
};

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Microsoft",
    location: "Bangalore",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "TCS",
    location: "Hyderabad",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Infosys",
    location: "Pune",
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    company: "Wipro",
    location: "Chennai",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Amazon",
    location: "Bangalore",
  },
];

const internships = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "Google",
    location: "Remote",
  },
  {
    id: 2,
    title: "Marketing Intern",
    company: "Amazon",
    location: "Bangalore",
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "IBM",
    location: "Remote",
  },
  {
    id: 4,
    title: "Technical Support Intern",
    company: "Dell",
    location: "Hyderabad",
  },
  {
    id: 5,
    title: "Graphic Design Intern",
    company: "Adobe",
    location: "Pune",
  },
];

const CardRow = ({ item }) => (
  <div className="flex flex-col gap-3 border-b border-zinc-200 py-4 last:border-0">
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-4 min-w-0">
        <img
          src={companyLogo(item.company)}
          alt={item.company}
          className="w-12 h-12 object-contain flex-shrink-0"
        />
        <div className="min-w-0">
          <h3 className="font-semibold text-sm md:text-base text-slate-900 truncate">
            {item.title}
          </h3>
          <p className="text-sm text-slate-500 truncate">{item.company}</p>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-slate-500 text-xs md:text-sm">
        <FaMapMarkerAlt size={13} />
        <span>{item.location}</span>
      </div>

      <button className="inline-flex items-center justify-center px-3 md:px-4 py-1.5 text-xs md:text-sm font-semibold rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
        Apply Now
      </button>
    </div>
  </div>
);

const ListCard = ({ title, items }) => (
  <div className="bg-white rounded-xl border border-zinc-200 p-5 md:p-6">
    <div className="flex items-center justify-between mb-4 md:mb-5">
      <h2 className="font-bold text-base md:text-lg lg:text-xl text-slate-900">
        {title}
      </h2>
      <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition">
        View All
      </button>
    </div>

    <div className="flex flex-col">
      {items.map((item) => (
        <CardRow key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const LatestJobs = () => {
  return (
    <section className="bg-transparent py-10 md:py-7 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <ListCard title="Latest Jobs" items={jobs} />
          <ListCard title="Latest Internships" items={internships} />
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;

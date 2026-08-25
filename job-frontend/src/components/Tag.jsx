
const Tag = ({ icon, text, color }) => {
  const colors = {
    green: "bg-green-50 text-green-600 border-green-100",
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${
        colors[color] || colors.blue
      }`}
    >
      {icon}
      {text}
    </span>
  );
};
export default Tag;


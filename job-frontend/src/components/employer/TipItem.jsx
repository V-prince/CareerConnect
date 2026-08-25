const TipItem = ({ icon, title, text }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-zinc-800">{title}</p>

        <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};
export default TipItem;

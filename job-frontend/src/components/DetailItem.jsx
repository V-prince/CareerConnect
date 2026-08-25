const DetailItem = ({ icon, title, value }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <p className="text-xs text-zinc-500">{title}</p>

        <p className="text-sm font-medium text-zinc-700 mt-1">{value}</p>
      </div>
    </div>
  );
};
export default DetailItem;

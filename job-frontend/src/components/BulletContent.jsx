const BulletContent = ({ content }) => {
  const items = Array.isArray(content)
    ? content
    : String(content)
        .split(/\n|•|;/)
        .map((item) => item.trim())
        .filter(Boolean);

  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-2 text-sm md:text-[15px] text-zinc-600 leading-6"
        >
          <span className="text-blue-600 mt-2 shrink-0">•</span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};
export default BulletContent;

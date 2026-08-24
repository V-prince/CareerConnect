const Section = ({ title, children }) => {
  return (
    <div className="mb-7">
      <h3 className="text-base md:text-lg font-bold text-zinc-800 mb-3">
        {title}
      </h3>

      {children}
    </div>
  );
};
export default Section;

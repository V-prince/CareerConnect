export const ProfileStatus = ({ title, done }) => {
  return (
    <div className="flex justify-between">

      <span>
        {done ? "✔" : "✖"} {title}
      </span>

      <span
        className={
          done
            ? "text-green-600"
            : "text-red-500"
        }
      >
        {done ? "Done" : "Missing"}
      </span>

    </div>
  );
};

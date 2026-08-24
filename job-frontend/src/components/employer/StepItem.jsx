const StepItem = ({ number, title, description, currentStep, line }) => {
  return (
    <div className="flex-1">
      <div className="flex items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
            currentStep >= number
              ? "bg-blue-600 text-white"
              : "bg-zinc-200 text-zinc-600"
          }`}
        >
          {number}
        </div>

        {line && (
          <div
            className={`h-0.5 flex-1 mx-3 ${
              currentStep > number ? "bg-blue-600" : "bg-zinc-200"
            }`}
          />
        )}
      </div>

      <div className="mt-2">
        <p className="text-sm font-semibold text-zinc-800">{title}</p>

        <p className="text-xs text-zinc-500 mt-0.5">{description}</p>
      </div>
    </div>
  );
};
export default StepItem;

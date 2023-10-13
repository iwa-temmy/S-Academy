const Stepper = (props) => {
  const { activeStep, totalSteps } = props;

  let arraySteps = Array(totalSteps)
    .fill()
    .map((_, i) => i + 1);
  return (
    <div className="text-xs font-medium text-[#5E5E62]">
      Step {activeStep}/{totalSteps}
      <div className="flex flex-row gap-1 mt-1">
        {arraySteps?.map((item) => {
          return (
            <span
              className={`h-[8px] w-[8px] rounded-full cursor-pointer ${
                item === activeStep ? "bg-[#002C72]" : "bg-[#EEF0FF]"
              }`}
              key={item}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;

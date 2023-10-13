const AppTag = (props) => {
  const { text, type } = props;

  return (
    <div
      className={`${
        type === "danger" ? "bg-danger" : "bg-default"
      } text-[#fff] text-[11px] font-semibold uppercase w-fit p-[3px] tracking-[0.25px]`}
    >
      {text}
    </div>
  );
};

export default AppTag;
